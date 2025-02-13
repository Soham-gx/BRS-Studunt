function getOrders() {
  return JSON.parse(localStorage.getItem("orders")) || {};
}

function trackOrder() {
  let orderId = document.getElementById("orderId").value.trim();
  let orders = getOrders();
  let orderInfo = document.getElementById("orderInfo");

  if (orders[orderId]) {
    let order = orders[orderId];
    orderInfo.innerHTML = `
            <strong>Order No.:</strong> ${orderId} <br>
            <strong>Customer Name:</strong> ${order.customerName} <br>
            <strong>Phone Number:</strong> ${order.phoneNumber} <br>
            <strong>Product Name:</strong> ${order.productName} <br>
            <strong>Payment Method:</strong> ${order.paymentMethod} <br>
            <strong>Address:</strong> ${order.address} <br>
            <strong>Delivery Status:</strong> ${order.deliveryStatus} <br>
            <strong>Payment Received:</strong> ${order.paymentReceived} <br>
        `;
  } else {
    orderInfo.textContent = "Order not found!";
  }
}