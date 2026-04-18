<?php
session_start();
header('Content-Type: application/json');
require 'db.php';

$data = json_decode(file_get_contents('php://input'), true);
$username = trim($data['username'] ?? '');
$password = $data['password'] ?? '';

// TC_LOGIN_04: empty fields
if (!$username || !$password) {
  echo json_encode(['success' => false, 'message' => 'All fields are required']);
  exit;
}

// TC_LOGIN_07: check if account is locked
$lockCheck = $conn->prepare("SELECT locked FROM users WHERE LOWER(username) = LOWER(?)");
$lockCheck->bind_param('s', $username);
$lockCheck->execute();
$lockResult = $lockCheck->get_result()->fetch_assoc();

if ($lockResult && $lockResult['locked']) {
  echo json_encode(['success' => false, 'message' => 'Account locked. Please reset your password.', 'locked' => true]);
  exit;
}

// TC_LOGIN_03 + TC_LOGIN_05: find user (case-insensitive username)
$stmt = $conn->prepare("SELECT * FROM users WHERE LOWER(username) = LOWER(?)");
$stmt->bind_param('s', $username);
$stmt->execute();
$user = $stmt->get_result()->fetch_assoc();

if (!$user) {
  // TC_LOGIN_03: user not found
  echo json_encode(['success' => false, 'message' => 'Error: User not found. Please register first.']);
  exit;
}

// TC_LOGIN_02 + TC_LOGIN_05: password is case-sensitive
if (!password_verify($password, $user['password'])) {
  // Increment failed attempts
  $attempts = $user['failed_attempts'] + 1;
  $locked = $attempts >= 5 ? 1 : 0;
  $update = $conn->prepare("UPDATE users SET failed_attempts = ?, locked = ? WHERE id = ?");
  $update->bind_param('iii', $attempts, $locked, $user['id']);
  $update->execute();

  if ($locked) {
    echo json_encode(['success' => false, 'message' => 'Account locked due to too many failed attempts.', 'locked' => true]);
  } else {
    $remaining = 5 - $attempts;
    echo json_encode(['success' => false, 'message' => "Error: Invalid credentials. $remaining attempt(s) remaining."]);
  }
  exit;
}

// TC_LOGIN_01: valid login — reset failed attempts
$reset = $conn->prepare("UPDATE users SET failed_attempts = 0 WHERE id = ?");
$reset->bind_param('i', $user['id']);
$reset->execute();

// TC_LOGIN_09: session handling
$_SESSION['oceansim_user'] = $user['username'];
$_SESSION['user_id'] = $user['id'];

echo json_encode(['success' => true, 'username' => $user['username']]);
?>