let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productId) {
    const product = products.find(
        product => String(product.id) === String(productId)
    );

    if (!product) {
        console.error("Product not found:", productId);
        return;
    }

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(`${product.name} added to cart!`);

    displayCart();
}

    if (!product) {
        return;
    }

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(
        `${product.name} added to cart!`
    );



function removeFromCart(index) {

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}
function displayCart() {

    const container =
        document.getElementById("cart-container");

    container.innerHTML = "";

    if (cart.length === 0) {

        container.innerHTML =
            "<p>Your cart is empty.</p>";

        return;
    }

    cart.forEach((product, index) => {

        const item =
            document.createElement("div");

        item.innerHTML = `
            <h3>${product.name}</h3>

            <p>₹${product.price}</p>

            <button
                onclick="removeFromCart(${index})">
                Remove
            </button>
        `;

        container.appendChild(item);
    });
}

displayCart();