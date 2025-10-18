// Language translations
const translations = {
    he: {
        since: "מאז 1993",
        videoNotSupported: "הדפדפן שלך לא תומך בוידאו HTML.",
        aboutTitle: "מי אנחנו",
        aboutText: "חברת Go business שנוסדה בשנת 1993 מציעה מגוון רחב של שירותים עסקיים. החברה מעניקה לכם את ההזדמנות להשתתף בכל המכירות הפומביות של סחורות מגוונות מהנמל ישירות דרך זום. החברה מאפשרת לכם להירשם ולקנות סחורות מוחרמות ישירות. החברה נותנת הזדמנות למפעלים וחברות להציג את מוצריהם בפני המספר הגדול ביותר של סוחרים וחנויות המחפשים מקורות לרכישת סחורות.",
        packagesTitle: "חבילות מנוי",
        monthly: "חודשי",
        threeMonths: "3 חודשים",
        sixMonths: "6 חודשים",
        yearly: "שנתי",
        auctions: "מכירות פומביות",
        confiscated: "סחורות מוחרמות",
        productDisplay: "הצגת מוצרים",
        contactTitle: "צור קשר",
        send: "שלח",
        allRights: "כל הזכויות שמורות"
    },
    ar: {
        since: "منذ 1993",
        videoNotSupported: "متصفحك لا يدعم فيديو HTML.",
        aboutTitle: "من نحن",
        aboutText: "شركه Go business التي تأسست سنه 1993 تقدم الشركه العديد من الخدمات التجاريه تقدم لكم الفرصه بلاشراك في كافه المزادات على بضائع متنوعه من الميناء بشكل مباشر عبر الزوم تقدم لكم امكانيه الاشتراك والشراء من البضائع المصادره بشكل مباشر اعطاء الفرصه للمصانع والشركات بعرض منتجاتهم على اكبر عدد من التجار والمحلات التجاريه التي تبحث عن مصادر لشراء البضائع",
        packagesTitle: "باقات الاشتراك",
        monthly: "شهري",
        threeMonths: "3 شهور",
        sixMonths: "6 شهور",
        yearly: "سنة",
        auctions: "المزادات",
        confiscated: "البضائع المصادره",
        productDisplay: "عرض منتجاتكم",
        contactTitle: "تواصل معنا",
        send: "إرسال",
        allRights: "جميع الحقوق محفوظة"
    },
    en: {
        since: "Since 1993",
        videoNotSupported: "Your browser doesn't support HTML video.",
        aboutTitle: "About Us",
        aboutText: "Go Business company founded in 1993 offers many commercial services. The company gives you the opportunity to participate in all auctions on various goods from the port directly via Zoom. The company provides you with the possibility to subscribe and buy confiscated goods directly. Giving factories and companies the opportunity to display their products to the largest number of traders and commercial stores looking for sources to buy goods.",
        packagesTitle: "Subscription Packages",
        monthly: "Monthly",
        threeMonths: "3 Months",
        sixMonths: "6 Months",
        yearly: "Yearly",
        auctions: "Auctions",
        confiscated: "Confiscated Goods",
        productDisplay: "Product Display",
        contactTitle: "Contact Us",
        send: "Send",
        allRights: "All rights reserved"
    },
    ru: {
        since: "С 1993 года",
        videoNotSupported: "Ваш браузер не поддерживает HTML видео.",
        aboutTitle: "О нас",
        aboutText: "Компания Go Business, основанная в 1993 году, предлагает множество коммерческих услуг. Компания предоставляет вам возможность участвовать во всех аукционах на различные товары из порта напрямую через Zoom. Компания предоставляет вам возможность подписаться и покупать конфискованные товары напрямую. Предоставление фабрикам и компаниям возможности демонстрировать свою продукцию наибольшему количеству торговцев и коммерческих магазинов, ищущих источники для покупки товаров.",
        packagesTitle: "Пакеты подписки",
        monthly: "Ежемесячно",
        threeMonths: "3 месяца",
        sixMonths: "6 месяцев",
        yearly: "Годовой",
        auctions: "Аукционы",
        confiscated: "Конфискованные товары",
        productDisplay: "Демонстрация продукции",
        contactTitle: "Связаться с нами",
        send: "Отправить",
        allRights: "Все права защищены"
    }
};

