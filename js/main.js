document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('projects-container');

    const cargarProyectos = () => {
        if (!container) return;

        proyectos.forEach(proyecto => {
            const card = document.createElement('article');
            card.classList.add('project-card');
            const tags = proyecto.tecnologias.map(tech => 
                `<span class="tag">${tech}</span>`
            ).join('');

            card.innerHTML = `
                <div class="card-image">
                    <img src="${proyecto.imagen}" alt="Imagen de ${proyecto.titulo}">
                </div>
                <div class="card-content">
                    <h3>${proyecto.titulo}</h3>
                    <p>${proyecto.descripcion}</p>
                    <div class="tags-container">${tags}</div>
                    <a href="${proyecto.link}" class="btn-card" target="_blank">Ver Proyecto</a>
                </div>
            `;

            container.appendChild(card);
        });
    };

});