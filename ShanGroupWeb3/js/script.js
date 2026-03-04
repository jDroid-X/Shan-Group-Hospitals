/**
 * Shan Group Hospital - Global UI Controller
 * This script handles shared components and interactivity.
 * Optimized to run from file system (file://) while maintaining central management.
 */

// 1. Central Component Registry (The Single Source of Truth)
const SHARED_COMPONENTS = {
    header: `
<!-- Main Navigation Header -->
<header id="main-nav">
    <div class="container d-flex justify-content-between align-items-center">
        <a href="index.html" class="logo">
            <img src="assets/images/Shan_Logo.png" alt="Shan Group Hospital Logo">
        </a>

        <div class="mobile-menu-toggle">
            <i class="fas fa-bars"></i>
        </div>

        <nav>
            <ul class="nav-menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li class="dropdown">
                    <a href="index.html#services">Services <i class="fas fa-chevron-down fs-08"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="service-clinical.html">Clinical Care</a></li>
                        <li><a href="service-surgical.html">Surgical</a></li>
                        <li><a href="service-emergency.html">Emergency</a></li>
                        <li><a href="service-diagnostic.html">Diagnostic</a></li>
                    </ul>
                </li>
                <li><a href="find-doctor.html">Showcase</a></li>
                <li><a href="index.html#blog">Blog</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>

        <div class="header-actions">
            <a href="book-appointment.html" class="btn btn-primary">Book Appointment</a>
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
                    <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                </div>
            </div>

            <div class="footer-col">
                <h4>Explore</h4>
                <ul class="footer-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="find-doctor.html">Doctors</a></li>
                    <li><a href="find-doctor.html">Showcase</a></li>
                    <li><a href="index.html#blog">Blog</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Services</h4>
                <ul class="footer-links">
                    <li><a href="service-clinical.html">Clinical Care</a></li>
                    <li><a href="service-surgical.html">Surgical Center</a></li>
                    <li><a href="service-emergency.html">Emergency 24x7</a></li>
                    <li><a href="service-diagnostic.html">Diagnostics</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Get in Touch</h4>
                <p><i class="fas fa-map-marker-alt mr-10"></i> Multi-Specialty Hospital, India</p>
                <p><i class="fas fa-phone-alt mr-10"></i> +91-XXX-XXX</p>
                <p><i class="fas fa-envelope mr-10"></i> info@shangroup.co.in</p>
                <a href="contact.html" class="btn btn-secondary btn-small mt-15">Contact Us</a>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; <span id="current-year">2026</span> Shan Group Hospitals. Premium Healthcare Experience.</p>
        </div>
    </div>
</footer>`
};

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Shared Components
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerPlaceholder) headerPlaceholder.innerHTML = SHARED_COMPONENTS.header;
    if (footerPlaceholder) footerPlaceholder.innerHTML = SHARED_COMPONENTS.footer;

    // 2. Initialize UI Interactivity
    initializeAppInteractivity();

    // 3. Set dynamic year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // 4. Header Scroll & Back to Top Logic
    const header = document.getElementById('main-nav');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 5. Hero Slider Navigation (Simplistic simulation)
    const sliderItems = document.querySelectorAll('.hero-slider-nav .nav-item');
    sliderItems.forEach(item => {
        item.addEventListener('click', () => {
            sliderItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    console.log("Shan Group Hospital Website Initialized (Premium Design V2).");
});

function initializeAppInteractivity() {
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                if (icon.classList.contains('fa-bars')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // Handle mobile dropdowns
    document.querySelectorAll('.dropdown > a').forEach(dropdownLink => {
        dropdownLink.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                const href = this.getAttribute('href');
                if (href === "#" || href.includes("#")) {
                    e.preventDefault();
                    this.parentElement.classList.toggle('active');
                }
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== "#" && href.length > 1) {
                e.preventDefault();
                const targetId = href.substring(1);
                const target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    if (navMenu) navMenu.classList.remove('active');
                }
            }
        });
    });
}
