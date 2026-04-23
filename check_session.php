<?php
// =============================================
// check_session.php — Returns current login status
// Used by frontend to check if user is logged in
// =============================================
session_start();
header('Content-Type: application/json');

if (isset($_SESSION['user_id']) && isset($_SESSION['oceansim_user'])) {
    echo json_encode([
        'loggedIn'  => true,
        'username'  => $_SESSION['oceansim_user'],
        'user_id'   => $_SESSION['user_id']
    ]);
} else {
    echo json_encode([
        'loggedIn' => false
    ]);
}
?>
