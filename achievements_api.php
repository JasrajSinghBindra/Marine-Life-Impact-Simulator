<?php
// =============================================
// achievements_api.php — Returns user's achievements
// GET request, requires active session
// =============================================
session_start();
header('Content-Type: application/json');
require 'database.php';

// Auth check
if (!isset($_SESSION['user_id'])) {
    echo json_encode(['success' => false, 'message' => 'Not logged in']);
    exit;
}

$user_id = $_SESSION['user_id'];

// Fetch all achievements for this user
$stmt = $conn->prepare("
    SELECT achievement_key, achievement_name, achievement_desc, unlocked_at
    FROM achievements
    WHERE user_id = ?
    ORDER BY unlocked_at ASC
");
$stmt->bind_param('i', $user_id);
$stmt->execute();
$result = $stmt->get_result();

$achievements = [];
while ($row = $result->fetch_assoc()) {
    $achievements[] = [
        'key'         => $row['achievement_key'],
        'name'        => $row['achievement_name'],
        'description' => $row['achievement_desc'],
        'unlocked_at' => $row['unlocked_at']
    ];
}
$stmt->close();

echo json_encode(['success' => true, 'achievements' => $achievements]);
?>