// Current language
let currentLang = 'he';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeContactForm();
    initializeGallery();
});

// Language functionality
function initializeLanguage() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const mobileSelect = document.getElementById('mobile-lang-select');
    
    // Desktop language buttons
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // Mobile language dropdown
    mobileSelect.addEventListener('change', function() {
        switchLanguage(this.value);
    });
}

function switchLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update mobile select
    document.getElementById('mobile-lang-select').value = lang;
    
    // Update document direction
    if (lang === 'ar' || lang === 'he') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', lang);
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
    }
    
    // Translate all elements
    translatePage(lang);
    
    // Update gallery direction
    updateGalleryDirection();
}

function translatePage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    const nameInput = document.getElementById('contactName');
    const messageInput = document.getElementById('contactMessage');
    
    if (lang === 'he') {
        nameInput.placeholder = 'השם';
        messageInput.placeholder = 'ההודעה';
    } else if (lang === 'ar') {
        nameInput.placeholder = 'الاسم';
        messageInput.placeholder = 'الرسالة';
    } else if (lang === 'en') {
        nameInput.placeholder = 'Name';
        messageInput.placeholder = 'Message';
    } else if (lang === 'ru') {
        nameInput.placeholder = 'Имя';
        messageInput.placeholder = 'Сообщение';
    }
}


// Contact form functionality
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('contactName').value;
        const message = document.getElementById('contactMessage').value;
        
        if (!name || !message) {
            alert(currentLang === 'he' ? 'אנא מלא את כל השדות' : 
                  currentLang === 'ar' ? 'يرجى ملء جميع الحقول' :
                  currentLang === 'en' ? 'Please fill in all fields' :
                  'Пожалуйста, заполните все поля');
            return;
        }
        
        // Create WhatsApp message
        const whatsappMessage = `שלום, אני ${name}.\n${message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // WhatsApp API URL (you can replace with actual WhatsApp number)
        const whatsappUrl = `https://wa.me/972501234567?text=${encodedMessage}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Reset form
        form.reset();
        
        // Show success message
        const successMessage = currentLang === 'he' ? 'ההודעה נשלחה בהצלחה!' :
                              currentLang === 'ar' ? 'تم إرسال الرسالة بنجاح!' :
                              currentLang === 'en' ? 'Message sent successfully!' :
                              'Сообщение отправлено успешно!';
        
        alert(successMessage);
    });
}

// Smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.2)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.1)';
    }
});

// Gallery functionality
function updateGalleryDirection() {
    const galleryTrack = document.getElementById('galleryTrack');
    if (!galleryTrack) return;
    
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
    
    // Remove existing animation
    galleryTrack.style.animation = 'none';
    
    // Force reflow
    galleryTrack.offsetHeight;
    
    // Apply new animation based on direction
    if (isRTL) {
        galleryTrack.style.animation = 'autoScrollRTL 60s linear infinite';
    } else {
        galleryTrack.style.animation = 'autoScrollLTR 60s linear infinite';
    }
}

function initializeGallery() {
    const galleryTrack = document.getElementById('galleryTrack');
    
    if (!galleryTrack) return;
    
    // Initial setup
    updateGalleryDirection();
    
    // Optional: Add hover pause functionality
    galleryTrack.addEventListener('mouseenter', () => {
        galleryTrack.style.animationPlayState = 'paused';
    });
    
    galleryTrack.addEventListener('mouseleave', () => {
        galleryTrack.style.animationPlayState = 'running';
    });
}

// Initialize with Hebrew as default
switchLanguage('he');

