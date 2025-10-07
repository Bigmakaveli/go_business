// Language translation functionality
document.addEventListener('DOMContentLoaded', function() {
    const languageButtons = document.querySelectorAll('.lang-btn');
    const htmlElement = document.documentElement;
    
    // Language data
    const translations = {
        ar: {
            dir: 'rtl',
            lang: 'ar'
        },
        en: {
            dir: 'ltr',
            lang: 'en'
        },
        he: {
            dir: 'rtl',
            lang: 'he'
        }
    };
    
    // Initialize with Arabic (default)
    setLanguage('ar');
    
    // Add click event listeners to language buttons
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });
    
    function setLanguage(lang) {
        // Update HTML attributes
        htmlElement.setAttribute('dir', translations[lang].dir);
        htmlElement.setAttribute('lang', translations[lang].lang);
        
        // Update active language button
        languageButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
        
        // Update all translatable elements
        updateTranslatableElements(lang);
    }
    
    function updateTranslatableElements(lang) {
        const translatableElements = document.querySelectorAll('[data-ar], [data-en], [data-he]');
        
        translatableElements.forEach(element => {
            const translation = element.getAttribute(`data-${lang}`);
            if (translation) {
                element.textContent = translation;
            }
        });
    }
    
    // Buy Now button functionality
    const buyButtons = document.querySelectorAll('.buy-btn');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // For now, redirect to Google as requested
            // Later this can be updated with actual payment links
            window.open('https://google.com', '_blank');
        });
    });
    
    // Smooth scrolling for better UX
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.package-card, .feature-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add hover effects for package cards
    const packageCards = document.querySelectorAll('.package-card');
    
    packageCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = this.classList.contains('featured') 
                ? 'scale(1.05) translateY(-10px)' 
                : 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = this.classList.contains('featured') 
                ? 'scale(1.05)' 
                : 'translateY(0)';
        });
    });
    
    // Add loading animation for buy buttons
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = 'جاري التحميل...'; // Loading in Arabic
            this.disabled = true;
            
            // Simulate loading time
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);
        });
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.altKey) {
            switch(e.key) {
                case '1':
                    e.preventDefault();
                    setLanguage('ar');
                    break;
                case '2':
                    e.preventDefault();
                    setLanguage('en');
                    break;
                case '3':
                    e.preventDefault();
                    setLanguage('he');
                    break;
            }
        }
    });
    
    // Add touch support for mobile
    if ('ontouchstart' in window) {
        const touchElements = document.querySelectorAll('.package-card, .feature-card');
        
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            element.addEventListener('touchend', function() {
                this.style.transform = '';
            });
        });
    }
    
    // WhatsApp button functionality
    const whatsappBtn = document.getElementById('whatsappBtn');
    const whatsappText = whatsappBtn.querySelector('.whatsapp-text');
    
    // Update WhatsApp button text on language change
    function updateWhatsAppText(lang) {
        const translations = {
            ar: 'تواصل معنا',
            en: 'Contact Us',
            he: 'צור קשר'
        };
        whatsappText.textContent = translations[lang];
    }
    
    // Call updateWhatsAppText when language changes
    const originalSetLanguage = setLanguage;
    setLanguage = function(lang) {
        originalSetLanguage(lang);
        updateWhatsAppText(lang);
    };
    
    // Initialize WhatsApp text
    updateWhatsAppText('ar');
    
    // Console welcome message
    console.log('%cمرحباً بك في جو بزنس!', 'color: #65a30d; font-size: 20px; font-weight: bold;');
    console.log('%cWelcome to Go Business!', 'color: #84cc16; font-size: 16px;');
    console.log('%cברוכים הבאים ל-Go Business!', 'color: #25d366; font-size: 16px;');
});
