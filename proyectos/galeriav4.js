
const images = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
let startX = 0;
let endX = 0;

// Función para abrir el modal con la imagen seleccionada
function openModal(index) {
  modal.style.display = 'flex';
  modalImg.src = images[index].src;
  modalImg.alt = images[index].alt;
  currentIndex = index;
}

// Función para cerrar el modal
function closeModal() {
  modal.style.display = 'none';
}

// Función para mostrar la imagen anterior
function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openModal(currentIndex);
}

// Función para mostrar la imagen siguiente
function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  openModal(currentIndex);
}

// Detectar el gesto de deslizamiento (swipe)
function handleSwipe(start, end) {
  const swipeThreshold = 50; // Distancia mínima para un deslizamiento válido

  if (start - end > swipeThreshold) {
    showNextImage(); // Deslizar hacia la izquierda (siguiente imagen)
  } else if (end - start > swipeThreshold) {
    showPrevImage(); // Deslizar hacia la derecha (imagen anterior)
  }
}

// Eventos
images.forEach((image, index) => {
  image.addEventListener('click', () => openModal(index));
});

closeBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

// Detectar el inicio y fin del gesto táctil
modalImg.addEventListener('touchstart', (e) => {
  startX = e.changedTouches[0].screenX;
});

modalImg.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].screenX;
  handleSwipe(startX, endX);
});
