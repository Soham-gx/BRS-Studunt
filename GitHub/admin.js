function getOrders() {
    return JSON.parse(localStorage.getItem("orders")) || {};
}

function saveOrders(orders) {
    localStorage.setItem("orders", JSON.stringify(orders));
    loadOrders();
}

function addOrder() {
    let orderId = document.getElementById("orderId").value.trim();
    let customerName = document.getElementById("customerName").value.trim();
    let phoneNumber = document.getElementById("phoneNumber").value.trim();
    let productName = document.getElementById("productName").value.trim();
    let paymentMethod = document.getElementById("paymentMethod").value.trim();
    let address = document.getElementById("address").value.trim();
    let deliveryStatus = document.getElementById("deliveryStatus").value.trim();
    let paymentReceived = document.getElementById("paymentReceived").value.trim();

    if (!orderId || !customerName || !phoneNumber || !productName || !paymentMethod || !address || !deliveryStatus || !paymentReceived) {
        alert("Please fill all fields.");
        return;
    }

    let orders = getOrders();
    orders[orderId] = {
        customerName, phoneNumber, productName, paymentMethod, address, deliveryStatus, paymentReceived
    };
    saveOrders(orders);
}

function deleteOrder(orderId) {
    let orders = getOrders();
    delete orders[orderId];
    saveOrders(orders);
}

function loadOrders() {
    let orders = getOrders();
    let tableBody = document.getElementById("ordersTable");
    tableBody.innerHTML = "";

    Object.keys(orders).forEach(orderId => {
        let order = orders[orderId];
        let row = `
            <tr>
                <td>${orderId}</td>
                <td>${order.customerName}</td>
                <td>${order.productName}</td>
                <td>${order.deliveryStatus}</td>
                <td>
                    <button onclick="deleteOrder('${orderId}')">❌ Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

document.addEventListener("DOMContentLoaded", loadOrders);