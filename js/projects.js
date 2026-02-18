const proyectos = [
    {
        titulo: "Antojitos Mexican Curious",
        descripcion: "Un TPV para un restaurante mexicano, con funciones de gestion de productos y ventas.",
        imagen: "assets/images/Logo.png", 
        tecnologias: ["Java", "SQlite"],
        link: "#"
    },
    {
        titulo: "App del Clima",
        descripcion: "Aplicación que consume una API externa para mostrar el clima en tiempo real.",
        imagen: "assets/images/Logo.png",
        tecnologias: ["React", "API", "CSS"],
        link: "#"
    },
    {
        titulo: "Gestor de Tareas",
        descripcion: "Una aplicación To-Do list con persistencia de datos en LocalStorage.",
        imagen: "assets/images/Logo.png",
        tecnologias: ["JavaScript", "DOM"],
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

        // Añadimos la clase 'reveal' para la animación profesional
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
                // Si entra en el campo de visión, aparece
                entry.target.classList.add('active');
            } else {
                // Si sale del campo de visión (arriba o abajo), se esconde
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