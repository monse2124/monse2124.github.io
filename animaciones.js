// animaciones.js

document.addEventListener("DOMContentLoaded", function () {
    const elementosAnimados = document.querySelectorAll(".animado");

    const mostrarElemento = (elemento) => {
        const rect = elemento.getBoundingClientRect();
        const alturaVentana = window.innerHeight;
        if (rect.top < alturaVentana - 100) {
            elemento.classList.add("visible");
        }
    };

    const animarScroll = () => {
        elementosAnimados.forEach((elemento) => {
            mostrarElemento(elemento);
        });
    };

    // Mostrar al cargar
    animarScroll();

    // Mostrar al hacer scroll
    window.addEventListener("scroll", animarScroll);
});
