// Vérifie que le JS est bien chargé
console.log("JS chargé ✅");

document.addEventListener('DOMContentLoaded', () => {

    /* ================= Show Menu ================= */
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    if(navToggle){
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    if(navClose){
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    /* ================= Remove Menu Mobile ================= */
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });

    /* ================= Header Scroll Shadow ================= */
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        header.style.borderBottom = window.scrollY >= 50 ? '1px solid var(--border-color)' : '1px solid transparent';
    });

    /* ================= Scroll Up Button ================= */
    window.addEventListener('scroll', () => {
        const scrollUp = document.getElementById('scroll-up');
        if(window.scrollY >= 350) scrollUp.classList.add('show-scroll');
        else scrollUp.classList.remove('show-scroll');
    });

    /* ================= Gmail Redirections ================= */
    const sendEmail = (subject, bodyTemplate) => {
        const email = 'antoine.forterax@gmail.com';
        const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyTemplate)}`;
        const popup = window.open(gmailComposeLink, '_blank');

        if (!popup || popup.closed || typeof popup.closed === 'undefined') {
            alert("Pop-up bloquée ! Connectez-vous à Gmail et envoyez votre message à antoine.forterax@gmail.com");
            window.location.href = 'https://mail.google.com/';
        }
    };

    /* ================= Gestion des commandes ================= */
    const handleOrder = () => {
        console.log("Bouton Commander cliqué ✅");
        const bodyTemplate = `Bonjour Antoine,

Je souhaite passer une commande Craftigo.

========================================
VOTRE DEMANDE :
[Précisez votre demande ici]

VOTRE EMAIL OU GMAIL :
[Entrez votre adresse email ou Gmail]

TYPE DE PRODUIT :
[Indiquez le produit ici]

DESCRIPTION :
[Décrivez votre projet en détail]

ADRESSE DE FACTURATION :
[Votre adresse complète]
========================================

Merci d'avance !`;

        sendEmail('Nouvelle commande Craftigo', bodyTemplate);
    };

    ['btn-direct-order','btn-nav-order','btn-hero-order','btn-price-order'].forEach(id => {
        document.getElementById(id)?.addEventListener('click', handleOrder);
    });

    /* ================= Contact et Support ================= */
    document.getElementById('btn-contact')?.addEventListener('click', () => {
        sendEmail('Contact Craftigo', 'Bonjour Antoine,\n\n[Votre message ici]');
    });

    document.getElementById('btn-support')?.addEventListener('click', () => {
        sendEmail('Problème – Craftigo', 'Nom :\nEmail :\nType de problème :\nDescription du problème :\nNiveau d\'urgence :\n');
    });

    /* ================= Active Link State ================= */
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 58;
            const sectionId = current.getAttribute('id');
            const sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                sectionsClass?.classList.add('active');
            } else {
                sectionsClass?.classList.remove('active');
            }
        });
    });

});
