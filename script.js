/* =========================================================
   MAX MOBILE & GENERAL DEALERS
   Main Website JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", function () {

            mobileMenu.classList.toggle("show");

            const icon = menuButton.querySelector("i");

            if (mobileMenu.classList.contains("show")) {

                if (icon) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");
                }

            } else {

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            }

        });


        /* Close mobile menu after clicking a link */

        const mobileLinks = mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mobileMenu.classList.remove("show");

                const icon = menuButton.querySelector("i");

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            });

        });

    }


    /* =====================================================
       SEARCH BOX
    ===================================================== */

    const searchButton = document.getElementById("searchButton");
    const searchBox = document.getElementById("searchBox");
    const searchInput = document.getElementById("searchInput");

    if (searchButton && searchBox) {

        searchButton.addEventListener("click", function () {

            searchBox.classList.toggle("show");

            if (searchBox.classList.contains("show") && searchInput) {
                setTimeout(function () {
                    searchInput.focus();
                }, 100);
            }

        });

    }


    /* =====================================================
       PRODUCT DATABASE
    ===================================================== */

    const products = [

        {
            id: 1,
            brand: "Infinix",
            name: "Infinix Smartphone",
            description: "Modern Infinix smartphone with excellent performance.",
            price: "Contact for Price",
            badge: "POPULAR",
            icon: "fa-mobile-screen-button"
        },

        {
            id: 2,
            brand: "Tecno",
            name: "Tecno Smartphone",
            description: "Powerful Tecno smartphone for everyday performance.",
            price: "Contact for Price",
            badge: "NEW",
            icon: "fa-mobile-screen-button"
        },

        {
            id: 3,
            brand: "Itel",
            name: "Itel Smartphone",
            description: "Affordable and reliable Itel mobile phone.",
            price: "Contact for Price",
            badge: "DEAL",
            icon: "fa-mobile-screen-button"
        },

        {
            id: 4,
            brand: "Samsung",
            name: "Samsung Galaxy",
            description: "Premium Samsung Galaxy smartphone.",
            price: "Contact for Price",
            badge: "HOT",
            icon: "fa-mobile-screen-button"
        },

        {
            id: 5,
            brand: "Vivo",
            name: "Vivo Smartphone",
            description: "Stylish Vivo smartphone with modern features.",
            price: "Contact for Price",
            badge: "NEW",
            icon: "fa-mobile-screen-button"
        },

        {
            id: 6,
            brand: "Infinix",
            name: "Infinix Note Series",
            description: "Large display and powerful everyday performance.",
            price: "Contact for Price",
            badge: "POPULAR",
            icon: "fa-mobile-screen-button"
        },

        {
            id: 7,
            brand: "Tecno",
            name: "Tecno Camon Series",
            description: "Designed for photography and entertainment.",
            price: "Contact for Price",
            badge: "HOT",
            icon: "fa-mobile-screen-button"
        },

        {
            id: 8,
            brand: "Samsung",
            name: "Samsung Galaxy A Series",
            description: "Reliable Galaxy performance and modern design.",
            price: "Contact for Price",
            badge: "DEAL",
            icon: "fa-mobile-screen-button"
        }

    ];


    /* =====================================================
       PRODUCT GRID
    ===================================================== */

    const productsGrid = document.querySelector(".products-grid");

    function renderProducts(productList) {

        if (!productsGrid) {
            return;
        }

        productsGrid.innerHTML = "";


        if (productList.length === 0) {

            productsGrid.innerHTML = `
                <div class="no-products">
                    <i class="fa-solid fa-magnifying-glass"></i>

                    <h3>No Products Found</h3>

                    <p>
                        We could not find a product matching your search.
                    </p>
                </div>
            `;

            return;
        }


        productList.forEach(function (product) {

            const card = document.createElement("article");

            card.className = "product-card";

            card.dataset.brand = product.brand.toLowerCase();

            card.innerHTML = `

                <div class="product-image">

                    <span class="product-badge">
                        ${product.badge}
                    </span>

                    <div class="placeholder-phone">

                        <i class="fa-solid ${product.icon}"></i>

                    </div>

                </div>


                <div class="product-info">

                    <span class="product-brand">
                        ${product.brand}
                    </span>

                    <h3>
                        ${product.name}
                    </h3>

                    <p>
                        ${product.description}
                    </p>


                    <div class="product-bottom">

                        <strong>
                            ${product.price}
                        </strong>

                        <button
                            class="order-button"
                            data-product="${product.name}"
                            data-brand="${product.brand}">

                            <i class="fa-brands fa-whatsapp"></i>

                            Order

                        </button>

                    </div>

                </div>

            `;

            productsGrid.appendChild(card);

        });


        attachOrderButtons();

    }


    /* =====================================================
       INITIAL PRODUCT DISPLAY
    ===================================================== */

    renderProducts(products);


    /* =====================================================
       SEARCH PRODUCTS
    ===================================================== */

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const searchTerm =
                searchInput.value.trim().toLowerCase();


            if (searchTerm === "") {

                renderProducts(products);

                return;

            }


            const filteredProducts = products.filter(function (product) {

                return (

                    product.name.toLowerCase().includes(searchTerm) ||

                    product.brand.toLowerCase().includes(searchTerm) ||

                    product.description.toLowerCase().includes(searchTerm)

                );

            });


            renderProducts(filteredProducts);

        });


        /* Search when Enter is pressed */

        searchInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                const firstProduct =
                    document.querySelector(".product-card");

                if (firstProduct) {

                    firstProduct.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }

            }

        });

    }


    /* =====================================================
       WHATSAPP ORDER SYSTEM
    ===================================================== */

    function attachOrderButtons() {

        const orderButtons =
            document.querySelectorAll(".order-button");


        orderButtons.forEach(function (button) {

            button.addEventListener("click", function () {

                const productName =
                    button.dataset.product || "mobile phone";

                const brand =
                    button.dataset.brand || "";


                const message =
                    `Hello Max Mobile and General Dealers.%0A%0A` +
                    `I am interested in buying:%0A` +
                    `${brand} ${productName}%0A%0A` +
                    `Please send me the price and availability.`;


                /*
                   IMPORTANT:
                   Replace 260000000000 with the
                   actual Max Mobile WhatsApp number.
                */

                const whatsappNumber = "260000000000";

                const whatsappURL =
                    `https://wa.me/${whatsappNumber}?text=${message}`;


                window.open(
                    whatsappURL,
                    "_blank",
                    "noopener,noreferrer"
                );

            });

        });

    }


    /* =====================================================
       SMOOTH SCROLLING
    ===================================================== */

    const smoothLinks =
        document.querySelectorAll('a[href^="#"]');


    smoothLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetID =
                link.getAttribute("href");

            if (!targetID || targetID === "#") {
                return;
            }


            const target =
                document.querySelector(targetID);


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("main section[id]");

    const navLinks =
        document.querySelectorAll(".desktop-nav a");


    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (href === `#${currentSection}`) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    const header =
        document.querySelector(".header");


    function updateHeader() {

        if (!header) {
            return;
        }


        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader
    );


    updateHeader();


    /* =====================================================
       WHATSAPP CONTACT BUTTONS
    ===================================================== */

    const contactButtons =
        document.querySelectorAll(
            'a[href*="wa.me"]'
        );


    contactButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            /*
               Replace the WhatsApp number
               in index.html later.
            */

        });

    });


    /* =====================================================
       IMAGE ERROR HANDLING
    ===================================================== */

    const images =
        document.querySelectorAll("img");


    images.forEach(function (image) {

        image.addEventListener("error", function () {

            image.style.visibility = "hidden";

        });

    });


    /* =====================================================
       PAGE LOAD
    ===================================================== */

    document.body.classList.add("page-loaded");


    console.log(
        "MAX MOBILE website loaded successfully."
    );

});
