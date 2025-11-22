// --- TYPEWRITER EFFECT ---
const textElement = document.querySelector(".typewriter");
const text = "Aspiring System Backend Engineer";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        textElement.innerHTML = text.substring(0, index + 1);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Trigger typing when page loads
window.addEventListener('load', () => {
    // Clear initial text to prevent layout shift before typing starts
    textElement.innerHTML = ""; 
    typeWriter();
});


// --- SMOOTH SCROLL & ACTIVE LINK HIGHLIGHT ---
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// --- MOBILE MENU TOGGLE ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    // Simple inline style toggle for demonstration (better in CSS class)
    if(navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
        navMenu.style.flexDirection = "column";
        navMenu.style.position = "absolute";
        navMenu.style.top = "70px";
        navMenu.style.right = "0";
        navMenu.style.background = "#0f172a";
        navMenu.style.width = "100%";
        navMenu.style.padding = "20px";
        navMenu.style.borderBottom = "1px solid #334155";
    }
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
    if(window.innerWidth <= 768) {
        navMenu.style.display = "none";
    }
}));