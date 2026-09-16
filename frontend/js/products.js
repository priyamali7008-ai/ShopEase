// Product data will come from the backend API
let products = [];


// =====================================
// Load Products from Backend
// =====================================

async function loadProducts() {

    try {

        const response = await fetch(
            "http://localhost:5000/api/products"
        );

        if (!response.ok) {

            throw new Error(
                "Failed to load products"
            );

        }

        const apiProducts =
            await response.json();

        // Store API products in the products variable
        products = apiProducts;

        console.log(
            "Products received from API:",
            products
        );

        // Display products after loading
        if (typeof displayProducts === "function") {
            displayProducts();
        }

    } catch (error) {

        console.error(
            "API Error:",
            error
        );

    }
}


// Start loading products
loadProducts();