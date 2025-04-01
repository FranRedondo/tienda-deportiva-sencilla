// Crear un carrito de compras
let cart = [];

// Función para actualizar el número de productos en el carrito
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Función para mostrar el carrito
function showCart() {
    const cartPopup = document.getElementById('cart-popup');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    // Limpiar la lista del carrito
    cartItemsList.innerHTML = '';

    // Calcular el total
    let total = 0;
    
    // Agregar productos al carrito
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(listItem);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
    cartPopup.style.display = 'flex';
}

// Función para agregar productos al carrito
function addToCart(productId) {
    const products = [
        { id: 1, name: 'Pelota de Fútbol', price: 29.99 },
        { id: 2, name: 'Raqueta de Tenis', price: 49.99 },
        { id: 3, name: 'Botines de Fútbol', price: 79.99 }
    ];

    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
    }
}

// Manejar el clic en los botones de "Añadir al carrito"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = parseInt(button.closest('.product-card').getAttribute('data-id'));
        addToCart(productId);
    });
});

// Mostrar el carrito cuando se haga clic en el icono del carrito
document.getElementById('cart-btn').addEventListener('click', showCart);

// Cerrar el popup del carrito
document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart-popup').style.display = 'none';
});
