const inputText = document.getElementById('item');
const botonAgregar = document.getElementById('agregar');
const displayText = document.getElementById('contenedor');

botonAgregar.addEventListener('click', function(){
    const valorInput = inputText.value;

    if(valorInput !== ''){
        displayText.innerHTML += `<p>${valorInput}</p>`;
    }
});