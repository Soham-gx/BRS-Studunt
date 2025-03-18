
<?php
session_start();

$users = [
    'Soham' => '1234',
    'Simran' => '5678',
    'Janu' => '1111',
    'Kunal' => '2222',
    'Harshu' => '3333'
];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if (isset($users[$username]) && $users[$username] == $password) {
        $_SESSION['username'] = $username;
        header("Location: chat.html");
        exit;
    } else {
        echo "<script>alert('Invalid username or password'); window.location.href='index.html';</script>";
    }
}
?>
