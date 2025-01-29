
// Simple JavaScript to handle 'Add to Cart' functionality
const cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const productName = event.target.previousElementSibling.previousElementSibling.textContent;
        const productPrice = event.target.previousElementSibling.textContent;
        cart.push({ productName, productPrice });
        alert(`${productName} added to cart`);
    });
});
