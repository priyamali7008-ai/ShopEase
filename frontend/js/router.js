const routes = {
    "#/": "home",
    "#/products": "products",
    "#/cart": "cart",
    "#/about": "about"
};

function navigate(path) {
    window.location.hash = path;
}

function router() {

    const currentHash = window.location.hash || "#/";

    const page = routes[currentHash] || "home";

    console.log("Current page:", page);
}

window.addEventListener("hashchange", router);

router();