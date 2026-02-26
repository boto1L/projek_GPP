// ===== HAMBURGER MENU TOGGLE =====
const hamburger = document.getElementById('hamburger-btn');
const nav = document.getElementById('main-nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('active');
});

// Close nav when a link is clicked (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        hamburger.classList.remove('active');
    });
});


// ===== ACTIVE NAV LINK ON SCROLL + HEADER SCROLL EFFECT =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    // Add 'scrolled' class to header after scrolling 50px
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Highlight the nav link matching the current visible section
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});


function handleContactForm(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const contact = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const text = `Halo Geprek Cup Cup! 🍗\n\nNama: ${name}\nWA/HP: ${contact}\nKeperluan: ${subject}\n\nPesanan/Pesan:\n${message}`;
    window.open(`https://wa.me/62812XXXXXXXX?text=${encodeURIComponent(text)}`, '_blank');

    document.getElementById('form-success').style.display = 'block';
    e.target.reset();
    setTimeout(() => {
        document.getElementById('form-success').style.display = 'none';
    }, 5000);
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .feature-card, .testimonial-card, .about-content').forEach(el => {
    el.classList.add('animate-in');
    observer.observe(el);
});
