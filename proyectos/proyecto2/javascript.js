let publicaciones = [];
let paginaActual = 1;
const publicacionesPorPagina = 6;

function mostrarPublicaciones() {
  const totalPaginas = Math.ceil(publicaciones.length / publicacionesPorPagina);
  const inicio = (paginaActual - 1) * publicacionesPorPagina;
  const fin = inicio + publicacionesPorPagina;
  const publicacionesPagina = publicaciones.slice(inicio, fin);

  const contenedor = document.getElementById("contenido");
  let textogrupo = "";

  publicacionesPagina.forEach(pub => {
    textogrupo += `
      <div class="publicaciones__item">
        <h3 class="publicaciones__titulo">${pub.titulo}</h3>
        <img class="publicaciones__imagen" src="${pub.imagen}">
        <p class="publicaciones__resumen">${pub.resumen}</p>
      </div>
    `;
  });

  contenedor.innerHTML = textogrupo;

  document.getElementById("indicadorPagina").textContent = `Página ${paginaActual}/${totalPaginas}`;

  const btnPrimeraPagina = document.getElementById("btnPrimeraPagina");
  const btnAnterior = document.getElementById("btnAnterior");
  const btnSiguiente = document.getElementById("btnSiguiente");

  btnPrimeraPagina.classList.toggle("paginacion__btn--disabled", paginaActual === 1);
  btnAnterior.classList.toggle("paginacion__btn--disabled", paginaActual === 1);
  btnSiguiente.classList.toggle("paginacion__btn--disabled", paginaActual >= totalPaginas);
}

function iniciarEventos() {
  document.getElementById("btnPrimeraPagina").addEventListener("click", () => {
    if (paginaActual > 1) {
      paginaActual = 1;
      mostrarPublicaciones();
    }
  });

  document.getElementById("btnAnterior").addEventListener("click", () => {
    if (paginaActual > 1) {
      paginaActual--;
      mostrarPublicaciones();
    }
  });

  document.getElementById("btnSiguiente").addEventListener("click", () => {
    const totalPaginas = Math.ceil(publicaciones.length / publicacionesPorPagina);
    if (paginaActual < totalPaginas) {
      paginaActual++;
      mostrarPublicaciones();
    }
  });
}

// Carga JSON externo
fetch('github.json')
  .then(response => response.json())
  .then(data => {
    publicaciones = data;
    mostrarPublicaciones();
    iniciarEventos();
  })
  .catch(error => {
  document.getElementById("contenido").innerHTML = `
    <div class="publicaciones__item">
      <h3 class="publicaciones__titulo">Error</h3>
      <p class="publicaciones__resumen">No se pudieron cargar las publicaciones.</p>
    </div>
  `;
});
