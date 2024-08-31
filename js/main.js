console.log("Tienda online de frutos secos");

//Listado de productos

const productosYPrecios = [
    { id: 1, nombre: "ALMENDRAS EN CASCARA", precio: 2500, stock: 1 },
    { id: 2, nombre: "ALMENDRAS ENTERAS", precio: 8000, stock: 2 },
    { id: 3, nombre: "ALMENDRAS PARTIDAS", precio: 7000, stock: 2 },
    { id: 4, nombre: "NUECES MARIPOSA", precio: 8500, stock: 2 },
    { id: 5, nombre: "NUECES CUARTO", precio: 7000, stock: 0 },
];

//Muestra los productos y precios.

console.log(productosYPrecios.find(x => x.id === 2).precio);

let descripcionProductos = "";
// for (let producto of productosYPrecios) {
    productosYPrecios.forEach(producto => {
    descripcionProductos += `${producto.id}. ${producto.nombre} - Valor: ${producto.precio}\n`;
});

// Declaración de array vacío
let seleccionados = [];
let seguirComprando = true;

const mensajeDeBienvenida = "Bienvenid@";

while (seguirComprando) {
    let opcion = parseInt(prompt("¡Hola! Favor ingresar el número del producto que deseas comprar:\n" + descripcionProductos));
    let productoSeleccionado = productosYPrecios.find(x => x.id === opcion);

    if (productoSeleccionado && productoSeleccionado.stock > 0) {
        console.log("Has seleccionado: " + productoSeleccionado.nombre);
        seleccionados.push(productoSeleccionado);
        productoSeleccionado.stock--;
    } else {
        console.log("Producto no válido o sin stock");
    }

let continuar = parseInt(prompt("¿Quieres sumar otro producto?\n1. Sí\n2. No\n"));
    if (continuar !== 1) {
        seguirComprando = false;
    }
}
console.log("Tu carrito: ");
console.log(seleccionados);

let precioFinal = seleccionados.reduce((total, producto) => total + producto.precio, 0);
console.log("Precio final: " + precioFinal);

const boton = document.getElementById("btn-test");
if (boton) {
    boton.addEventListener("click", () => alert("Probaste el boton"));
} 

console.log(productosYPrecios);

let objDeProductos = {
    nombre: "Almendras en cascara",
    origen: "Nacional",
    formatos: "Envasados",
    precio: 2500
};

console.log("Objeto de productos");
console.log(objDeProductos)

function Producto(nombre, origen, formatos, precio){
    this.nombre = nombre;
    this.origen = origen;
    this.formatos = formatos;
    this.precio = precio;
}

const primerProducto = new Producto("Almendras en cascara", "Nacional", "Envasados", 2500);
const segundoProducto = new Producto("Almendras enteras", "Nacional", "Envasados", 8000);
const tercerProducto = new Producto("Almendras partidas", "Nacional", "Envasados", 7000);
const cuartoProducto = new Producto("Nueces mariposa", "Nacional", "Envasados", 8500);
const quintoProducto = new Producto("Nueces cuarto", "Nacional", "Envasados", 7000);

console.log(primerProducto);
console.log(segundoProducto);
console.log(tercerProducto);
console.log(cuartoProducto);
console.log(quintoProducto);

// Mostrar productosYPrecios
productosYPrecios.forEach(producto => console.log(producto));

//function de orden superior
function productoAgregado(producto, agregado) {
    console.log (`producto agregado a carrito ${producto}`);
}

//función de confirmación de producto
function 