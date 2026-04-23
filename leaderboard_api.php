<?php
// =============================================
// leaderboard_api.php — Returns top 20 scores
// GET request, public (no auth required)
// Returns JSON array sorted by highest score
// =============================================
header('Content-Type: application/json');
require 'database.php';

// Fetch top 20 scores with usernames, highest first
$stmt = $conn->prepare("
    SELECT u.username, MAX(s.score) as score, MAX(s.played_at) as played_at
    FROM scores s
    JOIN users u ON s.user_id = u.id
    GROUP BY s.user_id, u.username
    ORDER BY score DESC
    LIMIT 20
");

$stmt->execute();
$result = $stmt->get_result();

$leaderboard = [];
while ($row = $result->fetch_assoc()) {
    $leaderboard[] = [
        'username'  => $row['username'],
        'score'     => (int)$row['score'],
        'played_at' => $row['played_at']
    ];
}
$stmt->close();

echo json_encode(['success' => true, 'leaderboard' => $leaderboard]);
?>
