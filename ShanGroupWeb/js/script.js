/**
 * Shan Group Hospital - Global UI Controller
 * This script handles shared components and interactivity.
 * Optimized to run from file system (file://) while maintaining central management.
 */

// 1. Central Component Registry (The Single Source of Truth)
const SHARED_COMPONENTS = {
    header: `
<!-- Main Navigation Header -->
<header>
    <!-- Top Bar -->
    <div class="top-bar">
        <div class="container">
            <div class="top-left">
                <span><i class="fas fa-envelope"></i> info@shangroup.co.in</span>
                <span class="ml-20"><i class="fas fa-clock"></i> 24x7 Emergency &amp; OPD</span>
            </div>
            <div class="top-right emergency-text">
                <i class="fas fa-phone-alt"></i> Emergency: +91-XXX-XXX
            </div>
        </div>
    </div>

    <div class="main-header">
        <div class="container">
            <a href="index.html" class="logo">
                <img src="assets/images/Shan_Logo.png" alt="Shan Group Hospital Logo">
            </a>

            <div class="mobile-menu-toggle">
                <i class="fas fa-bars"></i>
            </div>

            <nav>
                <ul class="nav-menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li class="dropdown">
                        <a href="index.html#services">Services <i class="fas fa-chevron-down fs-08"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="service-clinical.html">Clinical Care</a></li>
                            <li><a href="service-surgical.html">Surgical Infrastructure</a></li>
                            <li><a href="service-emergency.html">Emergency Services</a></li>
                            <li><a href="service-diagnostic.html">Diagnostic Facilities</a></li>
                        </ul>
                    </li>
                    <li><a href="service-diagnostic.html">Diagnostics</a></li>
                    <li class="nav-contact"><a href="contact.html">Contact Us</a></li>
                </ul>
            </nav>

            <div class="header-actions">
                <a href="book-appointment.html" class="btn btn-primary"><i class="fas fa-calendar-check mr-5"></i> Book Appointment</a>
            </div>
        </div>
    </div>
</header>`,

    footer: `
<footer>
    <div class="container">
        <div class="footer-grid">
            <div class="footer-col footer-logo">
                <img src="assets/images/Shan_Logo.png" alt="Shan Group Logo" class="footer-logo-img">
                <p>Designed to deliver world-class medical care through a blend of modern infrastructure, cutting-edge
                    technology, and compassionate service.</p>
                <div class="social-links">
                    <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>

            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="find-doctor.html">Our Doctors</a></li>
                    <li><a href="#">Patient Testimonials</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Services</h4>
                <ul class="footer-links">
                    <li><a href="service-clinical.html">Clinical Care</a></li>
                    <li><a href="service-surgical.html">Surgical Center</a></li>
                    <li><a href="service-emergency.html">Emergency 24x7</a></li>
                    <li><a href="service-diagnostic.html">Diagnostics &amp; Lab</a></li>
                    <li><a href="service-diagnostic.html">Pharmacy</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Contact Us</h4>
                <p><i class="fas fa-map-marker-alt text-secondary mr-10"></i> Multi-Specialty Hospital, India</p>
                <p><i class="fas fa-phone-alt text-secondary mr-10"></i> +91-XXX-XXX</p>
                <p><i class="fas fa-envelope text-secondary mr-10"></i> info@shangroup.co.in</p>
                <a href="contact.html" class="btn btn-secondary btn-small mt-15"><i class="fas fa-envelope mr-5"></i>
                    Contact Us</a>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; <span id="current-year">2026</span> Shan Group Hospitals. Demo Content for Copyright Purposes
                Only.</p>
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

    console.log("Shan Group Hospital Website Initialized (Local File Support Active).");
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
