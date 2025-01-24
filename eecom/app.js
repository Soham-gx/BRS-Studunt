let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');

let products = [];
let cart = [];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

const addDataToHTML = () => {
    listProductHTML.innerHTML = ''; // Clear existing data
    if (products.length > 0) {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button class="addCart">Add To Cart</button>`;
            listProductHTML.appendChild(newProduct);
        });
    }
};

const addToCart = (product_id) => {
    let existingProduct = cart.find(item => item.product_id == product_id);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ product_id, quantity: 1 });
    }
    updateCartHTML();
};

const updateCartHTML = () => {
    listCartHTML.innerHTML = '';
    let totalItems = 0;
    cart.forEach(item => {
        let product = products.find(p => p.id == item.product_id);
        totalItems += item.quantity;
        listCartHTML.innerHTML += `
            <div class="item">
                <span>${product.name}</span>
                <span>${item.quantity} x $${product.price}</span>
            </div>`;
    });
    iconCartSpan.textContent = totalItems;
};

listProductHTML.addEventListener('click', (e) => {
    if (e.target.classList.contains('addCart')) {
        let productId = e.target.closest('.item').dataset.id;
        addToCart(productId);
    }
});

const initApp = () => {
    fetch('./products.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            addDataToHTML();
        });
};

initApp();