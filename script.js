/* ============================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   Author: Your Name
   Description: Interactive features and animations
   ============================================ */

// ============================================
// 1. DOM ELEMENTS
// ============================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('theme-toggle');
const scrollToTopBtn = document.getElementById('scroll-to-top');
const contactForm = document.getElementById('contact-form');

// ============================================
// 2. INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSmoothScroll();
    initIntersectionObserver();
    initScrollToTop();
    initHamburgerMenu();
    initFormValidation();
    initNavbarScroll();
    initParallaxEffect();
    initElementAnimations();
});

// ============================================
// 3. THEME TOGGLE (Dark/Light Mode)
// ============================================

function initTheme() {
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);

    // Theme toggle button
    themeToggle.addEventListener('click', toggleTheme);
}

function setTheme(themeName) {
    const html = document.documentElement;
    
    if (themeName === 'dark') {
        html.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        themeToggle.setAttribute('title', 'Light Mode');
    } else {
        html.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.setAttribute('title', 'Dark Mode');
    }
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// ============================================
// 4. SMOOTH SCROLLING & NAVBAR ACTIVE STATE
// ============================================

function initSmoothScroll() {
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

function smoothScroll(e) {
    e.preventDefault();
    
    // Get target section ID
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
        // Close hamburger menu if open
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }

        // Smooth scroll to target
        const offsetTop = targetSection.offsetTop - 70; // Navbar height
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100; // Offset for navbar

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add active class to current section link
            const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// ============================================
// 5. HAMBURGER MENU
// ============================================

function initHamburgerMenu() {
    hamburger.addEventListener('click', toggleHamburgerMenu);
    
    // Close menu when clicking outside
    document.addEventListener('click', closeHamburgerMenuOutside);
}

function toggleHamburgerMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeHamburgerMenuOutside(e) {
    // Check if click is outside of navbar
    if (!navbar.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

// ============================================
// 6. SCROLL TO TOP BUTTON
// ============================================

function initScrollToTop() {
    window.addEventListener('scroll', toggleScrollToTopButton);
    scrollToTopBtn.addEventListener('click', scrollToTop);
}

function toggleScrollToTopButton() {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ============================================
// 7. INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class to animatable elements
                const animatableElements = entry.target.querySelectorAll(
                    '.project-card, .achievement-card, .education-card, .skill-category, ' +
                    '.about-text p, .info-item'
                );

                animatableElements.forEach((el, index) => {
                    // Stagger animation
                    setTimeout(() => {
                        el.classList.add('fade-in');
                    }, index * 100);
                });

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// ============================================
// 8. FORM VALIDATION & SUBMISSION
// ============================================

function initFormValidation() {
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);

        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    }
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;

    // Remove previous error state
    field.classList.remove('error');

    if (!value) {
        showFieldError(field, 'This field is required');
        isValid = false;
    } else if (fieldName === 'email') {
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Please enter a valid email address');
            isValid = false;
        }
    } else if (fieldName === 'name') {
        // Name validation (min 2 characters)
        if (value.length < 2) {
            showFieldError(field, 'Name must be at least 2 characters long');
            isValid = false;
        }
    } else if (fieldName === 'message') {
        // Message validation (min 10 characters)
        if (value.length < 10) {
            showFieldError(field, 'Message must be at least 10 characters long');
            isValid = false;
        }
    }

    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('input-error');
    
    // Remove existing error message if any
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Create and add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = '#ef4444';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    
    field.parentElement.appendChild(errorDiv);
}

function clearFieldError(e) {
    const field = e.target;
    const errorMessage = field.parentElement.querySelector('.error-message');
    
    if (errorMessage) {
        errorMessage.remove();
    }
    
    field.classList.remove('input-error');
}

function handleFormSubmit(e) {
    e.preventDefault();

    // Validate all fields
    const fields = contactForm.querySelectorAll('input, textarea');
    let allValid = true;

    fields.forEach(field => {
        if (!validateField({ target: field })) {
            allValid = false;
        }
    });

    if (!allValid) {
        showNotification('Please fix the errors in the form', 'error');
        return;
    }

    // Get form data
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        subject: document.getElementById('subject').value.trim(),
        message: document.getElementById('message').value.trim()
    };

    // Simulate form submission (no backend)
    console.log('Form Data:', formData);

    // Show success message
    showNotification(
        'Thank you for your message! I\'ll get back to you soon.',
        'success'
    );

    // Reset form
    contactForm.reset();
    
    // Clear any error states
    fields.forEach(field => {
        field.classList.remove('input-error');
    });
}

// ============================================
// 9. NOTIFICATIONS & ALERTS
// ============================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" aria-label="Close notification">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // Create notification styles
    const style = document.createElement('style');
    if (!document.querySelector('style[data-notification]')) {
        style.setAttribute('data-notification', 'true');
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                max-width: 400px;
                padding: 1rem 1.5rem;
                border-radius: 0.5rem;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                z-index: 10000;
                animation: slideInRight 0.3s ease-out;
            }

            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
            }

            .notification-message {
                flex: 1;
            }

            .notification-success {
                background-color: #10b981;
                color: white;
            }

            .notification-error {
                background-color: #ef4444;
                color: white;
            }

            .notification-info {
                background-color: #3b82f6;
                color: white;
            }

            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.25rem;
                cursor: pointer;
                transition: transform 0.2s ease;
            }

            .notification-close:hover {
                transform: scale(1.2);
            }

            @media (max-width: 480px) {
                .notification {
                    left: 10px;
                    right: 10px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// ============================================
// 10. SKILL BARS ANIMATION
// ============================================

function animateSkillBars() {
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                
                // Reset width for animation
                progressBar.style.width = '0';
                
                // Trigger animation
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 100);
                
                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });

    skillProgressBars.forEach(bar => observer.observe(bar));
}

