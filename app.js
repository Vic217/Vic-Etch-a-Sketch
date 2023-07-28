// Elementos a modificar en el DOM
const contenedor = document.getElementById("pizarra");
const borrar = document.getElementById("borrar");
const activarNegro = document.getElementById("negro");
const aleatorios = document.getElementById("aleatorio");
const borrador = document.getElementById("borrador");
const size = document.getElementById("slider");
const contenedorTam = document.getElementById("tamaño");

// Creacion de primer pizarra
for (let i = 1; i <= 256; i++) {
    const cuadrado = document.createElement("div");
    cuadrado.classList.add("cuadrado");
    cuadrado.style.width = (480 / 16) + "px";
    cuadrado.style.height = (480 / 16) + "px";
    contenedor.appendChild(cuadrado);

    // Seguimiento del mouse
    cuadrado.addEventListener("mouseenter", (e) => {
        cuadrado.classList.add("estado");
    });

    // Elimina el seguimiento
    cuadrado.addEventListener("mouseout", (e) => {
        cuadrado.classList.remove("estado");
    });
    
    // Eleccion de color negro
    activarNegro.addEventListener("click", (e) => {
        e.target.style.backgroundColor = "#2C2B2B";
        aleatorios.style.backgroundColor = "#FFFFFF";
        borrador.style.backgroundColor = "#FFFFFF";
        borrar.style.backgroundColor = "#FFFFFF";
        cuadrado.addEventListener(accion, (e) => {
            e.target.style.backgroundColor = "#000000";
        });
    });
}