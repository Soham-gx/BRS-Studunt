
<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $sender = $_SESSION['username'];
    $recipient = $_POST['recipient'];
    $message = $_POST['message'];

    $filename = "{$sender}-{$recipient}.txt";

    $formattedMessage = "[" . date("H:i:s") . "] {$sender}: {$message}\n";

    file_put_contents($filename, $formattedMessage, FILE_APPEND);
}
?>
