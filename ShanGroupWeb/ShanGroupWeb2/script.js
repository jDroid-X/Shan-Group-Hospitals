// Scroll interactions and fading animations
document.addEventListener("DOMContentLoaded", () => {

  // Navbar scroll effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
  });

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const navLinks = document.querySelectorAll(".mobile-nav-links a");

  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      mobileToggle.classList.toggle("active");
      mobileNav.classList.toggle("active");
      document.body.classList.toggle("no-scroll");
    });
  }

  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileToggle.classList.remove("active");
      mobileNav.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
  });

  // Magical Particle Canvas Background (Energy Motes)
  initParticles();
});

function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');

  let width, height, particles;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      // Particles range from tiny to small size
      this.size = Math.random() * 2.5 + 0.5;

      // Slow, drifting horizontal movement
      this.speedX = (Math.random() - 0.5) * 0.6;

      // Slowly drifting upwards like embers or light particles
      this.speedY = Math.random() * -1 - 0.2;

      // Magical color palette (Gold & Cyan)
      this.colorType = Math.random() > 0.4 ? 'rgba(212, 175, 55, ' /* Gold */ : 'rgba(150, 220, 255, ' /* Magical Cyan */;

      // Starting transparency
      this.baseAlpha = Math.random() * 0.4 + 0.1;
      this.alpha = this.baseAlpha;

      // Twinkle state
      this.twinkleFactor = Math.random() * 0.02 + 0.005;
      this.twinklingIn = Math.random() > 0.5;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Screen wrapping
      if (this.y < -10) {
        this.y = height + 10;
        this.x = Math.random() * width;
      }
      if (this.x < -10) this.x = width + 10;
      if (this.x > width + 10) this.x = -10;

      // Twinkle effect (pulsing alpha)
      if (this.twinklingIn) {
        this.alpha += this.twinkleFactor;
        if (this.alpha >= this.baseAlpha + 0.3) this.twinklingIn = false;
      } else {
        this.alpha -= this.twinkleFactor;
        if (this.alpha <= this.baseAlpha - 0.1) this.twinklingIn = true;
      }

      // Keep alpha in bounds
      if (this.alpha < 0) this.alpha = 0;
      if (this.alpha > 0.8) this.alpha = 0.8;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.colorType + this.alpha + ')';

      // Add a soft glow
      ctx.shadowBlur = 15;
      ctx.shadowColor = this.colorType + '0.6)';

      ctx.fill();

      // Reset shadow to avoid performance hit on next draws
      ctx.shadowBlur = 0;
    }
  }

  function createParticles() {
    particles = [];
    // Scale particle count based on screen width for performance
    const numParticles = Math.min(window.innerWidth / 12, 120);
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });

  resize();
  createParticles();
  animate();
}
