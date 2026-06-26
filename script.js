// ==============================
// Typing Animation
// ==============================

const typingElement = document.getElementById("typing");

if (typingElement) {
  const texts = [
    "Aspiring Software Developer"
  ];

  let textIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    const currentText = texts[textIndex];

    if (!deleting) {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentText.length) {
        deleting = true;
        setTimeout(typeEffect, 1500);
        return;
      }
    } else {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        textIndex++;

        if (textIndex >= texts.length) {
          textIndex = 0;
        }
      }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
  }

  typeEffect();
}

// ==============================
// Theme Toggle
// ==============================

const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
}

// ==============================
// Active Navbar
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 150;

    if (window.scrollY >= top) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});

// ==============================
// Scroll Reveal
// ==============================

const cards = document.querySelectorAll(
  ".glass-card,.skill-card,.project-card,.cert-card"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

cards.forEach((card) => {
  observer.observe(card);
});

// ==============================
// Profile Card Hover
// ==============================

const profile = document.querySelector(".profile-card");

if (profile) {
  profile.addEventListener("mousemove", (e) => {
    const rect = profile.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x - rect.width / 2) / 20;
    const rotateX = -(y - rect.height / 2) / 20;

    profile.style.transform = `perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)`;
  });

  profile.addEventListener("mouseleave", () => {
    profile.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  });
}

console.log("Portfolio Loaded Successfully");