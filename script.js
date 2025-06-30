document.addEventListener('DOMContentLoaded', function() {
    // Dopamine-triggering scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',  
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Enhanced skill bars animation
                if (entry.target.classList.contains('skill-category')) {
                    const skillItems = entry.target.querySelectorAll('.skill-item');
                    
                    skillItems.forEach((skillItem, index) => {
                        const skillName = skillItem.querySelector('.skill-name');
                        const skillLevel = skillItem.querySelector('.skill-level');
                        const percentage = skillName.getAttribute('data-level');
                        
                        setTimeout(() => {
                            // Show percentage with animation
                            skillName.classList.add('show-percentage');
                            
                            // Animate skill bar
                            skillLevel.classList.add('animate');
                            skillLevel.style.width = percentage;
                            
                            // Add a subtle shake effect when bar reaches full width
                            setTimeout(() => {
                                skillLevel.style.animation = 'skillBarComplete 0.3s ease-in-out';
                            }, 1500);
                            
                        }, index * 300); // Stagger each skill bar by 300ms
                    });
                }
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements that should animate
    const animateElements = document.querySelectorAll('.fade-in, .slide-in, .skill-category, .project-card, .section-title');
    animateElements.forEach(el => observer.observe(el));

    // Enhanced back to top button  
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Satisfying click feedback
            backToTopBtn.style.transform = 'scale(0.9)';
            setTimeout(() => {
                backToTopBtn.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // Enhanced button interactions with ripple effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Enhanced Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links'); 
    const navItems = document.querySelectorAll('.nav-item');
    
    if (hamburger && navLinks) {
        // Prevent body scroll when menu is open
        function toggleBodyScroll(lock) {
            if (lock) {
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
            } else {
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.width = '';
            }
        }

        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            const isActive = navLinks.classList.contains('active');
            
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
            hamburger.setAttribute('aria-expanded', !expanded);
            
            // Handle body scroll
            toggleBodyScroll(!isActive);
            
            // Add haptic feedback on mobile
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navLinks.classList.contains('active') && 
                !navLinks.contains(e.target) && 
                !hamburger.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                toggleBodyScroll(false);
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                toggleBodyScroll(false);
            }
        });
        
        // Close mobile menu when nav items are clicked
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                    toggleBodyScroll(false);
                }
            });
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 1024 && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                toggleBodyScroll(false);
            }
        });
    }

    // Smooth scrolling for navigation
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Visual feedback
                item.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    item.style.transform = 'scale(1)';
                }, 100);
                
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Enhanced typing animation  
    const typedTextElement = document.querySelector('.typed-text');
    const phrases = ['Software Developer', 'Frontend Developer', 'Backend Developer', 'Web Designer'];
    if (typedTextElement) {
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 150;
        
        function typeEffect() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                typedTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 75;
            } else {
                typedTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 150;
                
                // Subtle typing animation
                typedTextElement.style.transform = 'translateX(1px)';
                setTimeout(() => {
                    typedTextElement.style.transform = 'translateX(0)';
                }, 50);
            }
            
            if (!isDeleting && charIndex === currentPhrase.length) {
                setTimeout(() => {
                    isDeleting = true;
                    typeEffect();
                }, 2000);
                return;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(typeEffect, 500);
                return;
            }
            
            setTimeout(typeEffect, typingSpeed);
        }
        
        // Start after delay
        setTimeout(typeEffect, 1000);
    }

    // Form interactions
    const formInputs = document.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
        
        input.addEventListener('input', function() {
            this.style.borderColor = '#10b981';
            setTimeout(() => {
                this.style.borderColor = '#3b82f6';
            }, 200);
        });
    });

    // Scroll progress indicator
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        let scrollIndicator = document.querySelector('.scroll-indicator');
        
        if (!scrollIndicator) {
            scrollIndicator = document.createElement('div');
            scrollIndicator.className = 'scroll-indicator';
            scrollIndicator.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 0%;
                height: 3px;
                background: linear-gradient(90deg, #3b82f6, #6366f1);
                z-index: 9999;
                transition: width 0.1s ease;
            `;
            document.body.appendChild(scrollIndicator);
        }
        
        scrollIndicator.style.width = scrollPercent + '%';
    });

    // Project tag hover effects
    const projectTags = document.querySelectorAll('.project-tags span');
    projectTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Contact form with feedback
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formMessage = document.getElementById('form-message');
            const submitButton = this.querySelector('button[type="submit"]');
            
            // Visual feedback
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verzenden...';
            submitButton.disabled = true;
            
            // Simulate form submission  
            setTimeout(() => {
                formMessage.innerHTML = '<div style="color: #10b981; padding: 1rem; background: rgba(16, 185, 129, 0.1); border-radius: 8px; margin: 1rem 0;"><i class="fas fa-check-circle"></i> Bericht succesvol verzonden!</div>';
                
                this.reset();
                submitButton.innerHTML = 'Verstuur Bericht';
                submitButton.disabled = false;
                
                // Success animation
                submitButton.style.background = '#10b981';
                setTimeout(() => {
                    submitButton.style.background = '';
                }, 2000);
                
            }, 2000);
        });
    }
});

// Form validation function
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        const formMessage = document.getElementById('form-message');
        formMessage.innerHTML = '<div style="color: #ef4444; padding: 1rem; background: rgba(239, 68, 68, 0.1); border-radius: 8px; margin: 1rem 0; animation: shake 0.5s ease-in-out;"><i class="fas fa-exclamation-triangle"></i> Vul alle verplichte velden in!</div>';
        
        // Add shake animation
        const shakeStyle = document.createElement('style');
        shakeStyle.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }
        `;
        document.head.appendChild(shakeStyle);
        
        return false;
    }
    
    return true;
}

// Touch improvements for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', e => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', e => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    // Swipe up to close mobile menu
    if (diff > swipeThreshold && navLinks?.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger?.classList.remove('active');
        hamburger?.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
    }
}

// Improve scroll performance on mobile
let ticking = false;
function updateScrollElements() {
    // Existing scroll logic here
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateScrollElements);
        ticking = true;
    }
}

// Enhanced viewport detection for mobile
function isMobile() {
    return window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Optimize animations for mobile
if (isMobile()) {
    // Reduce animation complexity on mobile
    const style = document.createElement('style');
    style.textContent = `
        .fade-in, .slide-in {
            animation-duration: 0.4s !important;
        }
        .skill-level {
            transition-duration: 1s !important;
        }
    `;
    document.head.appendChild(style);
}

// Prevent zoom on input focus (iOS)
const inputs = document.querySelectorAll('input, textarea, select');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        if (isMobile()) {
            const viewport = document.querySelector('meta[name="viewport"]');
            viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
        }
    });
    
    input.addEventListener('blur', function() {
        if (isMobile()) {
            const viewport = document.querySelector('meta[name="viewport"]');
            viewport.setAttribute('content', 'width=device-width, initial-scale=1');
        }
    });
});