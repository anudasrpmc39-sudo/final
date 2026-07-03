// ==========================================================
// ELEMENT SELECTION
// ==========================================================

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const header = document.querySelector(".site-header");
const year = document.querySelector("#year");


// ==========================================================
// MOBILE NAVIGATION
// ==========================================================

if (toggle && nav) {

    toggle.addEventListener("click", () => {

        const isOpen = nav.classList.toggle("open");

        toggle.setAttribute("aria-expanded", isOpen);

    });

    // Close menu when a navigation link is clicked
    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");

        });

    });

}


// ==========================================================
// FOOTER YEAR
// ==========================================================

if (year) {
    year.textContent = new Date().getFullYear();
}


// ==========================================================
// STICKY HEADER EFFECT
// ==========================================================

if (header) {

    const updateHeader = () => {

        header.classList.toggle("scrolled", window.scrollY > 12);

    };

    window.addEventListener("scroll", updateHeader, {
        passive: true
    });

    updateHeader();

}
