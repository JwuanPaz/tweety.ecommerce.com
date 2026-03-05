// Tweety's Store Logic
let cart = [];
const cartCountElement = document.getElementById('cart-count');
const cartDrawer = document.getElementById('cart-drawer');

// 1. Add to Cart Functionality
function addToCart(productName, price) {
    const item = { name: productName, price: price };
    cart.push(item);
    
    updateCartUI();
    animateCartBadge();
    console.log(`Added ${productName} to nest!`);
}

// 2. Update UI
function updateCartUI() {
    // Update the number on the cart button
    if (cartCountElement) {
        cartCountElement.innerText = cart.length;
    }
}

// 3. Simple Animation for feedback
function animateCartBadge() {
    cartCountElement.classList.add('scale-110', 'text-yellow-600');
    setTimeout(() => {
        cartCountElement.classList.remove('scale-110', 'text-yellow-600');
    }, 200);
}

// 4. Toggle Cart Sidebar
function toggleCart() {
    cartDrawer.classList.toggle('open');
}

// 5. Initialize listeners when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log("Dionne's Shop is ready for flight! 🐥");

});
