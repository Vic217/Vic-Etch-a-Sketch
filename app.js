// Crea la cuadricula de div
const cuadricula = document.getElementById("contenedor");

for (let i = 1; i <= 256; i++) {
    const cuadrado = document.createElement("div");
    cuadrado.classList.add("cuadrado");
    cuadricula.appendChild(cuadrado);

    // Agrega el evento "mouseover" a cada cuadrado individualmente
    cuadrado.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "orange";
    });

    // Eliminar el evento anterior
    cuadrado.addEventListener("mouseout", (e) => {
        e.target.style.backgroundColor = "#FFFFFF";
    })
}