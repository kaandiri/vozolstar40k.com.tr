// Global variables
let currentReview = 0;
let reviews;

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log('Vozol Star 40K website loaded successfully');
    
    // Initialize reviews after DOM is ready
    reviews = document.querySelectorAll('.review-card');
    
    // Initialize review slider
    initializeReviewSlider();
    
    // Add smooth scrolling for navigation
    addSmoothScrolling();
    
    // Initialize FAQ functionality
    initializeFAQ();
    
    // Add some interactive animations
    addScrollAnimations();
});

// Review slider functionality
function initializeReviewSlider() {
    if (reviews.length > 0) {
        // Auto-rotate reviews every 5 seconds
        setInterval(function() {
            changeReview(1);
        }, 5000);
    }
}

function changeReview(direction) {
    // Hide current review
    if (reviews[currentReview]) {
        reviews[currentReview].classList.remove('active');
    }
    
    // Calculate next review index
    currentReview += direction;
    
    if (currentReview >= reviews.length) {
        currentReview = 0;
    } else if (currentReview < 0) {
        currentReview = reviews.length - 1;
    }
    
    // Show new review
    if (reviews[currentReview]) {
        reviews[currentReview].classList.add('active');
    }
}

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.querySelector('.main-header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

function addSmoothScrolling() {
    // Add click handlers to navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// FAQ functionality
function initializeFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            toggleFaq(this);
        });
    });
}

function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const isActive = element.classList.contains('active');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-question').forEach(function(q) {
        q.classList.remove('active');
        q.nextElementSibling.classList.remove('active');
    });
    
    // Toggle current item
    if (!isActive) {
        element.classList.add('active');
        answer.classList.add('active');
    }
}

// Scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .spec-item, .faq-item');
    animatedElements.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Feature cards hover effect
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // CTA button pulse effect
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        setInterval(function() {
            ctaButton.style.boxShadow = '0 8px 30px rgba(0, 212, 255, 0.8)';
            setTimeout(function() {
                ctaButton.style.boxShadow = '0 6px 20px rgba(0, 212, 255, 0.4)';
            }, 1000);
        }, 3000);
    }
});

// Console log for debugging
console.log('Vozol Star 40K - Premium elektronik sigara deneyimi');