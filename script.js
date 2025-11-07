// Lista de imágenes que se mostrarán como fondo
const imagenes = [
  'images/fondo1.jpg',
  'images/fondo2.jpg',
  'images/fondo3.jpg'
];

let indice = 0;
const hero = document.querySelector('.hero');

// Función para cambiar el fondo con efecto de desvanecimiento
function cambiarFondo() {
  hero.classList.add('fade'); // inicia el fade
  setTimeout(() => {
    hero.style.backgroundImage = `url('${imagenes[indice]}')`;
    hero.classList.remove('fade'); // termina el fade
    indice = (indice + 1) % imagenes.length;
  }, 1000); // el cambio ocurre después de 1 segundo
}

// Inicializa el fondo y comienza el carrusel
hero.style.backgroundImage = `url('${imagenes[indice]}')`;
setInterval(cambiarFondo, 5000); // cambia cada 5 segundos
