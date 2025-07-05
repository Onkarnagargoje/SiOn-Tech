document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('header nav a[href^="#"], header #mobile-menu a[href^="#"]');
    const contactForm = document.getElementById('contact-form');
    const currentYearSpan = document.getElementById('current-year');
    const animatedSections = document.querySelectorAll('.animated-section');
    // Typed text element is no longer used with the static headline
    // const typedTextElement = document.getElementById('typed-text-hero');

    // Removed Typed.js-like functionality as per feedback

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
            } else {
                return;
            }

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                let scrollToPosition = targetSection.offsetTop - navbarHeight;
                if (targetId === 'hero') {
                    scrollToPosition = 0;
                }

                window.scrollTo({
                    top: scrollToPosition,
                    behavior: 'smooth'
                });
            }

            if (mobileMenu && mobileMenu.contains(link) && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                menuToggle.innerHTML = '<i class="fas fa-bars text-3xl"></i>';
            }
            setActiveLink(this.getAttribute('href'));
        });
    });

    // Mobile menu toggle
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if (mobileMenu.classList.contains('hidden')) {
                menuToggle.innerHTML = '<i class="fas fa-bars text-3xl"></i>';
            } else {
                menuToggle.innerHTML = '<i class="fas fa-times text-3xl"></i>';
            }
        });
    }

    // Navbar style on scroll & Active link highlighting
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (navbar) {
            if (scrollTop > 50) {
                navbar.classList.add('h-16', 'shadow-xl', 'bg-opacity-95');
                navbar.classList.remove('h-20');
            } else {
                navbar.classList.add('h-20');
                navbar.classList.remove('h-16', 'shadow-xl', 'bg-opacity-95');
            }
        }

        let currentSectionId = '';
        const sections = document.querySelectorAll('main section[id]');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (!currentSectionId && sections.length > 0 && window.scrollY < sections[0].offsetTop - navbarHeight - 100) {
            currentSectionId = 'hero';
        }

        setActiveLink(currentSectionId ? `#${currentSectionId}` : '#hero');

        animatedSections.forEach(section => {
            const sectionTop = section.offsetTop - window.innerHeight + 100;
            if (scrollTop > sectionTop) {
                section.classList.add('visible');
                section.style.transform = 'translateY(0)';
            }
        });
    });

    function setActiveLink(targetHref) {
        const desktopNavLinks = document.querySelectorAll('header nav a.nav-link-underline');
        desktopNavLinks.forEach(link => {
            link.classList.remove('active', 'text-primary');
            link.classList.add('text-light');
            if (link.getAttribute('href') === targetHref) {
                link.classList.add('active', 'text-primary');
                link.classList.remove('text-light');
            }
        });

        const mobileNavLinks = document.querySelectorAll('header #mobile-menu a');
        mobileNavLinks.forEach(link => {
            link.classList.remove('bg-primary', 'text-white');
            link.classList.add('text-light', 'hover:bg-primary', 'hover:text-white');
            if (link.getAttribute('href') === targetHref) {
                link.classList.add('bg-primary', 'text-white');
                link.classList.remove('text-light', 'hover:bg-primary', 'hover:text-white');
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !subject || !message) {
                e.preventDefault();
                alert('Please fill in all fields before sending.');
                return;
            }

            setTimeout(() => {
                if (document.getElementById('contact-form')) {
                    // alert('Your email client should open to send the message.');
                }
            }, 100);
        });
    }

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    function initializePage() {
        const initialHash = window.location.hash || '#hero';
        setActiveLink(initialHash);
        window.dispatchEvent(new Event('scroll'));

        if (window.location.hash && window.location.hash !== '#hero') {
            setTimeout(() => {
                const targetSection = document.getElementById(window.location.hash.substring(1));
                if (targetSection) {
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const scrollToPosition = targetSection.offsetTop - navbarHeight;
                    window.scrollTo({ top: scrollToPosition, behavior: 'auto' });
                }
            }, 100);
        } else if (window.location.hash === '#hero') {
            window.scrollTo({ top: 0, behavior: 'auto' });
        }
    }

    initializePage();
});