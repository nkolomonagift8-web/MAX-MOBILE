/* =========================================================
   MAX MOBILE & GENERAL DEALERS
   PREMIUM PRODUCT CATALOGUE
   TECNO + INFINIX + ITEL
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuButton = document.getElementById("mobileMenuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", () => {
            mobileMenu.classList.toggle("active");
            menuButton.classList.toggle("active");
        });
    }

    document.querySelectorAll(".mobile-menu a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu?.classList.remove("active");
            menuButton?.classList.remove("active");
        });
    });


    /* =====================================================
       SEARCH
    ===================================================== */

    const searchButton = document.getElementById("searchButton");
    const searchBox = document.getElementById("searchBox");
    const searchInput = document.getElementById("searchInput");

    if (searchButton && searchBox) {
        searchButton.addEventListener("click", () => {

            searchBox.classList.toggle("active");

            if (searchBox.classList.contains("active")) {
                setTimeout(() => {
                    searchInput?.focus();
                }, 150);
            }

        });
    }


    /* =====================================================
       WHATSAPP NUMBER
       REPLACE WITH YOUR REAL NUMBER LATER
    ===================================================== */

    const whatsappNumber = "260000000000";


    /* =====================================================
       PRODUCT DATABASE
       TECNO + INFINIX + ITEL
    ===================================================== */

    const products = [

        /* =================================================
           TECNO
        ================================================= */

        {
            id: 1,
            brand: "TECNO",
            name: "SPARK 50",
            category: "Phones",
            description: "Modern design • Large battery • Smooth display",
            price: "Contact for Price",
            badge: "NEW",
            image: "images/tecno-spark-50.jpg"
        },

        {
            id: 2,
            brand: "TECNO",
            name: "CAMON 50",
            category: "Phones",
            description: "Powerful camera • Premium display • Long battery",
            price: "Contact for Price",
            badge: "POPULAR",
            image: "images/tecno-camon-50.jpg"
        },

        {
            id: 3,
            brand: "TECNO",
            name: "CAMON 50 PRO",
            category: "Phones",
            description: "Pro camera experience • Premium design • Fast charging",
            price: "Contact for Price",
            badge: "PRO",
            image: "images/tecno-camon-50-pro.jpg"
        },

        {
            id: 4,
            brand: "TECNO",
            name: "SPARK 50 PRO",
            category: "Phones",
            description: "Powerful performance • Great camera • Fast charging",
            price: "Contact for Price",
            badge: "HOT",
            image: "images/tecno-spark-50-pro.jpg"
        },


        /* =================================================
           INFINIX
        ================================================= */

        {
            id: 5,
            brand: "INFINIX",
            name: "NOTE 50",
            category: "Phones",
            description: "Premium NOTE smartphone • Powerful performance",
            price: "Contact for Price",
            badge: "NEW",
            image: "images/infinix-note-50.jpg"
        },

        {
            id: 6,
            brand: "INFINIX",
            name: "NOTE EDGE",
            category: "Phones",
            description: "Elegant curved display • Powerful performance • Premium design",
            price: "Contact for Price",
            badge: "PREMIUM",
            image: "images/infinix-note-edge.jpg"
        },

        {
            id: 7,
            brand: "INFINIX",
            name: "HOT 60 PRO+",
            category: "Phones",
            description: "Ultra-slim design • AMOLED display • Long-lasting battery",
            price: "Contact for Price",
            badge: "HOT",
            image: "images/infinix-hot-60-pro-plus.jpg"
        },

        {
            id: 8,
            brand: "INFINIX",
            name: "HOT 70",
            category: "Phones",
            description: "Smooth display • Strong battery • Everyday performance",
            price: "Contact for Price",
            badge: "NEW",
            image: "images/infinix-hot-70.jpg"
        },

        {
            id: 9,
            brand: "INFINIX",
            name: "SMART 20",
            category: "Phones",
            description: "Affordable smartphone • Smooth display • Strong battery",
            price: "Contact for Price",
            badge: "VALUE",
            image: "images/infinix-smart-20.jpg"
        },


        /* =================================================
           ITEL
        ================================================= */

        {
            id: 10,
            brand: "itel",
            name: "S25 ULTRA",
            category: "Phones",
            description: "Slim design • AMOLED display • Stylish everyday smartphone",
            price: "Contact for Price",
            badge: "ULTRA",
            image: "images/itel-s25-ultra.jpg"
        },

        {
            id: 11,
            brand: "itel",
            name: "S25",
            category: "Phones",
            description: "Stylish design • Smooth display • Great everyday performance",
            price: "Contact for Price",
            badge: "POPULAR",
            image: "images/itel-s25.jpg"
        },

        {
            id: 12,
            brand: "itel",
            name: "POWER 70",
            category: "Phones",
            description: "Large battery • Reliable performance • Built for everyday use",
            price: "Contact for Price",
            badge: "POWER",
            image: "images/itel-power-70.jpg"
        },

        {
            id: 13,
            brand: "itel",
            name: "POWER 80",
            category: "Phones",
            description: "Long-lasting battery • Powerful everyday performance",
            price: "Contact for Price",
            badge: "POWER",
            image: "images/itel-power-80.jpg"
        },

        {
            id: 14,
            brand: "itel",
            name: "A50",
            category: "Phones",
            description: "Affordable smartphone • Large display • Reliable battery",
            price: "Contact for Price",
            badge: "VALUE",
            image: "images/itel-a50.jpg"
        },

        {
            id: 15,
            brand: "itel",
            name: "A60S",
            category: "Phones",
            description: "Affordable smartphone • Smooth everyday experience",
            price: "Contact for Price",
            badge: "VALUE",
            image: "images/itel-a60s.jpg"
        },

        {
            id: 16,
            brand: "itel",
            name: "CITY 100",
            category: "Phones",
            description: "Modern smartphone • Stylish design • Everyday performance",
            price: "Contact for Price",
            badge: "NEW",
            image: "images/itel-city-100.jpg"
        },

        {
            id: 17,
            brand: "itel",
            name: "CITY 200",
            category: "Phones",
            description: "Modern design • Strong battery • Great everyday phone",
            price: "Contact for Price",
            badge: "POPULAR",
            image: "images/itel-city-200.jpg"
        }

    ];


    /* =====================================================
       PRODUCT GRID
    ===================================================== */

    const productGrid = document.querySelector(".products-grid");


    /* =====================================================
       CREATE PRODUCT CARD
    ===================================================== */

    function createProductCard(product) {

        return `
            <article
                class="product-card"
                data-brand="${product.brand.toLowerCase()}"
                data-name="${product.name.toLowerCase()}"
            >

                <div class="product-image">

                    <span class="product-badge">
                        ${product.badge}
                    </span>

                    <img
                        src="${product.image}"
                        alt="${product.brand} ${product.name}"
                        loading="lazy"
                        onerror="this.style.display='none'; this.parentElement.classList.add('image-missing');"
                    >

                    <div class="phone-placeholder">
                        <i class="fas fa-mobile-screen-button"></i>
                    </div>

                </div>


                <div class="product-info">

                    <span class="product-brand">
                        ${product.brand}
                    </span>

                    <h3>
                        ${product.name}
                    </h3>

                    <p class="product-description">
                        ${product.description}
                    </p>

                    <div class="product-bottom">

                        <strong class="product-price">
                            ${product.price}
                        </strong>

                    </div>


                    <div class="product-actions">

                        <button
                            class="order-button"
                            data-product="${product.brand} ${product.name}"
                        >
                            <i class="fab fa-whatsapp"></i>
                            ORDER NOW
                        </button>

                    </div>

                </div>

            </article>
        `;
    }


    /* =====================================================
       RENDER PRODUCTS
    ===================================================== */

    function renderProducts(list = products) {

        if (!productGrid) return;


        if (list.length === 0) {

            productGrid.innerHTML = `
                <div class="no-products">

                    <i class="fas fa-search"></i>

                    <h3>
                        No products found
                    </h3>

                    <p>
                        Try searching for another phone or brand.
                    </p>

                </div>
            `;

            return;
        }


        productGrid.innerHTML =
            list.map(createProductCard).join("");


        setupOrderButtons();
    }


    /* =====================================================
       WHATSAPP ORDER BUTTONS
    ===================================================== */

    function setupOrderButtons() {

        document.querySelectorAll(".order-button").forEach(button => {

            button.addEventListener("click", () => {

                const productName =
                    button.dataset.product || "mobile phone";


                const message =
                    `Hello Max Mobile and General Dealers. I am interested in the ${productName}. Please send me the current price, available colours and stock availability.`;


                const whatsappURL =
                    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


                window.open(
                    whatsappURL,
                    "_blank"
                );

            });

        });

    }


    /* =====================================================
       SEARCH PRODUCTS
    ===================================================== */

    if (searchInput) {

        searchInput.addEventListener("input", () => {

            const query =
                searchInput.value.toLowerCase().trim();


            if (!query) {

                renderProducts(products);

                return;
            }


            const filteredProducts =
                products.filter(product => {

                    return (
                        product.brand.toLowerCase().includes(query) ||
                        product.name.toLowerCase().includes(query) ||
                        product.description.toLowerCase().includes(query)
                    );

                });


            renderProducts(filteredProducts);

        });

    }


    /* =====================================================
       BRAND FILTERS
    ===================================================== */

    document
        .querySelectorAll("[data-brand-filter]")
        .forEach(button => {

            button.addEventListener("click", () => {

                const selectedBrand =
                    button.dataset.brandFilter.toLowerCase();


                document
                    .querySelectorAll("[data-brand-filter]")
                    .forEach(btn => {

                        btn.classList.remove("active");

                    });


                button.classList.add("active");


                if (selectedBrand === "all") {

                    renderProducts(products);

                    return;
                }


                const filteredProducts =
                    products.filter(product =>
                        product.brand.toLowerCase() === selectedBrand
                    );


                renderProducts(filteredProducts);

            });

        });


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener("click", event => {

                const targetID =
                    link.getAttribute("href");


                const target =
                    document.querySelector(targetID);


                if (!target) return;


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    const header =
        document.querySelector(".site-header");


    window.addEventListener("scroll", () => {

        if (!header) return;


        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");


    const navLinks =
        document.querySelectorAll(".desktop-nav a");


    window.addEventListener("scroll", () => {

        let currentSection = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;


            if (window.scrollY >= sectionTop) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    });


    /* =====================================================
       IMAGE ERROR HANDLING
    ===================================================== */

    document
        .querySelectorAll("img")
        .forEach(img => {

            img.addEventListener("error", () => {

                img.classList.add("image-error");

            });

        });


    /* =====================================================
       PAGE START
    ===================================================== */

    renderProducts();


    document.body.classList.add("page-loaded");


    console.log(
        "MAX MOBILE — TECNO + INFINIX + ITEL catalogue loaded successfully."
    );

});
