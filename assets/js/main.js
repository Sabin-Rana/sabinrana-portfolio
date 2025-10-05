// Enhanced Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container') && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
    }
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container') && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
    }
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
    }
});

// Enhanced smooth scrolling for navigation links AND scroll indicator
document.addEventListener('DOMContentLoaded', function() {
    // Navigation links smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll indicator functionality (desktop + mobile)
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.style.cursor = 'pointer';
        
        // Click event (desktop)
        scrollIndicator.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                const offsetTop = aboutSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
        
        // Touch event (mobile)
        scrollIndicator.addEventListener('touchend', function() {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                const offsetTop = aboutSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .cert-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Current year in footer
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('footer p:first-child');
    if (yearElement) {
        yearElement.innerHTML = `&copy; ${currentYear} Sabin Rana. All rights reserved.`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Handle images that might fail to load
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
    });
});

// ===== ADVANCED ANIMATIONS =====

// Animated counter for hero stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, 16);
    });
}

// Initialize when hero section is in view
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            heroObserver.unobserve(entry.target);
        }
    });
});

// Observe hero section
const heroSection = document.querySelector('.hero-cloud');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// ===== FLOATING CLOUDS & MAGNETIC EFFECTS =====
function initFloatingEffects() {
    const aboutCard = document.querySelector('.about-card-3d');
    if (!aboutCard) return;
    
    // Add cloud container to about card
    const cloudContainer = document.createElement('div');
    cloudContainer.className = 'cloud-container';
    cloudContainer.innerHTML = `
        <div class="floating-cloud cloud-1"></div>
        <div class="floating-cloud cloud-2"></div>
        <div class="floating-cloud cloud-3"></div>
    `;
    aboutCard.appendChild(cloudContainer);
    
    // Magnetic effect for profile image
    const profileImage = document.querySelector('.profile-image-hover');
    const techItems = document.querySelectorAll('.tech-item');
    
    // Desktop magnetic effects
    if (window.matchMedia("(hover: hover)").matches) {
        // Profile image magnetic effect
        if (profileImage) {
            profileImage.addEventListener('mousemove', (e) => {
                const rect = profileImage.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) / 20;
                const y = (e.clientY - rect.top - rect.height / 2) / 20;
                
                profileImage.style.setProperty('--mouse-x', `${x}px`);
                profileImage.style.setProperty('--mouse-y', `${y}px`);
                profileImage.classList.add('magnetic-hover');
            });
            
            profileImage.addEventListener('mouseleave', () => {
                profileImage.classList.remove('magnetic-hover');
                profileImage.style.removeProperty('--mouse-x');
                profileImage.style.removeProperty('--mouse-y');
            });
        }
        
        // Tech items magnetic effects
        techItems.forEach(item => {
            item.addEventListener('mousemove', (e) => {
                const rect = item.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) / 10;
                const y = (e.clientY - rect.top - rect.height / 2) / 10;
                
                item.style.setProperty('--tech-x', `${x}px`);
                item.style.setProperty('--tech-y', `${y}px`);
                item.classList.add('magnetic-hover');
            });
            
            item.addEventListener('mouseleave', () => {
                item.classList.remove('magnetic-hover');
                item.style.removeProperty('--tech-x');
                item.style.removeProperty('--tech-y');
            });
        });
    }
    
    // Mobile touch effects
    else {
        techItems.forEach(item => {
            item.addEventListener('touchstart', () => {
                item.style.transform = 'scale(0.95)';
                item.style.background = 'var(--primary-color)';
                item.style.color = 'white';
            });
            
            item.addEventListener('touchend', () => {
                item.style.transform = '';
                item.style.background = '';
                item.style.color = '';
            });
        });
        
        if (profileImage) {
            profileImage.addEventListener('touchstart', () => {
                profileImage.style.transform = 'scale(0.98)';
            });
            
            profileImage.addEventListener('touchend', () => {
                profileImage.style.transform = '';
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initFloatingEffects(); // ← NEW FUNCTION NAME
    // ... other code ...
});

// Mobile-specific optimizations
function initMobileAnimations() {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
        // Disable tilt effects on touch devices
        document.querySelectorAll('.project-card-3d').forEach(card => {
            card.style.transform = 'none';
        });
        
        // Add touch-specific event listeners
        document.querySelectorAll('.project-card-3d').forEach(card => {
            card.addEventListener('touchstart', function() {
                this.style.transition = 'transform 0.1s ease';
            });
            
            card.addEventListener('touchend', function() {
                this.style.transition = 'transform 0.3s ease';
            });
        });
        
        // Enhanced touch feedback for buttons
        document.querySelectorAll('.social-btn, .project-link-ripple, .copy-link-btn').forEach(btn => {
            btn.addEventListener('touchstart', function() {
                this.classList.add('tap-active');
            });
            
            btn.addEventListener('touchend', function() {
                this.classList.remove('tap-active');
            });
        });
    }
}

// Add this CSS for touch states
const mobileCSS = `
.tap-active {
    transform: scale(0.95) !important;
    opacity: 0.8 !important;
}
`;

// Inject mobile CSS
const style = document.createElement('style');
style.textContent = mobileCSS;
document.head.appendChild(style);

// ===== SCROLL INDICATOR FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        // Make it clickable
        scrollIndicator.style.cursor = 'pointer';
        
        // Add click functionality
        scrollIndicator.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                const offsetTop = aboutSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// ===== FLOATING TECH ICONS INTERACTION =====
function initTechIcons() {
    const aboutCard = document.querySelector('.about-card-3d');
    if (!aboutCard) return;
    
    const techIconsContainer = document.createElement('div');
    techIconsContainer.className = 'floating-tech-icons';
    techIconsContainer.innerHTML = `
        <div class="tech-icon" data-tech="aws">☁️</div>
        <div class="tech-icon" data-tech="cisco">🌐</div>
        <div class="tech-icon" data-tech="security">🔒</div>
        <div class="tech-icon" data-tech="terraform">⚙️</div>
    `;
    aboutCard.appendChild(techIconsContainer);
    
    // Make tech icons interactive
    const techIcons = document.querySelectorAll('.tech-icon');
    
    techIcons.forEach(icon => {
        // Desktop hover
        icon.addEventListener('mouseenter', function() {
            this.style.opacity = '0.8';
            this.style.transform = 'scale(1.5)';
            this.style.animationPlayState = 'paused';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.opacity = '0.3';
            this.style.transform = 'scale(1)';
            this.style.animationPlayState = 'running';
        });
        
        // Mobile touch
        icon.addEventListener('touchstart', function() {
            this.style.opacity = '0.8';
            this.style.transform = 'scale(1.5)';
            this.style.animationPlayState = 'paused';
        });
        
        icon.addEventListener('touchend', function() {
            this.style.opacity = '0.3';
            this.style.transform = 'scale(1)';
            this.style.animationPlayState = 'running';
        });
    });
}


document.addEventListener('DOMContentLoaded', function() {
    initTechIcons();
    
});

// ===== SKILLS GALAXY =====
function initSkillsGalaxy() {
    const galaxyViewport = document.querySelector('.galaxy-viewport');
    const skillDetails = document.querySelector('.skill-details');
    const skillName = document.querySelector('.skill-name');
    const proficiencyFill = document.querySelector('.proficiency-fill');
    const proficiencyText = document.querySelector('.proficiency-text');
    const skillDescription = document.querySelector('.skill-description');
    const skillCategoryContent = document.querySelector('.skill-category-content');
    
    if (!galaxyViewport) return;
    
    // Your existing skills content organized by category
    const skillsData = [
        {
            id: 'cloud-toolkit',
            name: 'My Cloud Toolkit',
            level: 85,
            description: 'Core AWS services and technologies I use daily in projects',
            content: `
                <div class="skill-items">
                    <div class="skill-item">
                        <span class="skill-name">AWS Core Services</span>
                        <p>Building with EC2, S3, VPC, RDS - the services I use daily in my projects</p>
                    </div>
                    <div class="skill-item">
                        <span class="skill-name">Serverless & Lambda</span>
                        <p>Creating event-driven architectures for cost-effective scaling</p>
                    </div>
                    <div class="skill-item">
                        <span class="skill-name">Networking & Security</span>
                        <p>Designing secure VPCs and implementing IAM policies</p>
                    </div>
                </div>
            `,
            x: 30, y: 40
        },
        {
            id: 'mastering',
            name: 'Currently Mastering',
            level: 70,
            description: 'Technologies and practices I\'m actively learning and implementing',
            content: `
                <div class="skill-items">
                    <div class="skill-item">
                        <span class="skill-name">Terraform & Infrastructure as Code</span>
                        <p>Converting all my console projects to automated Terraform configurations</p>
                    </div>
                    <div class="skill-item">
                        <span class="skill-name">CI/CD Pipelines</span>
                        <p>Learning GitHub Actions and AWS CodePipeline for automated deployments</p>
                    </div>
                </div>
            `,
            x: 60, y: 30
        },
        {
            id: 'foundation',
            name: 'My Foundation',
            level: 90,
            description: 'Core expertise that shapes my approach to cloud architecture',
            content: `
                <div class="skill-items">
                    <div class="skill-item">
                        <span class="skill-name">Networking Expertise</span>
                        <p>CCNP ENCOR knowledge applied to cloud networking design</p>
                    </div>
                    <div class="skill-item">
                        <span class="skill-name">Security Mindset</span>
                        <p>MScIT in Applied Security shaping my approach to cloud architecture</p>
                    </div>
                </div>
            `,
            x: 40, y: 60
        }
    ];
    
    // Create skill stars
    skillsData.forEach(skill => {
        const star = document.createElement('div');
        star.className = `skill-star ${getProficiencyClass(skill.level)}`;
        star.style.left = `${skill.x}%`;
        star.style.top = `${skill.y}%`;
        star.setAttribute('data-skill', skill.id);
        
        // Desktop events
        star.addEventListener('mouseenter', () => showSkillDetails(skill));
        star.addEventListener('click', () => showSkillDetails(skill));
        
        // Mobile touch events
        star.addEventListener('touchstart', (e) => {
            e.preventDefault();
            showSkillDetails(skill);
        });
        
        galaxyViewport.appendChild(star);
    });
    
    // Show first category by default
    if (skillsData.length > 0) {
        showSkillDetails(skillsData[0]);
        document.querySelector(`[data-skill="${skillsData[0].id}"]`).classList.add('active');
    }
    
    // ... rest of the JavaScript code remains the same (dragging, controls, etc.)
    // [Keep all the dragging, zoom controls, and mobile touch code from previous version]
    
    function showSkillDetails(skill) {
        // Update skill details
        skillName.textContent = skill.name;
        proficiencyFill.style.width = `${skill.level}%`;
        proficiencyText.textContent = `${skill.level}%`;
        skillDescription.textContent = skill.description;
        
        // Update category content with your existing HTML
        skillCategoryContent.innerHTML = skill.content;
        
        // Highlight active star
        document.querySelectorAll('.skill-star').forEach(star => {
            star.classList.remove('active');
        });
        document.querySelector(`[data-skill="${skill.id}"]`).classList.add('active');
    }
    
    function getProficiencyClass(level) {
        if (level >= 90) return 'expert';
        if (level >= 80) return 'advanced';
        if (level >= 70) return 'intermediate';
        return 'beginner';
    }
    
    // ... rest of the functions (createConstellationLines, etc.)
}

// ===== ENHANCED TOUCH FEEDBACK FOR QUALIFICATION CARDS =====
function initQualificationTouch() {
    const certCards = document.querySelectorAll('.cert-card');
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
        certCards.forEach(card => {
            card.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            });
            
            card.addEventListener('touchend', function() {
                this.classList.remove('touch-active');
            });
            
            card.addEventListener('touchcancel', function() {
                this.classList.remove('touch-active');
            });
        });
    }
}

