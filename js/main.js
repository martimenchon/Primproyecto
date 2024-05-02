let nombreProducto = "200g de chocolate";
let precioUnitario = 500;
let cantidadDeseada = prompt("Ingrese la cantidad de producto que desea comprar")

function sumarProducto (precio, cantidad){
    let totalGastado = precio * cantidad;
    return totalGastado
}

let totalCompra = sumarProducto(precioUnitario,cantidadDeseada);
console.log(`La cantidad total gastada es de $ ${totalCompra}`);

if(cantidadDeseada >= 5){
    alert("Se le aplicara un descuento del 10%")
    let descuento = (totalCompra * 90)/100
    alert(`El costo total de su compra sera ${descuento}`);

}else{
    alert("No compro la cantidad sufiente de producto para recibir el descuento")
    alert(`El costo total de su compra sera ${costoTotal}`);
}


alert("Gracias por su compra")


