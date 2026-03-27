/**
 * Portfolio Main Logic
 */

// Project Data
const proyectos = [
    {
        titulo: "Pastelería Delicias",
        descripcion: "E-commerce Fullstack interactivo. Incluye gestión de inventario, carrito de compras y sistema de pedidos.",
        imagen: "assets/images/LogoPasteleria.png",
        tecnologias: ["Java", "Spring Boot", "MySQL", "JavaScript"],
        link: "https://github.com/sergiojz/PasteleriaDelicias",
    },
    {
        titulo: "Antojitos Mexican Curious",
        descripcion: "Sistema TPV (Punto de Venta) para restaurante, automatizando el stock, pedidos y registro de ventas.",
        imagen: "assets/images/Logo.png",
        tecnologias: ["Java", "SQLite", "JavaFX"],
        link: "https://github.com/sergiojz/MexicanTPV",
    },
    {
        titulo: "Sistema Gestión Inventario",
        descripcion: "Motor backend para control de stock. Evita rupturas de stock y gestiona proveedores eficientemente.",
        imagen: "assets/images/LogoInventory.png",
        tecnologias: ["Java", "JDBC", "SQL"],
        link: "https://github.com/sergiojz/GestionDeAlmacenamiento",
    },
];

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Theme Toggle Logic ---
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = themeBtn.querySelector('i');
    const body = document.body;

    // Check system preference or saved theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        body.classList.add('dark-mode');
        themeIcon.classList.replace('bx-moon', 'bx-sun');
    }

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        
        if (isDark) {
            themeIcon.classList.replace('bx-moon', 'bx-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.replace('bx-sun', 'bx-moon');
            localStorage.setItem('theme', 'light');
        }
    });

    // --- 2. Mobile Menu Toggle ---
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinksDOM = document.querySelectorAll('.nav-link');

    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        const icon = menuBtn.querySelector('i');
        if (navMenu.classList.contains('show')) {
            icon.classList.replace('bx-menu', 'bx-x');
        } else {
            icon.classList.replace('bx-x', 'bx-menu');
        }
    });

    // Close menu when clicking a link
    navLinksDOM.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            menuBtn.querySelector('i').classList.replace('bx-x', 'bx-menu');
        });
    });

    // --- 3. Render Projects ---
    const renderProjects = () => {
        const container = document.getElementById('projects-container');
        if (!container) return;

        proyectos.forEach((proyecto, index) => {
            const delayClass = `delay-${(index % 3 + 1) * 100}`;
            
            const tagsHTML = proyecto.tecnologias
                .map(tec => `<span class="tag">${tec}</span>`)
                .join('');

            const article = document.createElement('article');
            article.className = `project-card reveal ${delayClass}`;
            article.innerHTML = `
                <div class="project-image-wrapper">
                    <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="project-image" loading="lazy">
                </div>
                <div class="project-content">
                    <h3 class="project-title">${proyecto.titulo}</h3>
                    <p class="project-description">${proyecto.descripcion}</p>
                    <div class="project-tags">
                        ${tagsHTML}
                    </div>
                    <div class="project-links">
                        <a href="${proyecto.link}" target="_blank" rel="noopener noreferrer" class="project-link link-primary">
                            <i class='bx bxl-github'></i> Ver Código
                        </a>
                    </div>
                </div>
            `;
            container.appendChild(article);
        });
    };
    renderProjects();

    // --- 4. Scroll Animations (Intersection Observer) ---
    const initScrollAnimations = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: Unobserve after animating for better performance
                    // observer.unobserve(entry.target); 
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    };
    
    // Give a small delay to ensure DOM is fully painted before observing
    setTimeout(initScrollAnimations, 100);

    // --- 5. Active Nav Link on Scroll ---
    const sections = document.querySelectorAll('section[id]');
    
    const scrollActive = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const link = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if(link) link.classList.add('active');
            } else {
                if(link) link.classList.remove('active');
            }
        });
    };
    
    window.addEventListener('scroll', scrollActive);
});