// Initialize all touch functionality
document.addEventListener('DOMContentLoaded', function() {
    // ... your existing initialization code ...
    
    initQualificationTouch(); // Add this line
});

// ===== ARCHITECTURE MODAL FUNCTIONALITY =====
function initArchitectureModal() {
    const modal = document.getElementById('architectureModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close-modal');
    const viewButtons = document.querySelectorAll('.view-architecture-btn');

    // Open modal when view architecture button is clicked
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const projectCard = this.closest('.project-card-3d');
            const projectImage = projectCard.querySelector('img');
            
            if (projectImage && projectImage.src) {
                modalImage.src = projectImage.src;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal when X is clicked
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Prevent modal close when clicking on the image
    modalImage.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

// Also add this for mobile touch support
function initMobileModalSupport() {
    const modal = document.getElementById('architectureModal');
    const modalImage = document.getElementById('modalImage');
    
    // Double tap to zoom on mobile
    let lastTap = 0;
    modalImage.addEventListener('touchend', function(e) {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        
        if (tapLength < 500 && tapLength > 0) {
            // Double tap detected - toggle zoom
            if (this.style.transform === 'scale(2)') {
                this.style.transform = 'scale(1)';
            } else {
                this.style.transform = 'scale(2)';
            }
            e.preventDefault();
        }
        lastTap = currentTime;
    });

    // Reset zoom when closing modal
    modal.addEventListener('click', function() {
        modalImage.style.transform = 'scale(1)';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // ... your existing code ...
    
    initArchitectureModal();
    initMobileModalSupport();
    
    // ... rest of your code ...
});

// Terminal typing effect
function initTerminalTyping() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const text = typingElement.textContent;
    typingElement.textContent = '';
    typingElement.style.borderRight = '2px solid white';
    
    let index = 0;
    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150);
        } else {
            // Keep cursor blinking after typing completes
            setInterval(() => {
                typingElement.style.borderRight = typingElement.style.borderRight ? '' : '2px solid white';
            }, 500);
        }
    }
    
    // Start typing after hero loads
    setTimeout(type, 1000);
}

// Call in DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    initTerminalTyping();
});

// Binary Rain Effect
function initBinaryRain() {
    const binaryRain = document.querySelector('.binary-rain');
    if (!binaryRain) return;
    
    function createBinary() {
        const digit = document.createElement('div');
        digit.className = 'binary-digit';
        digit.textContent = Math.random() > 0.5 ? '0' : '1';
        digit.style.left = Math.random() * 100 + 'vw';
        digit.style.animationDuration = (Math.random() * 3 + 2) + 's';
        digit.style.opacity = Math.random() * 0.5 + 0.1;
        
        binaryRain.appendChild(digit);
        
        // Remove digit after animation completes
        setTimeout(() => {
            digit.remove();
        }, 5000);
    }
    
    // Create multiple binary digits
    setInterval(createBinary, 100);
}

// Call in DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    initBinaryRain();
});

// Create more frequent and visible digits
setInterval(createBinary, 50); // More frequent

