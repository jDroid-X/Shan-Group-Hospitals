/**
 * Shan Group Hospital — Global UI Controller
 * Portable: Runs directly from file system (file://). No localhost required.
 * Version: 3.0
 */

// ── 1. SHARED COMPONENTS (Single Source of Truth) ──────────────────────────
const SHARED_COMPONENTS = {
    header: `
<header id="main-nav">
    <div class="container">
        <a href="index.html" class="logo">
            <img src="assets/images/Shan_Logo.png" alt="Shan Group Hospital Logo">
        </a>

        <button class="mobile-menu-toggle" aria-label="Toggle menu" aria-expanded="false">
            <i class="fas fa-bars"></i>
        </button>

        <nav id="main-nav-menu">
            <ul class="nav-menu">
                <li><a href="index.html">Home</a></li>
                <li class="dropdown">
                    <a href="about.html">About <i class="fas fa-chevron-down fs-08"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="../ShanGroupWeb/index.html" target="_blank">ShanGroupWeb</a></li>
                        <li><a href="../ShanGroupWeb2/index.html" target="_blank">ShanGroupWeb2</a></li>
                        <li><a href="index.html">ShanGroupWeb3</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="index.html#services">Services <i class="fas fa-chevron-down fs-08"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="service-clinical.html">Clinical Care</a></li>
                        <li><a href="service-surgical.html">Surgical</a></li>
                        <li><a href="service-emergency.html">Emergency</a></li>
                        <li><a href="service-diagnostic.html">Diagnostic</a></li>
                    </ul>
                </li>
                <li><a href="find-doctor.html">Doctors</a></li>
                <li><a href="index.html#blog">Blog</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>

        <div class="header-actions">
            <a href="book-appointment.html" class="btn-cta-header">Book Appointment</a>
            <div class="search-icon"><i class="fas fa-search"></i></div>
        </div>
    </div>
</header>`,

    footer: `
<footer>
    <div class="container">
        <div class="footer-grid">
            <div class="footer-col footer-logo">
                <img src="assets/images/Shan_Logo.png" alt="Shan Group Logo" class="footer-logo-img">
                <p>Delivering world-class healthcare through innovation, compassion, and state-of-the-art medical technology.</p>
                <div class="social-links">
                <a href="#" aria-label="Facebook" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Instagram" title="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" aria-label="YouTube" title="YouTube"><i class="fab fa-youtube"></i></a>
                <a href="#" aria-label="Twitter" title="Twitter"><i class="fab fa-twitter"></i></a>
            </div>
            </div>

            <div class="footer-col">
                <h4>Explore</h4>
                <ul class="footer-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="find-doctor.html">Doctors</a></li>
                    <li><a href="index.html#blog">Blog</a></li>
                    <li><a href="view-reports.html">Patient Portal</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Services</h4>
                <ul class="footer-links">
                    <li><a href="service-clinical.html">Clinical Care</a></li>
                    <li><a href="service-surgical.html">Surgical Center</a></li>
                    <li><a href="service-emergency.html">Emergency 24x7</a></li>
                    <li><a href="service-diagnostic.html">Diagnostics</a></li>
                    <li><a href="book-appointment.html">Book Appointment</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Get in Touch</h4>
                <p><i class="fas fa-map-marker-alt mr-10"></i>Multi-Specialty Hospital, District Amroha, UP, India</p>
                <p><i class="fas fa-phone-alt mr-10"></i>+91-XXX-XXX</p>
                <p><i class="fas fa-envelope mr-10"></i>info@shangroup.co.in</p>
                <a href="contact.html" class="btn btn-secondary btn-small mt-15">Contact Us</a>
            </div>
        </div>

        <div class="footer-bottom">
        <p>&copy; <span id="current-year"></span> Shan Group Hospitals. Premium Healthcare Experience. | All Rights Reserved.</p>
    </div>
</div>
<!-- Floating Elements -->
<div class="floating-chat" title="Chat with us" aria-label="Support Chat"><i class="fas fa-comment"></i></div>
<div class="back-to-top" id="backToTop" title="Back to top" aria-label="Scroll to top"><i class="fas fa-arrow-up"></i></div>
</footer>`
};

// ── 2. THEME ENGINE ────────────────────────────────────────────────────────
const THEMES = [
    { id: 'default', name: 'Fresh Green', color: '#1ABF88' },
    { id: 'emerald', name: 'Ocean Blue', color: '#1e90ff' },
    { id: 'amethyst', name: 'Royal Amethyst', color: '#9333EA' }
];

