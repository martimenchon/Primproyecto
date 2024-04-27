let nombreProducto = "sillas";
let precioUnitario = 5000;
let cantidadDeseada = prompt("Ingrese la cantidad de producto que desea comprar")
let costoTotal = precioUnitario * cantidadDeseada


if(cantidadDeseada >= 5){
    alert("Se le aplicara un descuento del 10%")
    let descuento = (costoTotal * 10)/100
    alert(`El costo total de su compra sera ${descuento}`);

}else{
    alert("No compro la cantidad sufiente de producto para recibir el descuento")
    alert(`El costo total de su compra sera ${costoTotal}`);
}


alert("Gracias por su compra")


