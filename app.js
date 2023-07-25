// Crea la cuadricula de div
const cuadricula = document.getElementById("contenedor");

for (let i = 1; i <= 256; i++) {
    const cuadrado = document.createElement("div");
    cuadrado.classList.add("cuadrado");
    cuadricula.appendChild(cuadrado);
}