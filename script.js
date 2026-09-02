/* =========================================================
   MAX MOBILE & GENERAL DEALERS
   PREMIUM PRODUCT CATALOGUE
   TECNO + INFINIX
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
       CHANGE THIS WHEN YOU GIVE ME YOUR REAL NUMBER
       ===================================================== */

    const whatsappNumber = "260000000000";


    /* =====================================================
       PRODUCT DATABASE
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
            description: "Affordable smartphone • 120Hz display • Strong battery",
            price: "Contact for Price",
            badge: "VALUE",
            image: "images/infinix-smart-20.jpg"
        }

    ];


    /* =====================================================
       PRODUCT GRID
       ===================================================== */

    const productGrid = document.querySelector(".products-grid");

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
                    <h3>No products found</h3>
                    <p>Try searching for another phone or brand.</p>
                </div>
            `;

            return;
        }

        productGrid.innerHTML =
            list.map(createProductCard).join("");

        setupOrderButtons();
    }


    /* =====================================================
       WHATSAPP ORDER
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

                window.open(whatsappURL, "_blank");

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
       Works with:
       data-brand-filter="TECNO"
       data-brand-filter="INFINIX"
       data-brand-filter="all"
       ===================================================== */

    document.querySelectorAll("[data-brand-filter]").forEach(button => {

        button.addEventListener("click", () => {

            const selectedBrand =
                button.dataset.brandFilter.toLowerCase();


            document
                .querySelectorAll("[data-brand-filter]")
                .forEach(btn => btn.classList.remove("active"));


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

    document.querySelectorAll('a[href^="#"]').forEach(link => {

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
       HEADER SCROLL
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
       GLOBAL IMAGE HANDLING
       ===================================================== */

    document.querySelectorAll("img").forEach(img => {

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
        "MAX MOBILE — TECNO + INFINIX catalogue loaded successfully."
    );

});
