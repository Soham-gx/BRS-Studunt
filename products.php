<?php
header('Content-Type: application/json');

// Dummy product data
$products = [
    ["id" => 1, "name" => "iPhone 13", "price" => "79999", "image" => "assets/iphone13.jpg"],
    ["id" => 2, "name" => "Samsung Galaxy S21", "price" => "69999", "image" => "assets/galaxyS21.jpg"],
    ["id" => 3, "name" => "OnePlus 9 Pro", "price" => "64999", "image" => "assets/oneplus9pro.jpg"],
];

echo json_encode($products);
?>