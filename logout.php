<?php
// TC_LOGIN_10: logout — destroy session and redirect
session_start();
session_destroy();
header('Location: login.html?logout=1');
exit;
?>