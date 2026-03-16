const proyectos = [
    {
        titulo: "Pastelería Delicias",
        descripcion: "E-commerce Fullstack con API REST funcional. Incluye gestión de inventario, carrito de compras persistente y sistema de procesamiento de pedidos.",
        imagen: "assets/images/Logo.png", 
        tecnologias: ["Java", "Spring Boot", "MySQL", "JavaScript"],
        link: "https://github.com/sergiojz/PasteleriaDelicias" // Aquí puedes poner el link a tu GitHub cuando lo subas
    },
    {
        titulo: "Antojitos Mexican Curious",
        descripcion: "Sistema TPV (Punto de Venta) para restaurante, automatizando la gestión de stock y el registro de ventas diarias.",
        imagen: "assets/images/Logo.png", 
        tecnologias: ["Java", "SQLite"],
        link: "#"
    },
    {
        titulo: "Gestor de Tareas Pro",
        descripcion: "Aplicación de productividad con arquitectura modular y persistencia de datos en el cliente mediante LocalStorage.",
        imagen: "assets/images/Logo.png",
        tecnologias: ["JavaScript", "DOM", "CSS3"],
        link: "#"
    }
];

// Función para renderizar los proyectos
function cargarProyectos() {
    const contenedor = document.getElementById('projects-container');
    if (!contenedor) return;
    
    // 1. Limpieza total para evitar duplicados
    contenedor.innerHTML = "";

    // 2. Generar el contenido
    proyectos.forEach(proyecto => {
        const tagsHTML = proyecto.tecnologias
            .map(tec => `<span class="tag">${tec}</span>`)
            .join('');

        const cardHTML = `
            <article class="project-card reveal">
                <div class="card-image">
                    <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
                </div>
                <div class="card-content">
                    <h3>${proyecto.titulo}</h3>
                    <p>${proyecto.descripcion}</p>
                    <div class="tags-container">
                        ${tagsHTML}
                    </div>
                    <a href="${proyecto.link}" class="btn-card" target="_blank">Ver Proyecto</a>
                </div>
            </article>
        `;

        contenedor.innerHTML += cardHTML;
    });

    // 3. Lanzar la animación después de crear los elementos
    initScrollAnimation();
}

// Lógica de animación profesional (Intersection Observer)
function initScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, { 
        threshold: 0.1 
    });

    const elementosARevelar = document.querySelectorAll('.reveal');
    elementosARevelar.forEach(el => observer.observe(el));
}

// Ejecución segura
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cargarProyectos);
} else {
    cargarProyectos();
}