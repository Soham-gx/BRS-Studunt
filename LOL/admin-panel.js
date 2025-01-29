// Fetch Orders
function fetchOrders() {
  let orders = JSON.parse(localStorage.getItem('orders')) || [];
  let orderList = document.getElementById('order-list');

  orders.forEach(order => {
    let orderItem = document.createElement('div');
    orderItem.className = 'order-item';

    let orderContent = `
      <h3>${order.productName}</h3>
      <p>Quantity: ${order.quantity}</p>
      <p>Color: ${order.color}</p>
      <p>Customer Name: ${order.customerName}</p>
      <p>Address: ${order.address}</p>
    `;

    orderItem.innerHTML = orderContent;
    orderList.appendChild(orderItem);
  });
}

// Call fetchOrders on load
window.onload = fetchOrders;