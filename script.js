/* =========================================================
   MAX MOBILE & GENERAL DEALERS
   PRODUCT CATALOGUE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU
    ========================= */

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


    /* =========================
       SEARCH
    ========================= */

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


    /* =========================
       WHATSAPP NUMBER
       CHANGE THIS LATER
    ========================= */

    const whatsappNumber = "260000000000";


    /* =========================================================
       MAX MOBILE PRODUCTS
       ========================================================= */

    const products = [

        /* ================= TECNO ================= */

        {
            id: 1,
            brand: "TECNO",
            name: "SPARK 50",
            category: "Phones",
            description: "6700mAh battery • 50MP camera • 120Hz display",
            price: "Contact for Price",
            badge: "NEW",
            image: "https://www.tecno-mobile.com/zm/phones/product-detail/product/spark-50/",
            officialPage: "https://www.tecno-mobile.com/zm/phones/product-detail/product/spark-50/"
        },

        {
            id: 2,
            brand: "TECNO",
            name: "CAMON 50",
            category: "Phones",
            description: "50MP camera • AMOLED display • 6150mAh battery",
            price: "Contact for Price",
            badge: "POPULAR",
            image: "https://www.tecno-mobile.com/zm/phones/tech-specs/techspecs/camon-50/",
            officialPage: "https://www.tecno-mobile.com/zm/phones/tech-specs/techspecs/camon-50/"
        },

        {
            id: 3,
            brand: "TECNO",
            name: "CAMON 50 PRO",
            category: "Phones",
            description: "50MP Sony camera • 6500mAh • 45W charging",
            price: "Contact for Price",
            badge: "PRO",
            image: "https://www.tecno-mobile.com/phones/product-detail/product/camon-50-pro/",
            officialPage: "https://www.tecno-mobile.com/phones/product-detail/product/camon-50-pro/"
        },

        {
            id: 4,
            brand: "TECNO",
            name: "SPARK 50 PRO",
            category: "Phones",
            description: "6000mAh battery • 60W charging • 50MP Sony camera",
            price: "Contact for Price",
            badge: "HOT",
            image: "https://www.tecno-mobile.com/phones/product-detail/product/spark-50-pro/",
            officialPage: "https://www.tecno-mobile.com/phones/product-detail/product/spark-50-pro/"
        },


        /* ================= INFINIX ================= */

        {
            id: 5,
            brand: "INFINIX",
            name: "NOTE 50",
            category: "Phones",
            description: "Premium NOTE series smartphone",
            price: "Contact for Price",
            badge: "NEW",
            image: "https://zm.infinixmobility.com/NOTE-50",
            officialPage: "https://zm.infinixmobility.com/NOTE-50"
        },

        {
            id: 6,
            brand: "INFINIX",
            name: "HOT SERIES",
            category: "Phones",
            description: "Powerful performance with excellent value",
            price: "Contact for Price",
            badge: "HOT",
            image: "",
            officialPage: "https://zm.infinixmobility.com/"
        },


        /* ================= ITEL ================= */

        {
            id: 7,
            brand: "itel",
            name: "S SERIES",
            category: "Phones",
            description: "Stylish smartphones built for everyday use",
            price: "Contact for Price",
            badge: "POPULAR",
            image: "",
            officialPage: "https://www.itel-life.com/products/phone"
        },

        {
            id: 8,
            brand: "itel",
            name: "POWER SERIES",
            category: "Phones",
            description: "Long-lasting battery smartphones",
            price: "Contact for Price",
            badge: "POWER",
            image: "",
            officialPage: "https://www.itel-life.com/products/phone"
        },


        /* ================= SAMSUNG ================= */

        {
            id: 9,
            brand: "SAMSUNG",
            name: "GALAXY A56 5G",
            category: "Phones",
            description: "6.7 AMOLED • 50MP camera • 5000mAh • 5G",
            price: "Contact for Price",
            badge: "5G",
            image: "https://www.samsung.com/africa_en/smartphones/galaxy-a/galaxy-a56-5g-awesome-light-gray-128gb-sm-a566bzavafb/",
            officialPage: "https://www.samsung.com/africa_en/smartphones/galaxy-a/galaxy-a56-5g-awesome-light-gray-128gb-sm-a566bzavafb/"
        },

        {
            id: 10,
            brand: "SAMSUNG",
            name: "GALAXY A SERIES",
            category: "Phones",
            description: "Reliable Galaxy smartphones for everyday life",
            price: "Contact for Price",
            badge: "GALAXY",
            image: "",
            officialPage: "https://www.samsung.com/africa_en/smartphones/galaxy-a/"
        },


        /* ================= VIVO ================= */

        {
            id: 11,
            brand: "VIVO",
            name: "Y SERIES",
            category: "Phones",
            description: "Smart design, strong performance and great cameras",
            price: "Contact for Price",
            badge: "NEW",
            image: "",
            officialPage: "https://www.vivo.com/"
        },

        {
            id: 12,
            brand: "VIVO",
            name: "V SERIES",
            category: "Phones",
            description: "Stylish smartphones with powerful cameras",
            price: "Contact for Price",
            badge: "POPULAR",
            image: "",
            officialPage: "https://www.vivo.com/"
        }

    ];


    /* =========================================================
       PRODUCT GRID
       ========================================================= */

    const productGrid = document.querySelector(".products-grid");

    function createProductCard(product) {

        const hasImage = product.image && product.image.length > 0;

        return `
            <article class="product-card"
                     data-brand="${product.brand.toLowerCase()}"
                     data-name="${product.name.toLowerCase()}">

                <div class="product-image">

                    <span class="product-badge">
                        ${product.badge}
                    </span>

                    ${
                        hasImage
                        ? `
                            <img
                                src="${product.image}"
                                alt="${product.brand} ${product.name}"
                                loading="lazy"
                                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                            >

                            <div class="phone-placeholder" style="display:none;">
                                <i class="fas fa-mobile-screen-button"></i>
                            </div>
                          `
                        : `
                            <div class="phone-placeholder">
                                <i class="fas fa-mobile-screen-button"></i>
                            </div>
                          `
                    }

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
                            data-product="${product.brand} ${product.name}">
                            <i class="fab fa-whatsapp"></i>
                            ORDER NOW
                        </button>

                        <a
                            class="details-button"
                            href="${product.officialPage}"
                            target="_blank"
                            rel="noopener noreferrer">
                            DETAILS
                        </a>

                    </div>

                </div>

            </article>
        `;
    }


    function renderProducts(list = products) {

        if (!productGrid) return;

        productGrid.innerHTML = list
            .map(createProductCard)
            .join("");

        setupOrderButtons();
    }


    /* =========================================================
       WHATSAPP ORDER BUTTONS
       ========================================================= */

    function setupOrderButtons() {

        document.querySelectorAll(".order-button").forEach(button => {

            button.addEventListener("click", () => {

                const productName =
                    button.dataset.product || "mobile phone";

                const message =
                    `Hello Max Mobile and General Dealers. I am interested in ${productName}. Please send me the current price and availability.`;

                const url =
                    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

                window.open(url, "_blank");
            });

        });

    }


    /* =========================================================
       SEARCH PRODUCTS
       ========================================================= */

    if (searchInput) {

        searchInput.addEventListener("input", () => {

            const query =
                searchInput.value.toLowerCase().trim();

            if (!query) {
                renderProducts(products);
                return;
            }

            const filtered =
                products.filter(product => {

                    return (
                        product.brand.toLowerCase().includes(query) ||
                        product.name.toLowerCase().includes(query) ||
                        product.description.toLowerCase().includes(query)
                    );

                });

            renderProducts(filtered);

        });

    }


    /* =========================================================
       BRAND FILTERS
       ========================================================= */

    document.querySelectorAll("[data-brand-filter]").forEach(button => {

        button.addEventListener("click", () => {

            const brand =
                button.dataset.brandFilter.toLowerCase();

            if (brand === "all") {

                renderProducts(products);

            } else {

                const filtered =
                    products.filter(product =>
                        product.brand.toLowerCase() === brand
                    );

                renderProducts(filtered);
            }

        });

    });


    /* =========================================================
       SMOOTH SCROLLING
       ========================================================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =========================================================
       HEADER SCROLL EFFECT
       ========================================================= */

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


    /* =========================================================
       ACTIVE NAVIGATION
       ========================================================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".desktop-nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {
                link.classList.add("active");
            }

        });

    });


    /* =========================================================
       IMAGE ERROR HANDLING
       ========================================================= */

    document.querySelectorAll("img").forEach(img => {

        img.addEventListener("error", () => {

            img.style.opacity = "0.2";

        });

    });


    /* =========================================================
       INITIAL LOAD
       ========================================================= */

    renderProducts();

    document.body.classList.add("page-loaded");

    console.log(
        "MAX MOBILE — Product catalogue loaded successfully."
    );

});
