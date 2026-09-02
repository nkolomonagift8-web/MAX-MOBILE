/* =========================================================
   MAX-MOBILE & GENERAL DEALERS
   MAIN JAVASCRIPT
   NO SUPABASE
   NO DATABASE
   WHATSAPP CATALOGUE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CONFIGURATION
       ===================================================== */

    const whatsappNumber = "260977472976";


    /* =====================================================
       PRODUCT DATABASE
       30 PHONES
       ===================================================== */

    const products = [

        /* =========================
           TECNO
           ========================= */

        {
            id: 1,
            brand: "TECNO",
            name: "SPARK 50",
            category: "Phones",
            description:
                "Stylish smartphone • Smooth performance • Great everyday experience",
            price: "Contact for Price",
            badge: "NEW",
            image: "images/tecno-spark-50.jpg"
        },

        {
            id: 2,
            brand: "TECNO",
            name: "CAMON 50",
            category: "Phones",
            description:
                "Advanced camera • Premium design • Powerful everyday performance",
            price: "Contact for Price",
            badge: "POPULAR",
            image: "images/tecno-camon-50.jpg"
        },

        {
            id: 3,
            brand: "TECNO",
            name: "CAMON 50 PRO",
            category: "Phones",
            description:
                "Pro camera experience • Premium display • Powerful performance",
            price: "Contact for Price",
            badge: "PRO",
            image: "images/tecno-camon-50-pro.jpg"
        },

        {
            id: 4,
            brand: "TECNO",
            name: "SPARK 50 PRO",
            category: "Phones",
            description:
                "Powerful performance • Stylish design • Excellent everyday phone",
            price: "Contact for Price",
            badge: "HOT",
            image: "images/tecno-spark-50-pro.jpg"
        },


        /* =========================
           INFINIX
           ========================= */

        {
            id: 5,
            brand: "INFINIX",
            name: "NOTE 50",
            category: "Phones",
            description:
                "Premium display • Powerful performance • Modern smartphone design",
            price: "Contact for Price",
            badge: "NEW",
            image: "images/infinix-note-50.jpg"
        },

        {
            id: 6,
            brand: "INFINIX",
            name: "NOTE EDGE",
            category: "Phones",
            description:
                "Stylish edge design • Smooth display • Powerful performance",
            price: "Contact for Price",
            badge: "PREMIUM",
            image: "images/infinix-note-edge.jpg"
        },

        {
            id: 7,
            brand: "INFINIX",
            name: "HOT 60 PRO PLUS",
            category: "Phones",
            description:
                "Slim design • Smooth display • Powerful everyday performance",
            price: "Contact for Price",
            badge: "HOT",
            image: "images/infinix-hot-60-pro-plus.jpg"
        },

        {
            id: 8,
            brand: "INFINIX",
            name: "HOT 70",
            category: "Phones",
            description:
                "Powerful smartphone • Large display • Long-lasting everyday use",
            price: "Contact for Price",
            badge: "NEW",
            image: "images/infinix-hot-70.jpg"
        },

        {
            id: 9,
            brand: "INFINIX",
            name: "SMART 20",
            category: "Phones",
            description:
                "Reliable smartphone • Large display • Great everyday value",
            price: "Contact for Price",
            badge: "VALUE",
            image: "images/infinix-smart-20.jpg"
        },


        /* =========================
           ITEL
           ========================= */

        {
            id: 10,
            brand: "itel",
            name: "S25 ULTRA",
            category: "Phones",
            description:
                "Stylish design • Smooth display • Reliable everyday performance",
            price: "Contact for Price",
            badge: "ULTRA",
            image: "images/itel-s25-ultra.jpg"
        },

        {
            id: 11,
            brand: "itel",
            name: "S25",
            category: "Phones",
            description:
                "Modern smartphone • Smooth performance • Great everyday value",
            price: "Contact for Price",
            badge: "NEW",
            image: "images/itel-s25.jpg"
        },

        {
            id: 12,
            brand: "itel",
            name: "POWER 70",
            category: "Phones",
            description:
                "Long-lasting battery • Reliable performance • Practical design",
            price: "Contact for Price",
            badge: "POWER",
            image: "images/itel-power-70.jpg"
        },

        {
            id: 13,
            brand: "itel",
            name: "POWER 80",
            category: "Phones",
            description:
                "Powerful battery • Reliable performance • Everyday smartphone",
            price: "Contact for Price",
            badge: "POWER",
            image: "images/itel-power-80.jpg"
        },

        {
            id: 14,
            brand: "itel",
            name: "A50",
            category: "Phones",
            description:
                "Affordable smartphone • Smooth everyday performance • Great value",
            price: "Contact for Price",
            badge: "VALUE",
            image: "images/itel-a50.jpg"
        },

        {
            id: 15,
            brand: "itel",
            name: "A60S",
            category: "Phones",
            description:
                "Affordable smartphone • Reliable performance • Everyday use",
            price: "Contact for Price",
            badge: "VALUE",
            image: "images/itel-a60s.jpg"
        },

        {
            id: 16,
            brand: "itel",
            name: "CITY 100",
            category: "Phones",
            description:
                "Modern design • Reliable performance • Great everyday smartphone",
            price: "Contact for Price",
            badge: "NEW",
            image: "images/itel-city-100.jpg"
        },

        {
            id: 17,
            brand: "itel",
            name: "CITY 200",
            category: "Phones",
            description:
                "Stylish design • Smooth performance • Great everyday experience",
            price: "Contact for Price",
            badge: "NEW",
            image: "images/itel-city-200.jpg"
        },


        /* =========================
           SAMSUNG
           ========================= */

        {
            id: 18,
            brand: "SAMSUNG",
            name: "GALAXY A56 5G",
            category: "Phones",
            description:
                "5G smartphone • Premium display • Powerful performance",
            price: "Contact for Price",
            badge: "5G",
            image: "images/samsung-galaxy-a56-5g.jpg"
        },

        {
            id: 19,
            brand: "SAMSUNG",
            name: "GALAXY A36 5G",
            category: "Phones",
            description:
                "5G performance • Smooth display • Reliable everyday smartphone",
            price: "Contact for Price",
            badge: "5G",
            image: "images/samsung-galaxy-a36-5g.jpg"
        },

        {
            id: 20,
            brand: "SAMSUNG",
            name: "GALAXY A26 5G",
            category: "Phones",
            description:
                "5G smartphone • Smooth display • Great everyday performance",
            price: "Contact for Price",
            badge: "5G",
            image: "images/samsung-galaxy-a26-5g.jpg"
        },

        {
            id: 21,
            brand: "SAMSUNG",
            name: "GALAXY S25",
            category: "Phones",
            description:
                "Flagship smartphone • Premium performance • Advanced camera",
            price: "Contact for Price",
            badge: "FLAGSHIP",
            image: "images/samsung-galaxy-s25.jpg"
        },

        {
            id: 22,
            brand: "SAMSUNG",
            name: "GALAXY S25 ULTRA",
            category: "Phones",
            description:
                "Ultra flagship • Advanced camera • Premium performance",
            price: "Contact for Price",
            badge: "ULTRA",
            image: "images/samsung-galaxy-s25-ultra.jpg"
        },

        {
            id: 23,
            brand: "SAMSUNG",
            name: "GALAXY S25 PLUS",
            category: "Phones",
            description:
                "Premium display • Powerful performance • Advanced smartphone",
            price: "Contact for Price",
            badge: "PREMIUM",
            image: "images/samsung-galaxy-s25-plus.jpg"
        },


        /* =========================
           VIVO
           ========================= */

        {
            id: 24,
            brand: "VIVO",
            name: "V50",
            category: "Phones",
            description:
                "Premium smartphone • Powerful performance • Advanced camera",
            price: "Contact for Price",
            badge: "NEW",
            image: "images/vivo-v50.jpg"
        },

        {
            id: 25,
            brand: "VIVO",
            name: "V50 LITE",
            category: "Phones",
            description:
                "Stylish design • Smooth display • Powerful everyday performance",
            price: "Contact for Price",
            badge: "POPULAR",
            image: "images/vivo-v50-lite.jpg"
        },

        {
            id: 26,
            brand: "VIVO",
            name: "V40",
            category: "Phones",
            description:
                "Premium design • Powerful performance • Advanced camera",
            price: "Contact for Price",
            badge: "PREMIUM",
            image: "images/vivo-v40.jpg"
        },

        {
            id: 27,
            brand: "VIVO",
            name: "V40 LITE",
            category: "Phones",
            description:
                "Stylish design • Smooth performance • Great everyday camera",
            price: "Contact for Price",
            badge: "NEW",
            image: "images/vivo-v40-lite.jpg"
        },

        {
            id: 28,
            brand: "VIVO",
            name: "Y39 5G",
            category: "Phones",
            description:
                "5G smartphone • Powerful battery • Smooth everyday performance",
            price: "Contact for Price",
            badge: "5G",
            image: "images/vivo-y39-5g.jpg"
        },

        {
            id: 29,
            brand: "VIVO",
            name: "Y29 5G",
            category: "Phones",
            description:
                "5G smartphone • Long-lasting battery • Powerful everyday performance",
            price: "Contact for Price",
            badge: "HOT",
            image: "images/vivo-y29-5g.jpg"
        },

        {
            id: 30,
            brand: "VIVO",
            name: "Y19S",
            category: "Phones",
            description:
                "Reliable smartphone • Long-lasting battery • Great everyday performance",
            price: "Contact for Price",
            badge: "VALUE",
            image: "images/vivo-y19s.jpg"
        }

    ];


    /* =====================================================
       DOM ELEMENTS
       ===================================================== */

    const productsGrid =
        document.querySelector(".products-grid");

    const brandFilters =
        document.querySelectorAll("[data-brand-filter]");

    const searchButton =
        document.getElementById("searchButton");

    const searchBox =
        document.getElementById("searchBox");

    const searchInput =
        document.getElementById("searchInput");

    const mobileMenuButton =
        document.getElementById("mobileMenuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const header =
        document.querySelector(".site-header");


    /* =====================================================
       CURRENT FILTER
       ===================================================== */

    let currentBrand = "all";
    let currentSearch = "";


    /* =====================================================
       WHATSAPP ORDER
       ===================================================== */

    function orderOnWhatsApp(product) {

        const message =
            `Hello MAX-MOBILE & General Dealers.%0A%0A` +
            `I am interested in the ${product.brand} ${product.name}.%0A%0A` +
            `Please send me:%0A` +
            `• Current price%0A` +
            `• Available colours%0A` +
            `• Stock availability%0A%0A` +
            `Thank you.`;

        const url =
            `https://wa.me/${whatsappNumber}?text=${message}`;

        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );
    }


    /* =====================================================
       PRODUCT CARD
       ===================================================== */

    function createProductCard(product) {

        const card =
            document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image">

                <div class="product-badge">
                    ${escapeHTML(product.badge)}
                </div>

                <img
                    src="${escapeHTML(product.image)}"
                    alt="${escapeHTML(product.brand + " " + product.name)}"
                    loading="lazy"
                >

                <div class="phone-placeholder">
                    <i class="fa-solid fa-mobile-screen-button"></i>
                </div>

            </div>

            <div class="product-info">

                <div class="product-brand">
                    ${escapeHTML(product.brand)}
                </div>

                <h3>
                    ${escapeHTML(product.name)}
                </h3>

                <p class="product-description">
                    ${escapeHTML(product.description)}
                </p>

                <div class="product-bottom">

                    <div class="product-price">
                        ${escapeHTML(product.price)}
                    </div>

                    <div class="product-actions">

                        <button
                            type="button"
                            class="order-button"
                            data-product-id="${product.id}"
                        >
                            <i class="fa-brands fa-whatsapp"></i>
                            ORDER ON WHATSAPP
                        </button>

                    </div>

                </div>

            </div>
        `;


        /* IMAGE ERROR */
        const image =
            card.querySelector("img");

        const imageArea =
            card.querySelector(".product-image");

        const placeholder =
            card.querySelector(".phone-placeholder");

        image.addEventListener("error", () => {

            imageArea.classList.add("image-missing");

            if (placeholder) {
                placeholder.style.display = "grid";
            }

        });


        image.addEventListener("load", () => {

            if (placeholder) {
                placeholder.style.display = "none";
            }

        });


        /* ORDER BUTTON */
        const orderButton =
            card.querySelector(".order-button");

        orderButton.addEventListener("click", () => {
            orderOnWhatsApp(product);
        });


        return card;
    }


    /* =====================================================
       ESCAPE HTML
       ===================================================== */

    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    /* =====================================================
       RENDER PRODUCTS
       ===================================================== */

    function renderProducts() {

        if (!productsGrid) {
            return;
        }

        productsGrid.innerHTML = "";


        const searchTerm =
            currentSearch
                .trim()
                .toLowerCase();


        const filteredProducts =
            products.filter(product => {

                const brandMatch =
                    currentBrand === "all" ||
                    product.brand.toLowerCase() ===
                    currentBrand.toLowerCase();


                const searchMatch =
                    !searchTerm ||
                    product.brand.toLowerCase().includes(searchTerm) ||
                    product.name.toLowerCase().includes(searchTerm) ||
                    product.description.toLowerCase().includes(searchTerm);


                return brandMatch && searchMatch;
            });


        if (filteredProducts.length === 0) {

            const noProducts =
                document.createElement("div");

            noProducts.className = "no-products";

            noProducts.innerHTML = `
                <i class="fa-solid fa-mobile-screen-button"></i>

                <h3>
                    No phones found
                </h3>

                <p>
                    Try another brand or search term.
                </p>
            `;

            productsGrid.appendChild(noProducts);

            return;
        }


        filteredProducts.forEach(product => {

            productsGrid.appendChild(
                createProductCard(product)
            );

        });
    }


    /* =====================================================
       BRAND FILTERS
       ===================================================== */

    brandFilters.forEach(button => {

        button.addEventListener("click", () => {

            currentBrand =
                button.dataset.brandFilter || "all";


            brandFilters.forEach(filter => {
                filter.classList.remove("active");
            });


            button.classList.add("active");


            renderProducts();


            const phonesSection =
                document.getElementById("phones");

            if (phonesSection) {

                phonesSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       SEARCH BUTTON
       ===================================================== */

    if (searchButton && searchBox) {

        searchButton.addEventListener("click", () => {

            searchBox.classList.toggle("active");


            if (searchBox.classList.contains("active")) {

                if (searchInput) {
                    searchInput.focus();
                }

            }

        });

    }


    /* =====================================================
       SEARCH INPUT
       ===================================================== */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            () => {

                currentSearch =
                    searchInput.value;

                renderProducts();

            }
        );

    }


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    if (mobileMenuButton && mobileMenu) {

        mobileMenuButton.addEventListener(
            "click",
            () => {

                const isActive =
                    mobileMenu.classList.toggle("active");


                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    String(isActive)
                );


                const icon =
                    mobileMenuButton.querySelector("i");


                if (icon) {

                    if (isActive) {

                        icon.classList.remove(
                            "fa-bars"
                        );

                        icon.classList.add(
                            "fa-xmark"
                        );

                    } else {

                        icon.classList.remove(
                            "fa-xmark"
                        );

                        icon.classList.add(
                            "fa-bars"
                        );

                    }

                }

            }
        );


        /* CLOSE MOBILE MENU AFTER CLICK */

        mobileMenu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    mobileMenu.classList.remove(
                        "active"
                    );

                    mobileMenuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    const icon =
                        mobileMenuButton.querySelector("i");


                    if (icon) {

                        icon.classList.remove(
                            "fa-xmark"
                        );

                        icon.classList.add(
                            "fa-bars"
                        );

                    }

                });

            });

    }


    /* =====================================================
       HEADER SCROLL
       ===================================================== */

    if (header) {

        function handleHeaderScroll() {

            if (window.scrollY > 20) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        }


        window.addEventListener(
            "scroll",
            handleHeaderScroll,
            { passive: true }
        );


        handleHeaderScroll();

    }


    /* =====================================================
       ACTIVE DESKTOP NAV
       ===================================================== */

    const desktopLinks =
        document.querySelectorAll(
            ".desktop-nav a"
        );


    desktopLinks.forEach(link => {

        link.addEventListener("click", () => {

            desktopLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");

        });

    });


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetID =
                        link.getAttribute("href");


                    if (
                        !targetID ||
                        targetID === "#"
                    ) {
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

                }
            );

        });


    /* =====================================================
       INITIAL LOAD
       ===================================================== */

    renderProducts();


    /* =====================================================
       PAGE LOADED
       ===================================================== */

    requestAnimationFrame(() => {

        document.body.classList.add(
            "page-loaded"
        );

    });


    /* =====================================================
       CONSOLE
       ===================================================== */

    console.log(
        `MAX-MOBILE catalogue loaded successfully: ${products.length} phones`
    );

});
