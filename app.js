// Crea la cuadricula de div
const cuadricula = document.getElementById("contenedor");

for (let i = 1; i <= 16; i++) {
    const fila = document.createElement("div");
    fila.classList.add("fila");
    fila.style.border = "solid 10px blue";
    cuadricula.appendChild(fila);
    for (let j = 1; j <= 16; j ++) {
        const columna = document.createElement("div");
        columna.classList.add("columna")
        columna.style.border = "solid 1px red";
        cuadricula.appendChild(columna);
    }
}