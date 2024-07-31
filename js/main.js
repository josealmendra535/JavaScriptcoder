console.log("Tienda online de frutos secos")

const productosYPrecios = [
    { id:1, nombre: "ALMENDRAS EN CASCARA", precio: 2500, stock: 1 },
    { id:2, nombre: "ALMENDRAS ENTERAS", precio: 8000, stock: 2 },
    { id:3, nombre: "ALMENDRAS PARTIDAS", precio: 7000, stock: 2 },
    { id:4, nombre: "NUECES MARIPOSA", precio: 8500, stock: 2 },
    { id:5, nombre: "NUECES CUARTO", precio: 7000, stock: 0 },
];

console.log(productosYPrecios.find(x => x.id === 2).precio);
let seleccionados = [];
let seguirComprando = true;
let Comprar = true;

let mensaje ="";
mensaje += "0. Muchas gracias por tu compra\n";
mensaje += "6. Estos son nuestros productos\n";
mensaje += "7. Productos en stock\n";
mensaje += "8. Productos en oferta";

let mensajeDeBienvenida = "Bienvenid@"
let descripcionProductos = "";

for (let i = 0; i < productosYPrecios.length; i++) {
    descripcionProductos+= productosYPrecios[i].id +" "+ productosYPrecios[i].nombre +" Valor:"+productosYPrecios[i].precio +"\n";
     //console.log(i+1 +" "+ productosYPrecios[i].nombre +"\n");
}
//console.log(descripcionProductos);

let opcion = parseInt(prompt("¡Hola!, favor ingresar el número del producto que deseas comprar: \n"+descripcionProductos))
console.log("Has elegido opcion " + opcion);

//sumar Carrito
seleccionados.push(opcion);

// Falta descontar stock 
let SeguirComprando = parseInt(prompt("Sumar otro producto? \n 1. Sí \n 2. No\n"));
if(SeguirComprando == 1){
    let opcion2 = parseInt(prompt("Ingresar el número del producto que deseas comprar: \n"+descripcionProductos))
    console.log("Has elegido opcion " + opcion2);
    seleccionados.push(opcion2);
}
console.log("Tu carrito: ");
console.log("Carrito de productos seleccionados " + seleccionados);
let precioFinal = 0;
for (let item of seleccionados) {
   //se buscar por el id del producto 
   //console.log(productosYPrecios.find(x => x.id === item).precio);
    precioFinal +=  productosYPrecios.find(x => x.id === item).precio;
    }
console.log("Tu precio Final: " + precioFinal);


const boton = document.getElementbyId("btn-test");

boton.addEventListener("click", () => alert("Probaste el botón"));

console.log(productos);



