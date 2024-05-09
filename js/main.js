const productos = ["bananas","pomelos","sandia","frutillas","arandanos"]

function listaproductos (Array) {
    for (let i = 0; i < Array.length; i++) {
        console.log(`Producto ${i+1}: ${Array[i]}`);
    }
    return Array
}

console.log(listaproductos(productos));

console.log("Venta de productos");
productos.pop()
console.log("La nueva lista es:");
console.log(listaproductos(productos));

alert("Gracias por su compra")


