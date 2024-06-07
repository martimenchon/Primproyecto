// Declarar un array con nombres de productos y recorrerlo;

// Por cada producto, crear una etiqueta <h2> que contenga el nombre, y agregarla al body.

// Se recomienda recorrer el array con for of. 

// En cada repetición se crea un elemento con createElement, se modifica su innerHTML, y se lo agrega con appendChild.

const producto = document.getElementById("contenedor")
console.log(producto)

for (let index = 0; index < catalogo.length; index++) {
    const element = catalogo[index];
    console.log(element);
      const contenedor_i = document.createElement(`div`)
      
      contenedor_i.classList.add('titulocss')

        contenedor_i.innerHTML = `<h2 clas="textoh2"> ${element.title} </h2>
        <p> ${element.price} US$</p>
        ` 

         producto.appendChild(contenedor_i)
}


