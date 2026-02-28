document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".dot");

    function setActiveLink() {

        let current = sections[0].id; // por defecto la primera

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();

            // Si el top de la sección ya pasó el top del viewport
            if (rect.top <= window.innerHeight * 0.3) {
                current = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", setActiveLink);
    setActiveLink();

});

window.addEventListener("load", () => {
    const heroTitle = document.querySelector(".hero-greeting");
    const heroSubtitle = document.querySelector(".hero-name");      

    setTimeout(() => {
        heroTitle.classList.add("hero-visible");
    }, 200);

    setTimeout(() => {
        heroSubtitle.classList.add("hero-visible");
    }, 500);
});

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// SLIDER

const sliderWrapper = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".project-card");
const prevBtn = document.querySelector(".slider-arrow.left");
const nextBtn = document.querySelector(".slider-arrow.right");
const indicatorsContainer = document.querySelector(".slider-indicators");

let currentIndex = 0;

// Crear indicadores
slides.forEach((_, index) => {
    const dot = document.createElement("span");
    if (index === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
    });

    indicatorsContainer.appendChild(dot);
});

const indicators = document.querySelectorAll(".slider-indicators span");

function updateSlider() {
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

    indicators.forEach(dot => dot.classList.remove("active"));
    indicators[currentIndex].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
});

function handleHeroState() {
    const hero = document.getElementById("home");
    const rect = hero.getBoundingClientRect();

    if (rect.bottom <= window.innerHeight * 0.7) {
        document.body.classList.add("not-hero");
    } else {
        document.body.classList.remove("not-hero");
    }
}

window.addEventListener("scroll", handleHeroState);
handleHeroState();