<script>
    const animados = document.querySelectorAll('.animado');

    const observer = new IntersectionObserver(entradas => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
                observer.unobserve(entrada.target); // Solo una vez
            }
        });
    }, {
        threshold: 0.1
    });

    animados.forEach(el => observer.observe(el));
</script>
