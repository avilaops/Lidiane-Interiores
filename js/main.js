// ========================================
// NAVEGAÇÃO MOBILE
// ========================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav__menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav__menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ========================================
// SCROLL SUAVE
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// HEADER SCROLL EFFECT
// ========================================

const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ========================================
// ANIMAÇÃO DE ENTRADA DOS ELEMENTOS
// ========================================

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

// Observar elementos para animação
const animatedElements = document.querySelectorAll(
    '.service-card, .project-card, .testimonial-card, .process-step, .value-item'
);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// FORMULÁRIO DE CONTATO
// ========================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Coletar dados do formulário
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            project: document.getElementById('project').value,
            message: document.getElementById('message').value
        };

        // Validação básica
        if (!formData.name || !formData.email || !formData.phone || !formData.message) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        // Aqui você pode integrar com um serviço de envio de email
        // Por enquanto, vamos simular o envio
        console.log('Dados do formulário:', formData);

        // Criar mensagem WhatsApp
        const whatsappMessage = `Olá! Meu nome é ${formData.name}.%0A%0A` +
            `Email: ${formData.email}%0A` +
            `Telefone: ${formData.phone}%0A` +
            `Tipo de Projeto: ${formData.project}%0A%0A` +
            `Mensagem: ${formData.message}`;

        const whatsappNumber = '5516999999999'; // Substituir pelo número real
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

        // Abrir WhatsApp
        window.open(whatsappURL, '_blank');

        // Limpar formulário
        contactForm.reset();

        // Mostrar mensagem de sucesso
        alert('Redirecionando para WhatsApp! Obrigada pelo contato 🤍');
    });
}

// ========================================
// MÁSCARA DE TELEFONE
// ========================================

const phoneInput = document.getElementById('phone');

if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length <= 11) {
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
            value = value.replace(/(\d)(\d{4})$/, '$1-$2');
        }

        e.target.value = value;
    });
}

// ========================================
// CONTADOR DE CARACTERES (OPCIONAL)
// ========================================

const messageTextarea = document.getElementById('message');

if (messageTextarea) {
    const maxLength = 500;

    const counter = document.createElement('div');
    counter.style.cssText = 'text-align: right; margin-top: 0.5rem; font-size: 0.85rem; color: #9B9B9B;';
    counter.textContent = `0/${maxLength} caracteres`;

    messageTextarea.parentNode.appendChild(counter);
    messageTextarea.setAttribute('maxlength', maxLength);

    messageTextarea.addEventListener('input', function () {
        const length = this.value.length;
        counter.textContent = `${length}/${maxLength} caracteres`;

        if (length > maxLength * 0.9) {
            counter.style.color = '#D4A99C';
        } else {
            counter.style.color = '#9B9B9B';
        }
    });
}

// ========================================
// BOTÃO SCROLL TO TOP (OPCIONAL)
// ========================================

// Criar botão
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #4A6C6F;
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 999;
`;

document.body.appendChild(scrollTopBtn);

// Mostrar/esconder botão baseado no scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

// Ação do botão
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.backgroundColor = '#3a555a';
    scrollTopBtn.style.transform = 'translateY(-5px)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.backgroundColor = '#4A6C6F';
    scrollTopBtn.style.transform = 'translateY(0)';
});

// ========================================
// LOADING ANIMATION (OPCIONAL)
// ========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log('%c👋 Olá, Desenvolvedor!', 'font-size: 20px; font-weight: bold; color: #4A6C6F;');
console.log('%cSite desenvolvido para Lidiane de Paula - Design de Interiores', 'font-size: 14px; color: #9B9B9B;');
console.log('%c🎨 Design elegante, funcional e responsivo', 'font-size: 12px; color: #B8C5B0;');