// Initialize skill bar animation
document.addEventListener('DOMContentLoaded', animateSkillBars);

// ============================================
// 11. PROJECT CARD INTERACTIONS
// ============================================

function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.3s ease';
        });
    });
}

document.addEventListener('DOMContentLoaded', initProjectCards);

// ============================================
// 12. KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
    // Close hamburger menu on Escape
    if (e.key === 'Escape') {
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }

    // Navigate to scroll-to-top on Ctrl+Home
    if (e.ctrlKey && e.key === 'Home') {
        scrollToTop();
    }
});

// ============================================
// 13. PERFORMANCE OPTIMIZATIONS
// ============================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize resize events
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        updateActiveNavLink();
    }, 250);
});

// Lazy load images (if used)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// 14. UTILITY FUNCTIONS
// ============================================

/**
 * Copy text to clipboard
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied to clipboard!', 'success');
    }).catch(err => {
        console.error('Failed to copy:', err);
        showNotification('Failed to copy to clipboard', 'error');
    });
}

/**
 * Get URL parameter
 */
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

/**
 * Format date
 */
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
}

// ============================================
// 15. ACCESSIBILITY FEATURES
// ============================================

// Add focus visible styles for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Add skip to main content link (for screen readers)
function addSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#projects';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: #000;
        color: white;
        padding: 8px;
        z-index: 100;
    `;
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);
}

document.addEventListener('DOMContentLoaded', addSkipLink);

// ============================================
// 16. REQUEST ANIMATION FRAME FOR SMOOTH ANIMATION
// ============================================

/**
 * Smooth scroll with RAF for better performance
 */
function smoothScrollToElement(element, duration = 1000) {
    const startPosition = window.pageYOffset;
    const elementPosition = element.getBoundingClientRect().top;
    const distance = elementPosition;
    let start = null;

    const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        
        window.scrollTo(0, run);
        
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    };

    const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
}

// ============================================
// 17. SERVICE WORKER REGISTRATION (Optional PWA)
// ============================================

if ('serviceWorker' in navigator) {
    // Uncomment to enable service worker
    // navigator.serviceWorker.register('/sw.js').catch(error => {
    //     console.log('Service Worker registration failed:', error);
    // });
}

// ============================================
// 18. NAVBAR SCROLL EFFECT
// ============================================

function initNavbarScroll() {
    window.addEventListener('scroll', () => {
        const navBar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navBar.classList.add('scrolled');
        } else {
            navBar.classList.remove('scrolled');
        }
    });
}

// ============================================
// 19. PARALLAX EFFECT FOR HERO SECTION
// ============================================

function initParallaxEffect() {
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = heroSection.querySelectorAll('[data-parallax]');
            
            parallaxElements.forEach(element => {
                const parallaxSpeed = element.getAttribute('data-parallax') || 0.5;
                element.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            });
        });
    }
}

// ============================================
// 20. ELEMENT STAGGER ANIMATIONS
// ============================================

function initElementAnimations() {
    // Animate navigation items on load
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        item.style.animation = `slideInLeft 0.5s ease-out ${0.1 * index}s backwards`;
    });

    // Animate CTA buttons
    const ctaButtons = document.querySelectorAll('.hero-cta .btn');
    ctaButtons.forEach((btn, index) => {
        btn.style.animation = `slideInUp 0.6s ease-out ${0.3 + 0.1 * index}s backwards`;
    });

    // Add hover ripple effect to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', createRipple);
    });
}

function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    // Add ripple styles
    if (!document.querySelector('style[data-ripple]')) {
        const style = document.createElement('style');
        style.setAttribute('data-ripple', 'true');
        style.textContent = `
            .btn {
                position: relative;
                overflow: hidden;
            }
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: rippleEffect 0.6s ease-out;
                pointer-events: none;
            }
            @keyframes rippleEffect {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
}

// ============================================
// 21. ENHANCED SCROLL animations WITH THRESHOLD
// ============================================

function enhancedIntersectionObserver() {
    const observe = (elements, callback) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    callback(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(el => observer.observe(el));
    };

    return observe;
}

// ============================================
// 22. CONSOLE WELCOME MESSAGE
// ============================================

console.log(
    '%c Welcome to a Premium Developer Portfolio! ',
    'background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; padding: 12px 24px; font-size: 14px; border-radius: 6px; font-weight: bold; border: 2px solid #1e40af;'
);
console.log(
    '%c Crafted with Modern HTML5, Advanced CSS3, and Pure JavaScript ',
    'color: #10b981; font-size: 12px; font-weight: 600;'
);
console.log('🎨 Premium features: Glassmorphism, Animations, Dark Mode, Responsive Design');
console.log('🚀 Check out the source code on GitHub: https://github.com');

// ============================================
// 23. EXPORT FUNCTIONS FOR EXTERNAL USE
// ============================================

// Make utilities available globally if needed
window.portfolioUtils = {
    copyToClipboard,
    getUrlParameter,
    formatDate,
    showNotification,
    scrollToTop,
    smoothScrollToElement
};
