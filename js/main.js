const productos = 
    {nombre : `camiseta`, precio: 34543, cantidadDisponible: 5}

console.log(productos)



let a = productos.nombre

let cambio = productos.nombre = `zapatillas`


console.log(productos)

productos.categoria = `calzado`
console.log(productos)

delete productos.cantidadDisponible
console.log(productos)
