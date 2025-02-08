<?php
if (isset($_GET["index"])) {
    $orders = file("order.txt", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    
    $index = (int)$_GET["index"];
    if (isset($orders[$index])) {
        unset($orders[$index]);
        file_put_contents("order.txt", implode(PHP_EOL, $orders) . PHP_EOL);
        echo json_encode(["success" => true, "message" => "Order Deleted"]);
    } else {
        echo json_encode(["success" => false, "message" => "Order Not Found"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid Request"]);
}
?>