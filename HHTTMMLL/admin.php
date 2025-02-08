<?php
header("Content-Type: application/json");

$orders = file("order.txt", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
$orderList = [];

foreach ($orders as $index => $order) {
    list($name, $phone, $address, $product) = explode(" | ", $order);
    $orderList[] = ["index" => $index, "name" => $name, "phone" => $phone, "address" => $address, "product" => $product];
}

echo json_encode($orderList);
?>