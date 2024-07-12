console.log("Tienda online de frutos secos")

const productosYPrecios = {
    1: { nombre: "ALMENDRAS EN CASCARA", precio: 2500 },
    2: { nombre: "ALMENDRAS ENTERAS", precio: 8000 },
    3: { nombre: "ALMENDRAS PARTIDAS", precio: 7000 },
    4: { nombre: "NUECES MARIPOSA", precio: 8500 },
    5: { nombre: "NUECES CUARTO", precio: 7000 }
};

let seleccionados = [];
let seguirComprando = true;

while (Comprar) {
    let mensaje = "Favor ingresar el nombre del producto que deseas comprar";
    for (let === in productosYPrecios) {
    }
}
mensaje += "0. Muchas gracias por tu compra\n";
mensaje += "6. Estos son nuestros productos\n";
mensaje += "7. Productos en stock\n";
mensaje += "8. Productos en oferta";

let mensajeDeBienvenida = "Bienvenid@"

let opcion = parseInt(prompt("¡Hola!, favor ingresar el nombre del producto que deseas comprar(ALMENDRAS EN CASCARA($2.500), ALMENDRAS ENTERAS($8.000), ALMENDRAS PARTIDAS($7.000), NUECES MARIPOSA($8.500), NUECES CUARTO($7.000)"))

if (opcion === 0) {
    alert("Muchas gracias por tu compra");
} else if (opcion === 6) {
    let mensaje = "Estos son nuestros productos\n\nALMENDRAS EN CASCARA($2.500)\nALMENDRAS ENTERAS($8.000)\n ALMENDRAS PARTIDAS($7.000)\nNUECES MARIPOSA($8.500)\nNUECES CUARTO($7.000)";
} else if (opcion === 7) {
    let mensaje = "Productos en stock:\n\nALMENDRAS ENTERAS($8.000)\nNUECES MARIPOSA($8.500)";
} else if (opcion === 8) {
    let mensaje = "Productos en oferta:\n\nNUECES CUARTO($7.000)"
}




