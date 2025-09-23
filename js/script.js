document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler');
    const menu = document.querySelector('.navbar-menu');
    const navbar = document.querySelector('.navbar');
    const body = document.querySelector('body');

    toggler.addEventListener('click', function () {
        menu.classList.toggle('active');

        const icons = document.querySelectorAll('.toggler-icon');
        if (menu.classList.contains('active')) {
            icons[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            icons[1].style.opacity = '0';
            icons[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            body.style.overflow = 'hidden';
        } else {
            icons[0].style.transform = 'rotate(0) translate(0)';
            icons[1].style.opacity = '1';
            icons[2].style.transform = 'rotate(0) translate(0)';
            body.style.overflow = 'auto';
        }
    });

    const navLinks = document.querySelectorAll('.navbar-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            const icons = document.querySelectorAll('.toggler-icon');
            icons[0].style.transform = 'rotate(0) translate(0)';
            icons[1].style.opacity = '1';
            icons[2].style.transform = 'rotate(0) translate(0)';
            body.style.overflow = 'auto';
        });
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;
        const inputs = contactForm.querySelectorAll('input[required], textarea[required]');

        inputs.forEach(input => {
            const errorMessage = input.nextElementSibling;

            if (!input.value.trim()) {
                errorMessage.style.display = 'block';
                isValid = false;
            } else {
                errorMessage.style.display = 'none';
            }
        });

        if (isValid) {
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            contactForm.reset();
        }
    });

    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});