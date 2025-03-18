
<?php
session_start();

if (isset($_GET['recipient'])) {
    $sender = $_SESSION['username'];
    $recipient = $_GET['recipient'];
    
    $filename1 = "{$sender}-{$recipient}.txt";
    $filename2 = "{$recipient}-{$sender}.txt";

    $messages = "";

    if (file_exists($filename1)) {
        $messages .= file_get_contents($filename1);
    }
    if (file_exists($filename2)) {
        $messages .= file_get_contents($filename2);
    }

    echo nl2br($messages);
}
?>
