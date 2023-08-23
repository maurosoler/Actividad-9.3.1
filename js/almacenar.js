const inputText = document.getElementById('item');
const botonAgregar = document.getElementById('agregar');
const displayText = document.getElementById('contenedor');
const items = localStorage.getItem('items');
const listado = ;
if (items) {
    for(let i = 0; i < listado.length;i++){
        displayText.innerHTML += `<li>${listado[i]}</li>`;
    }
}

botonAgregar.addEventListener('click', function(){
    const valorInput = inputText.value;

    if(valorInput !== ''){
        displayText.innerHTML += `<li>${valorInput}</li>`;
        listado.push(valorInput);
        localStorage.setItem('items',listado);
    }
    inputText.value ='';
});