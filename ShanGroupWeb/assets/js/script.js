/**
 * Shan Group Hospital - Global UI Controller
 * This script handles shared components and interactivity.
 * Optimized to run from file system (file://) while maintaining central management.
 */

// 1. Central Component Registry (The Single Source of Truth)
const SHARED_COMPONENTS = {
    header: `
<!-- Main Navigation Header -->
<header id="main-header-root">
    <!-- Branding Row -->
    <div class="branding-row">
        <div class="container">
            <div class="branding-flex-v1">
                <a href="index.html" class="branding-logo">
                    <img src="assets/images/Shan_Logo.png" alt="SHAN Multi Speciality Hospital Logo">
                    <div class="hospital-branding-text">
                        <span class="hospital-name-main">SHAN Multi Speciality Hospital</span>
                        <span class="hospital-tagline">& Research Centre</span>
                    </div>
                </a>

                <!-- Mobile Menu Button - Top Right -->
                <div class="mobile-menu-toggle">
                    <i class="fas fa-bars"></i>
                </div>

                <div class="header-contact-v1">
                    <div class="info-item"><i class="fas fa-envelope"></i> info@shangroup.co.in</div>
                    <div class="info-item"><i class="fas fa-clock"></i> 24x7 Emergency & OPD</div>
                    <div class="info-item emergency-text"><i class="fas fa-phone-alt"></i> Emergency: +91-123-456-7890</div>
                </div>
            </div>
        </div>
    </div>

    <!-- Navigation Row -->
    <div class="nav-main-row">
        <div class="container">
            <div class="nav-wrapper">

                <nav>
                    <ul class="nav-menu">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li class="dropdown">
                            <a href="vision.html">Vision <i class="fas fa-chevron-down fs-08"></i></a>
                            <ul class="dropdown-menu">
                                <li><a href="vision.html">Vision & Mission</a></li>
                                <li><a href="leader.html">Leadership</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="index.html#services">Services <i class="fas fa-chevron-down fs-08"></i></a>
                            <ul class="dropdown-menu">
                                <li><a href="service-clinical.html">Clinical Care</a></li>
                                <li><a href="service-surgical.html">Surgical Clinic</a></li>
                                <li><a href="service-emergency.html">Emergency 24x7</a></li>
                                <li><a href="service-diagnostic.html">Diagnostic Lab</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#">Patient Portal <i class="fas fa-chevron-down fs-08"></i></a>
                            <ul class="dropdown-menu">
                                <li><a href="find-doctor.html">Find a Doctor</a></li>
                                <li><a href="book-appointment.html">Book Appointment</a></li>
                                <li><a href="view-reports.html">View Reports</a></li>
                            </ul>
                        </li>
                        <li class="nav-contact"><a href="contact.html">Contact Us</a></li>
                        <li class="mobile-only-btn"><a href="book-appointment.html" class="btn btn-primary">Book Appointment</a></li>
                    </ul>
                </nav>

                <div class="header-actions">
                    <a href="book-appointment.html" class="btn btn-primary"><i class="fas fa-calendar-check mr-5"></i> Book Appointment</a>
                </div>
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
                    <a href="https://facebook.com" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>

            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="find-doctor.html">Our Doctors</a></li>
                    <li><a href="about.html#testimonials">Patient Testimonials</a></li>
                    <li><a href="contact.html#careers">Careers</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Services</h4>
                <ul class="footer-links">
                    <li><a href="service-clinical.html">Clinical Care</a></li>
                    <li><a href="service-surgical.html">Surgical Center</a></li>
                    <li><a href="service-emergency.html">Emergency 24x7</a></li>
                    <li><a href="service-diagnostic.html">Diagnostics &amp; Lab</a></li>
                    <li><a href="service-diagnostic.html#pharmacy">Pharmacy</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Contact Us</h4>
                <p><i class="fas fa-map-marker-alt text-secondary mr-10"></i> Multi-Specialty Hospital, India</p>
                <p><i class="fas fa-phone-alt text-secondary mr-10"></i> +91-123-456-7890</p>
                <p><i class="fas fa-envelope text-secondary mr-10"></i> info@shangroup.co.in</p>
                <a href="contact.html" class="btn btn-secondary btn-small mt-15"><i class="fas fa-envelope mr-5"></i>
                    Contact Us</a>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; <span id="current-year">2026</span> Shan Group Hospitals. This website is created solely for demonstration and educational purposes. All content, images, and brand references belong to their respective owners. No copyright infringement is intended.</p>
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

    // 4. Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

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
                const parent = this.parentElement;
                const wasActive = parent.classList.contains('active');
                
                // Close all other dropdowns
                document.querySelectorAll('.dropdown').forEach(d => {
                    if (d !== parent) d.classList.remove('active');
                });

                if (!wasActive) {
                    e.preventDefault();
                    parent.classList.add('active');
                }
                // If it was already active, allow the link to navigate or sub-links to work
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
