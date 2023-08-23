const inputText = document.getElementById('item');
const botonAgregar = document.getElementById('agregar');
const displayText = document.getElementById('contenedor');
const items = localStorage.getItem('items');

botonAgregar.addEventListener('click', function(){
    const valorInput = inputText.value;

    if(valorInput !== ''){
        displayText.innerHTML += `<li>${valorInput}</li>`;
        localStorage.setItem('items',valorInput);
    }
    inputText.value ='';
});