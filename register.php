<?php
header('Content-Type: application/json');
require 'db.php';

$data = json_decode(file_get_contents('php://input'), true);
$username = trim($data['username'] ?? '');
$email    = trim($data['email'] ?? '');
$password = $data['password'] ?? '';

// Empty field check
if (!$username || !$email || !$password) {
  echo json_encode(['success' => false, 'message' => 'All fields are required']);
  exit;
}

// Username length
if (strlen($username) < 3) {
  echo json_encode(['success' => false, 'message' => 'Username must be at least 3 characters']);
  exit;
}

// Password length
if (strlen($password) < 8) {
  echo json_encode(['success' => false, 'message' => 'Password must be at least 8 characters']);
  exit;
}

// Email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo json_encode(['success' => false, 'message' => 'Please enter a valid email address']);
  exit;
}

// Check if username already exists
$check = $conn->prepare("SELECT id FROM users WHERE LOWER(username) = LOWER(?)");
$check->bind_param('s', $username);
$check->execute();
if ($check->get_result()->num_rows > 0) {
  echo json_encode(['success' => false, 'message' => 'Username already taken']);
  exit;
}

// Check if email already exists
$checkEmail = $conn->prepare("SELECT id FROM users WHERE email = ?");
$checkEmail->bind_param('s', $email);
$checkEmail->execute();
if ($checkEmail->get_result()->num_rows > 0) {
  echo json_encode(['success' => false, 'message' => 'Email already registered']);
  exit;
}

// Hash password and insert
$hashed = password_hash($password, PASSWORD_DEFAULT);
$stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
$stmt->bind_param('sss', $username, $email, $hashed);

if ($stmt->execute()) {
  echo json_encode(['success' => true, 'message' => 'Account created successfully']);
} else {
  echo json_encode(['success' => false, 'message' => 'Registration failed. Please try again.']);
}
?>