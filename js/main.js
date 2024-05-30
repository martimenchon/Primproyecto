// Al cargar la página, queremos que el precio inicial de "$500" cambie a "$450" utilizando las propiedades getElementById() e innerText.

// También modificar los estilos del título mediante querySelector.


const precio = document.getElementById(`PrecioProducto`)
const producto = document.querySelector(`#nombreProducto`);


//precio.textContent = `Precio = $450`
precio.innerText = `Precio = $450`


producto.style.color = "white"
producto.style.backgroundColor = "black"
producto.style.fontFamily = 'Lucida Sans'