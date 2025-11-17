const boton_formulario = document.getElementById('boton-formulario');

boton_formulario.addEventListener("click", () => {
  const url_imagen = document.getElementById('URL-imagen').value.trim();

  if (url_imagen === "") {
    alert("Debes ingresar una URL de imagen");
    return; 
  }

  añadir_imagen(); 
});

function añadir_imagen() {
  const nuevo_articulo = document.createElement('article');
  const titulo_imagen = document.getElementById('titulo-imagen').value;
  const descripcion_imagen = document.getElementById('descripcion-imagen').value;
  const fecha_input = document.getElementById('fecha-imagen').value;
  const area_imagen = document.getElementById('area-imagen').value;
  const url_imagen = document.getElementById('URL-imagen').value; 

  
  const fecha_formateada = new Date(fecha_input).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  nuevo_articulo.innerHTML = `
    <img src="${url_imagen}" alt="imagen">
    <h3>${titulo_imagen}</h3>
    <p>${descripcion_imagen}</p>
    <footer>${fecha_formateada} • ${area_imagen}</footer>
  `;

  nuevo_articulo.classList.add('tarjeta');

  const cuerpo_pagina = document.getElementById('contenedor-de-tarjeta');
  cuerpo_pagina.appendChild(nuevo_articulo);

  const formulario_imagen = document.getElementById('formulario-imagen');
  formulario_imagen.reset();
}
