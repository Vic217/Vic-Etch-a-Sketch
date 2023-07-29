// Elementos a modificar en el DOM
const contenedor = document.getElementById("pizarra");
const borrar = document.getElementById("borrar");
const activarNegro = document.getElementById("negro");
const aleatorios = document.getElementById("aleatorio");
const borrador = document.getElementById("borrador");
const size = document.getElementById("slider");
const contenedorTam = document.getElementById("tamaño");

// Variables para trabajar en las funciones
let tam = 1;
let accion = "mouseover";

// Valores iniciales de colores
let r = 0;
let g = 0;
let b = 0;

// Tamaño por defecto
const valor = document.createElement("p");
    valor.classList.add("tamañoNuevo");
    valor.innerText = "30 X 30";
    contenedorTam.appendChild(valor);

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

    // Eleccion de colores aleatorios
    aleatorios.addEventListener("click", (e) => {
        e.target.style.backgroundColor = "#2C2B2B";
        activarNegro.style.backgroundColor = "#FFFFFF";
        borrador.style.background = "#FFFFFF";
        borrar.style.backgroundColor = "#FFFFFF";
        cuadrado.addEventListener(accion, (e) => {
            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);
            e.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        });
    });

    // Eleccion de borrador
    borrador.addEventListener("click", (e) => {
        e.target.style.backgroundColor = "#2C2B2B";
        activarNegro.style.backgroundColor = "#FFFFFF";
        aleatorios.style.backgroundColor = "#FFFFFF";
        borrar.style.backgroundColor = "#FFFFFF"
        cuadrado.addEventListener(accion, (e) => {
            e.target.style.backgroundColor = "#FFFFFF";
        });
    });

    // Borrar Todo
    borrar.addEventListener("click", (e) => {
        cuadrado.style.backgroundColor = "#FFFFFF";
        activarNegro.style.backgroundColor = "#FFFFFF";
        aleatorios.style.backgroundColor = "#FFFFFF";
        borrador.style.backgroundColor = "#FFFFFF";
        e.target.style.backgroundColor = "#2C2B2B";
        cuadrado.addEventListener(accion, (e) => {
            e.target.style.backgroundColor = "#FFFFFF";
        });
    });
}

// Cambio de tamaño
size.addEventListener("change", (e) => {
    const eliminar = document.getElementsByClassName("cuadrado");
    while (eliminar[0]){
        eliminar[0].remove();
    }

    activarNegro.style.backgroundColor = "#FFFFFF";
    aleatorios.style.backgroundColor = "#FFFFFF";
    borrador.style.backgroundColor = "#FFFFFF";
    borrar.style.backgroundColor = "#FFFFFF";
    tam = e.target.value;
    
    valor.innerText = tam.toString() + " X " + tam.toString();
    contenedorTam.appendChild(valor);

    // Ciclo para obtener las nuevas
    for (let i = 1; i <= tam * tam; i++) {
        const cuadrado = document.createElement("div");
        cuadrado.classList.add("cuadrado");
        cuadrado.style.width = (480 / tam) + "px";
        cuadrado.style.height = (480 / tam) + "px";
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

        // Eleccion de colores aleatorios
        aleatorios.addEventListener("click", (e) => {
            e.target.style.backgroundColor = "#2C2B2B";
            activarNegro.style.backgroundColor = "#FFFFFF";
            borrador.style.background = "#FFFFFF";
            borrar.style.backgroundColor = "#FFFFFF";
            cuadrado.addEventListener(accion, (e) => {
                r = Math.floor(Math.random() * 256);
                g = Math.floor(Math.random() * 256);
                b = Math.floor(Math.random() * 256);
                e.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
            });
        });

        // Eleccion de borrador
        borrador.addEventListener("click", (e) => {
            e.target.style.backgroundColor = "#2C2B2B";
            activarNegro.style.backgroundColor = "#FFFFFF";
            aleatorios.style.backgroundColor = "#FFFFFF";
            borrar.style.backgroundColor = "#FFFFFF"
            cuadrado.addEventListener(accion, (e) => {
                e.target.style.backgroundColor = "#FFFFFF";
            });
        });

        // Borrar Todo
        borrar.addEventListener("click", (e) => {
            cuadrado.style.backgroundColor = "#FFFFFF";
            activarNegro.style.backgroundColor = "#FFFFFF";
            aleatorios.style.backgroundColor = "#FFFFFF";
            borrador.style.backgroundColor = "#FFFFFF";
            e.target.style.backgroundColor = "#2C2B2B";
            cuadrado.addEventListener(accion, (e) => {
                e.target.style.backgroundColor = "#FFFFFF";
            });
        });
    }
});