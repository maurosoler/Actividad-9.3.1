const inputText = document.getElementById('item');
const botonAgregar = document.getElementById('agregar');
const displayText = document.getElementById('contenedor');
const items = localStorage.getItem('items');
const listado = [];
const botonLimpiar = document.getElementById("limpiar")

botonAgregar.addEventListener('click', function(){
    const valorInput = inputText.value;

    if(valorInput !== ''){
        displayText.innerHTML += `<li>${valorInput}</li>`;
        listado.push(valorInput);
        localStorage.setItem('items',listado);
    }
    inputText.value ='';
});

botonLimpiar.addEventListener('click', function(){
    displayText.innerHTML= "";
    localStorage.removeItem("items")
   })