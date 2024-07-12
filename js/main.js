console.log("Tienda online de frutos secos")

let mensajeDeBienvenida = "Bienvenid@"

let opcion = parseInt(prompt("¡Hola!, favor ingresar el nombre del producto que deseas comprar(ALMENDRAS EN CASCARA($2.500), ALMENDRAS ENTERAS($8.000), ALMENDRAS PARTIDAS($7.000), NUECES MARIPOSA($8.500), NUECES CUARTO($7.000)"))

if (opcion === 0) {
    alert("Muchas gracias");
} else if (opcion === 1) {
    let mensaje = "Estos son nuestros productos\n\nALMENDRAS EN CASCARA($2.500)\nALMENDRAS ENTERAS($8.000)\n ALMENDRAS PARTIDAS($7.000)\nNUECES MARIPOSA($8.500)\nNUECES CUARTO($7.000)";
} else if (opcion === 2) {
    let mensaje = "Productos en stock:\n\nALMENDRAS ENTERAS($8.000)\nNUECES MARIPOSA($8.500)";
} else if (opcion === 3) {
    let mensaje = "Productos en oferta:\n\nNUECES CUARTO($7.000)"
}

const precioProductos = {
    1: { nombre: "ALMENDRAS EN CASCARA", precio: 2500 },
    2: { nombre: "ALMENDRAS ENTERAS", precio: 8000 },
    3: { nombre: "ALMENDRAS PARTIDAS", precio: 7000 },
    4: { nombre: "NUECES MARIPOSA", precio: 8500 },
    5: { nombre: "NUECES CUARTO", precio: 7000 }
};

let seleccionados = [];
let seguirComprando = true


