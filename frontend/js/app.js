function displayProducts() {

    const container =
        document.getElementById("product-container");

    container.innerHTML = "";

    products.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <img src="images/${product.image}"
                 alt="${product.name}">

            <h3>${product.name}</h3>

            <p>₹${product.price}</p>

            <p>${product.category}</p>

            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        `;

        container.appendChild(card);
    });
}


function showProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =========================
   SEARCH PRODUCTS
   ========================= */

function searchProducts() {

    const searchText =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();

    const filteredProducts =
        products.filter(product =>
            product.name
                .toLowerCase()
                .includes(searchText)
        );

    displayFilteredProducts(filteredProducts);
}


function displayFilteredProducts(productList) {

    const container =
        document.getElementById("product-container");

    container.innerHTML = "";

    productList.forEach(product => {

        const card =
            document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}"
                 alt="${product.name}">

            <h3>${product.name}</h3>

            <p>₹${product.price}</p>

            <p>${product.category}</p>

            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        `;

        container.appendChild(card);
    });
}


/* =========================
   SEARCH INPUT
   ========================= */

document
    .getElementById("searchInput")
    .addEventListener("input", searchProducts);


/* =========================
   DISPLAY PRODUCTS
   ========================= */

displayProducts();