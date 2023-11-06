// Data produk
const products = [
    { id: 1, name: "Produk 1", price: 10 },
    { id: 2, name: "Produk 2", price: 20 },
    { id: 3, name: "Produk 3", price: 30 },
];

// Keranjang belanja
const cart = [];
let totalPayment = 0;

// Tampilkan produk di halaman
function displayProducts() {
    const productContainer = document.querySelector(".product-list");

    products.forEach((product) => {
        const productItem = document.createElement("div");
        productItem.className = "product";
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Harga: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Tambah ke Keranjang</button>
        `;
        productContainer.appendChild(productItem);
    });
}

// Tambah produk ke keranjang
function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (product) {
        cart.push(product);
        totalPayment += product.price;
        updateCart();
        updateTotalPayment();
    }
}

// Update tampilan keranjang
function updateCart() {
    const cartItems = document.querySelector("#cart-items");
    cartItems.innerHTML = "";
    cart.forEach((item) => {
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `${item.name} - $${item.price}`;
        cartItems.appendChild(cartItem);
    });
}

// Update tampilan total pembayaran
function updateTotalPayment() {
    const totalPaymentElement = document.querySelector("#total-payment");
    totalPaymentElement.textContent = `$${totalPayment}`;
}

// Event listener untuk tombol Checkout
document.querySelector("#checkout-button").addEventListener("click", () => {
    // Lakukan logika pembayaran di sini
    alert("Terima kasih telah berbelanja!");
    cart.length = 0; // Kosongkan keranjang setelah checkout
    totalPayment = 0; // Reset total pembayaran
    updateCart();
    updateTotalPayment();
});

displayProducts(); // Panggil fungsi untuk menampilkan produk di halaman
