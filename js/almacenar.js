const inputText = document.getElementById('item');
const botonAgregar = document.getElementById('agregar');
const displayText = document.getElementById('contenedor');
const botonLimpiar = document.getElementById('limpiar');

const itemsGuardados = localStorage.getItem('items');
const listado = itemsGuardados ? JSON.parse(itemsGuardados) : [];

listado.forEach((item) => {
  displayText.innerHTML += `<li>${item}</li>`;
});

botonAgregar.addEventListener('click', function(){
  const valorInput = inputText.value;

  if(valorInput !== ''){
    displayText.innerHTML += `<li>${valorInput}</li>`;
    listado.push(valorInput);
    localStorage.setItem('items', JSON.stringify(listado));
  }
  inputText.value = '';
});

botonLimpiar.addEventListener('click', function(){
  displayText.innerHTML = '';
  localStorage.removeItem('items');
});