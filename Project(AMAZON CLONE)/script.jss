const products = [
    {
        id: 1,
        title: "Laptop",
        price: 899,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
    },
    {
        id: 2,
        title: "Headphones",
        price: 99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
        id: 3,
        title: "Smartphone",
        price: 699,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
    },
    {
        id: 4,
        title: "Smart Watch",
        price: 199,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
        id: 5,
        title: "Camera",
        price: 499,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
    },
    {
        id: 6,
        title: "Keyboard",
        price: 49,
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500"
    }
];

const productContainer = document.getElementById("products");
const cartCount = document.getElementById("cart-count");

let cart = [];

function displayProducts() {
    productContainer.innerHTML = "";

    products.forEach(product => {
        productContainer.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;
    });
}

function addToCart(id) {
    const product = products.find(item => item.id === id);
    cart.push(product);
    cartCount.textContent = cart.length;
}

displayProducts();