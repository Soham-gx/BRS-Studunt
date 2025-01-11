function proceedToPay() {
    document.getElementById('proceed-to-pay').style.display = 'none';
    document.getElementById('address-form').style.display = 'block';

    // Populate order summary (dummy data for now)
    const productName = "Sample Product";
    const productQuantity = 2;
    const productPrice = 50;
    const grandTotal = productQuantity * productPrice;

    document.getElementById('product-name').innerText = productName;
    document.getElementById('product-quantity').innerText = productQuantity;
    document.getElementById('product-price').innerText = productPrice;
    document.getElementById('grand-total').innerText = grandTotal;
}

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const productName = document.getElementById('product-name').innerText;
    const productQuantity = document.getElementById('product-quantity').innerText;
    const grandTotal = document.getElementById('grand-total').innerText;

    const data = {
        name: name,
        address: address,
        phone: phone,
        productName: productName,
        productQuantity: productQuantity,
        grandTotal: grandTotal
    };

    fetch('YOUR_DEPLOYMENT_URL', { // Replace with your Google Apps Script URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data => {
        alert('Order submitted successfully!');
        window.location.href = '/thank-you.html'; // Redirect to a thank-you page
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your order. Please try again.');
    });
}