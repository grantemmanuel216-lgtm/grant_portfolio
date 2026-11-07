// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });
}

// Automatically update the footer year
const yearElement = document.querySelector("#current-year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Reveal sections gently as they enter the screen
const revealElements = document.querySelectorAll(
    ".about-section, .timeline-item, .skill-card, .certificate-card, .goals-grid, .contact-inner"
);

revealElements.forEach((element) => element.classList.add("reveal"));

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
}

// Back-to-top button
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (backToTop) {
        backToTop.classList.toggle("visible", window.scrollY > 500);
    }
});

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