function initThemeSwitcher() {
    const switcher = document.createElement('div');
    switcher.className = 'theme-switcher';

    THEMES.forEach(theme => {
        const btn = document.createElement('div');
        btn.className = 'theme-btn';
        btn.dataset.themeVal = theme.id;
        btn.title = theme.name;
        if (theme.id === (localStorage.getItem('shan-theme') || 'default')) btn.classList.add('active');
        btn.addEventListener('click', () => setTheme(theme.id));
        switcher.appendChild(btn);
    });

    document.body.appendChild(switcher);

    const saved = localStorage.getItem('shan-theme');
    if (saved) setTheme(saved);
}

function setTheme(themeId) {
    if (themeId === 'default') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', themeId);
    }
    localStorage.setItem('shan-theme', themeId);
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.themeVal === themeId);
    });
}

// ── 5. AI TECH BACKGROUND ───────────────────────────────────────────────────
function initAIParticles() {
    const canvas = document.createElement('canvas');
    canvas.id = 'ai-particle-bg';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let width, height, particles;

    // Gold theme colors for maximum visibility on dark backgrounds
    const themeColor = 'rgba(212, 175, 55, '; // Gold color base (#d4af37)

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.8;
            this.vy = (Math.random() - 0.5) * 0.8;
            this.radius = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx = -this.vx;
            if (this.y < 0 || this.y > height) this.vy = -this.vy;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = themeColor + '0.8)'; // Increased opacity
            ctx.fill();
        }
    }

    function initGrid() {
        particles = [];
        const numParticles = Math.min(Math.floor((width * height) / 15000), 100);
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = themeColor + (1 - dist / 150) * 0.4 + ')'; // Bolder lines
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        resize();
        initGrid();
    });

    resize();
    initGrid();
    animate();
}

// ── 6. MAIN INIT ───────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

    // Inject header & footer
    const headerPH = document.getElementById('header-placeholder');
    const footerPH = document.getElementById('footer-placeholder');
    if (headerPH) headerPH.innerHTML = SHARED_COMPONENTS.header;
    if (footerPH) footerPH.innerHTML = SHARED_COMPONENTS.footer;

    // Components
    initAIParticles();
    initMobileMenu();
    initThemeSwitcher();
    initScrollBehavior();
    initSliderNav();

    // Dynamic year
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    console.log('Shan Group Hospital v3.0 — Ready (file:// compatible)');
});

// ── 4. MOBILE MENU ─────────────────────────────────────────────────────────
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navEl = document.getElementById('main-nav-menu');

    if (!toggle || !navMenu) return;

    toggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('active');
        if (navEl) navEl.classList.toggle('open', isOpen);
        toggle.setAttribute('aria-expanded', isOpen);
        const icon = toggle.querySelector('i');
        if (icon) {
            icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
        }
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (navEl) navEl.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            const icon = toggle.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';
        });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('header') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (navEl) navEl.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            const icon = toggle.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';
        }
    });

    // Mobile dropdown toggle
    document.querySelectorAll('.dropdown > a').forEach(link => {
        link.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                const href = this.getAttribute('href');
                if (href === '#' || href.startsWith('#')) {
                    e.preventDefault();
                    this.parentElement.classList.toggle('active');
                }
            }
        });
    });
}

// ── 5. SCROLL BEHAVIOR & ANIMATIONS ──────────────────────────────────────────
function initScrollBehavior() {
    const header = document.getElementById('main-nav');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (header) header.classList.toggle('scrolled', window.scrollY > 50);
        if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 300);
    });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.length > 1) {
                e.preventDefault();
                const target = document.getElementById(href.substring(1));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // Intersection Observer for scroll animations (ShanGroupWeb2 style)
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

    // Apply animation to elements
    const animatedElements = document.querySelectorAll('.section, .action-card, .service-card, .doc-card, .blog-card, .page-header');
    animatedElements.forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });
}

// ── 6. HERO SLIDER NAV ─────────────────────────────────────────────────────
function initSliderNav() {
    document.querySelectorAll('.hero-slider-nav .nav-item').forEach(item => {
        item.addEventListener('click', function () {
            this.closest('.hero-slider-nav')
                .querySelectorAll('.nav-item')
                .forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
}
