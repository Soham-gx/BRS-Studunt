<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $address = $_POST["address"];
    $product = $_POST["product"];

    $orderData = "$name | $phone | $address | $product" . PHP_EOL;

    file_put_contents("order.txt", $orderData, FILE_APPEND);

    echo json_encode(["success" => true, "message" => "Order Placed Successfully!"]);
} else {
    echo json_encode(["success" => false, "message" => "Invalid Request"]);
}
?>