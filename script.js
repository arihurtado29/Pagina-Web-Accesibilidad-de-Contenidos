// ===============================
// FORMULARIO
// ===============================
document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;

    document.getElementById("mensaje").textContent =
        "Gracias " + nombre + ", te contactaremos pronto.";
});


// ===============================
// NAVBAR LINKS → IR A SECCIONES
// ===============================
document.querySelectorAll(".nav-links a, .nav-btn, .btn-primary, .btn-secondary").forEach(link => {

    link.addEventListener("click", function(e) {

        let destino = this.getAttribute("href");

        // Evitar errores con links vacíos (#)
        if (!destino || destino === "#") return;

        let seccion = document.querySelector(destino);

        if (seccion) {
            e.preventDefault();

            // altura de tu navbar fija
            let offset = document.querySelector(".navbar").offsetHeight;

            let posicion = seccion.offsetTop - offset;

            window.scrollTo({
                top: posicion,
                behavior: "auto" // directo (sin animación)
            });
        }
    });

});