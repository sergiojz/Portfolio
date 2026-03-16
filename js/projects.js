const proyectos = [
  {
    titulo: "Pastelería Delicias",
    descripcion:
      "E-commerce Fullstack con API REST funcional. Incluye gestión de inventario, carrito de compras persistente y sistema de procesamiento de pedidos.",
    imagen: "assets/images/LogoPasteleria.png",
    tecnologias: ["Java", "Spring Boot", "MySQL", "JavaScript"],
    link: "https://github.com/sergiojz/PasteleriaDelicias",
  },
  {
    titulo: "Antojitos Mexican Curious",
    descripcion:
      "Sistema TPV (Punto de Venta) para restaurante, automatizando la gestión de stock y el registro de ventas diarias.",
    imagen: "assets/images/Logo.png",
    tecnologias: ["Java", "SQLite"],
    link: "#",
  },
  {
    titulo: "Sistema de Gestión de Inventario",
    descripcion:
      "Motor backend para el control de stock y almacén. Implementa lógica de negocio crítica para evitar rupturas de stock y gestión de proveedores.",
    imagen: "assets/images/LogoInventory.png",
    tecnologias: ["Java", "JDBC", "SQL", "Git"],
    link: "https://github.com/sergiojz/GestionDeAlmacenamiento",
  },
];

function cargarProyectos() {
  const contenedor = document.getElementById("projects-container");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  proyectos.forEach((proyecto) => {
    const tagsHTML = proyecto.tecnologias
      .map((tec) => `<span class="tag">${tec}</span>`)
      .join("");

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

  initScrollAnimation();
}

function initScrollAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  const elementosARevelar = document.querySelectorAll(".reveal");
  elementosARevelar.forEach((el) => observer.observe(el));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", cargarProyectos);
} else {
  cargarProyectos();
}
