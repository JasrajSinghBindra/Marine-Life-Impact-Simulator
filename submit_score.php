<?php
// =============================================
// submit_score.php — Saves game score & checks achievements
// POST: { "score": int }
// Requires active session (logged-in user)
// =============================================
session_start();
header('Content-Type: application/json');
require 'database.php';

// Auth check — only logged-in users can submit scores
if (!isset($_SESSION['user_id'])) {
    echo json_encode(['success' => false, 'message' => 'Not logged in']);
    exit;
}

$user_id = $_SESSION['user_id'];
$data = json_decode(file_get_contents('php://input'), true);
$score = intval($data['score'] ?? 0);

// Validate score
if ($score < 0) {
    echo json_encode(['success' => false, 'message' => 'Invalid score']);
    exit;
}

// Insert into scores table (for leaderboard)
$stmt = $conn->prepare("INSERT INTO scores (user_id, score) VALUES (?, ?)");
$stmt->bind_param('ii', $user_id, $score);
$stmt->execute();
$stmt->close();

// Insert into history table (for personal history)
$stmt2 = $conn->prepare("INSERT INTO history (user_id, score) VALUES (?, ?)");
$stmt2->bind_param('ii', $user_id, $score);
$stmt2->execute();
$stmt2->close();

// =============================================
// Achievement checks — unlock automatically
// =============================================
$newAchievements = [];

// Helper: check if achievement already exists for user
function hasAchievement($conn, $user_id, $key) {
    $check = $conn->prepare("SELECT id FROM achievements WHERE user_id = ? AND achievement_key = ?");
    $check->bind_param('is', $user_id, $key);
    $check->execute();
    $result = $check->get_result();
    $exists = $result->num_rows > 0;
    $check->close();
    return $exists;
}

// Helper: award achievement
function awardAchievement($conn, $user_id, $key, $name, $desc) {
    $ins = $conn->prepare("INSERT IGNORE INTO achievements (user_id, achievement_key, achievement_name, achievement_desc) VALUES (?, ?, ?, ?)");
    $ins->bind_param('isss', $user_id, $key, $name, $desc);
    $ins->execute();
    $awarded = $ins->affected_rows > 0;
    $ins->close();
    return $awarded;
}

// Achievement 1: First game played
if (!hasAchievement($conn, $user_id, 'first_game')) {
    if (awardAchievement($conn, $user_id, 'first_game', 'First Dive', 'Played your first Ocean Doctor game')) {
        $newAchievements[] = ['key' => 'first_game', 'name' => 'First Dive', 'desc' => 'Played your first Ocean Doctor game'];
    }
}

// Achievement 2: Score > 100
if ($score > 100 && !hasAchievement($conn, $user_id, 'score_100')) {
    if (awardAchievement($conn, $user_id, 'score_100', 'Ocean Cleaner', 'Scored over 100 points in a single game')) {
        $newAchievements[] = ['key' => 'score_100', 'name' => 'Ocean Cleaner', 'desc' => 'Scored over 100 points in a single game'];
    }
}

// Achievement 3: Score > 500
if ($score > 500 && !hasAchievement($conn, $user_id, 'score_500')) {
    if (awardAchievement($conn, $user_id, 'score_500', 'Ocean Guardian', 'Scored over 500 points in a single game')) {
        $newAchievements[] = ['key' => 'score_500', 'name' => 'Ocean Guardian', 'desc' => 'Scored over 500 points in a single game'];
    }
}

// Achievement 4: Score > 1000
if ($score > 1000 && !hasAchievement($conn, $user_id, 'score_1000')) {
    if (awardAchievement($conn, $user_id, 'score_1000', 'Marine Hero', 'Scored over 1000 points in a single game')) {
        $newAchievements[] = ['key' => 'score_1000', 'name' => 'Marine Hero', 'desc' => 'Scored over 1000 points in a single game'];
    }
}

// Achievement 5: Played 10 games
$countStmt = $conn->prepare("SELECT COUNT(*) as total FROM history WHERE user_id = ?");
$countStmt->bind_param('i', $user_id);
$countStmt->execute();
$totalGames = $countStmt->get_result()->fetch_assoc()['total'];
$countStmt->close();

if ($totalGames >= 10 && !hasAchievement($conn, $user_id, 'ten_games')) {
    if (awardAchievement($conn, $user_id, 'ten_games', 'Dedicated Diver', 'Played 10 Ocean Doctor games')) {
        $newAchievements[] = ['key' => 'ten_games', 'name' => 'Dedicated Diver', 'desc' => 'Played 10 Ocean Doctor games'];
    }
}

echo json_encode([
    'success' => true,
    'score'   => $score,
    'newAchievements' => $newAchievements
]);
?>
