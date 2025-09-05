// Map buttons to sections
const sectionMap = {
    "btn-about": "About",
    "btn-education": "Education",
    "btn-achievements": "Achievements",
    "btn-projects": "Projects",
    "btn-skills": "Skills",
    "btn-tools": "Tools",
    "btn-contact": "Footer"
};

// Smooth scroll when clicking buttons
Object.keys(sectionMap).forEach(btnId => {
    const btn = document.getElementById(btnId);
    if (btn) {
        btn.addEventListener('click', () => {
            const section = document.getElementById(sectionMap[btnId]);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// Typing animation
const movingText = document.getElementById('moving-text');
const introText = "Hi, I am Sneha Naik";
let index = 0;

function typeEffect() {
    if (index < introText.length) {
        movingText.textContent += introText.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

window.addEventListener('load', () => {
    if (movingText) {
        movingText.textContent = '';
        typeEffect();
    }
});

// Section reveal on scroll
const allSections = document.querySelectorAll('section');

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

allSections.forEach(section => {
    section.classList.add('hidden');
    revealOnScroll.observe(section);
});


  async function getQuote() {
    try {
      const response = await fetch("https://zenquotes.io/api/random");
      const data = await response.json();
      document.getElementById("quote").innerText = `"${data[0].q}"`;
      document.getElementById("author").innerText = `– ${data[0].a}`;
    } catch (error) {
      document.getElementById("quote").innerText = "Keep going, you’re doing great!";
     
    }
  }


