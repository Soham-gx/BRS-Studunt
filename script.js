document.addEventListener('DOMContentLoaded', () => {
  fetch('products.php')
    .then(response => response.json())
    .then(products => {
      const productContainer = document.getElementById('product-container');
      products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price} INR</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productCard);
      });
    })
    .catch(error => console.error('Error fetching products:', error));
});

function addToCart(productId) {
  // Make an AJAX request to add the product to the cart
  fetch('cart.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: productId }),
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
    })
    .catch(error => console.error('Error adding to cart:', error));
}