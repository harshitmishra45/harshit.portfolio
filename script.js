// ScrollReveal animations
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 1200,
  delay: 200
});

ScrollReveal().reveal('.hero-content, .hero-image', { origin: 'top' });
ScrollReveal().reveal('.stats div', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('#about', { origin: 'left' });
ScrollReveal().reveal('#projects', { origin: 'right' });
ScrollReveal().reveal('.skills .bar', { origin: 'bottom', interval: 150 });
ScrollReveal().reveal('#contact', { origin: 'top' });


// Number counter animation
function animateValue(id, start, end, duration) {
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  const obj = document.getElementById(id);

  if (!obj) return; // Prevent error if element doesn't exist

  const timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
}

window.addEventListener("DOMContentLoaded", () => {
  animateValue("exp", 0, 2, 1000);
  animateValue("projects", 0, 90, 1000);
  animateValue("fast", 0, 2, 1000);
});


// Scroll pause on hover for reels/cards
const scrollWrappers = document.querySelectorAll(".scroll-wrapper, #reelScroll");
scrollWrappers.forEach(wrapper => {
  const content = wrapper.querySelector(".scroll-content");
  if (content) {
    wrapper.addEventListener("mouseover", () => {
      content.style.animationPlayState = "paused";
    });
    wrapper.addEventListener("mouseout", () => {
      content.style.animationPlayState = "running";
    });
  }
});

// Scroll animation for horizontal scroll-cards
const scrollCards = document.querySelector(".scroll-cards");
if (scrollCards) {
  scrollCards.style.animation = "scrollIt 20s linear infinite";
  scrollCards.addEventListener("mouseover", () => {
    scrollCards.style.animationPlayState = "paused";
  });
  scrollCards.addEventListener("mouseout", () => {
    scrollCards.style.animationPlayState = "running";
  });
}


// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
const scrollContainer = document.querySelector(".shorts-scroll");

let scrollSpeed = 1;
let scrolling;

function startScrolling() {
  scrolling = setInterval(() => {
    scrollContainer.scrollLeft += scrollSpeed;
    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
      scrollContainer.scrollLeft = 0; // Loop back to start
    }
  }, 20); // Adjust speed here
}

function stopScrolling() {
  clearInterval(scrolling);
}

scrollContainer.addEventListener("mouseenter", stopScrolling);
scrollContainer.addEventListener("mouseleave", startScrolling);

startScrolling();
ScrollReveal({
  reset: false,
  distance: '60px',
  duration: 1200,
  delay: 200
});

ScrollReveal().reveal('.about-heading, .about-description', { origin: 'top' });
ScrollReveal().reveal('.stat', { origin: 'bottom', interval: 200 });
ScrollReveal({
  reset: false,            // One-time animation only
  distance: '60px',
  duration: 1200,
  delay: 200
});

// Apply to hero section elements:
ScrollReveal().reveal('.hero-text-left', { origin: 'left' });
ScrollReveal().reveal('.hero-image-container', { origin: 'bottom' });
ScrollReveal().reveal('.hero-text-right', { origin: 'right' });
ScrollReveal().reveal('.about-section .left', {
  origin: 'left',
  distance: '60px',
  duration: 1200,
  delay: 200,
  reset: false
});

ScrollReveal().reveal('.about-section .right', {
  origin: 'right',
  distance: '60px',
  duration: 1200,
  delay: 200,
  reset: false
});
// No JS needed for basic scrolling or playback here.
// But if you want, here is a simple autoplay toggle example:

document.querySelectorAll('.shorts-track iframe').forEach((iframe) => {
  iframe.addEventListener('mouseenter', () => {
    // Unmute on hover (optional)
    // iframe.src = iframe.src.replace('mute=1', 'mute=0');
  });
  iframe.addEventListener('mouseleave', () => {
    // Mute again on leave (optional)
    // iframe.src = iframe.src.replace('mute=0', 'mute=1');
  });
});

// If you want infinite scroll effect, or auto-scroll, lemme know!
// For now, this is the clean separate setup you asked for.
<script>
  const iframe = document.querySelector('iframe');
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      const src = iframe.getAttribute('data-src');
      iframe.setAttribute('src', src);
      observer.disconnect();
    }
  }, { threshold: 0.5 });

  observer.observe(iframe);
</script>

