//Codigo  del boton de incremento:
// Definimos variables
let contador = 0;
let incremento = 1;
const maximo = 100;

const contadorSpan = document.getElementById('contador');
const incrementoBtn = document.getElementById('incrementoBtn');

// Función para manejar el incremento
incrementoBtn.addEventListener('click', () => {
  // Incrementar el contador
  contador += incremento;
  contadorSpan.textContent = contador;

  // Actualizar el incremento basado en el valor del contador
  if (contador % 5 === 0) {
    incremento++;
  }

  // Bloquear el botón si el contador llega al máximo
  if (contador >= maximo) {
    incrementoBtn.disabled = true;
    incrementoBtn.textContent = "Limite alcanzado";
  }
});

//Codigo de la caja de texto reactiva:
const cajaTexto = document.getElementById('cajaTexto');

// Evento que se dispara cuando la caja de texto pierde el foco (cuando el usuario deja de escribir)
cajaTexto.addEventListener('blur', () => {
  // Convertir el texto a mayúsculas si está en minúsculas
  cajaTexto.value = cajaTexto.value.toUpperCase();
});

//Codigo de la imagen que cambia:
// Referencia a la imagen
const imagen = document.getElementById('imagen');

// Ruta de las imágenes
const imagenOriginal = 'https://th.bing.com/th/id/OIP.hUaCDuWAqM2zqcHr0RpNqgHaE8?w=265&h=180&c=7&r=0&o=5&pid=1.7'; // Reemplaza con la ruta de la imagen original
const imagenCambio = 'https://th.bing.com/th/id/OIP.Dqil1iG-PPuTW92XP5YyIgHaGd?w=205&h=180&c=7&r=0&o=5&pid=1.7';   // Reemplaza con la ruta de la imagen al hacer hover

// Cambiar a la segunda imagen cuando el mouse está sobre ella
imagen.addEventListener('mouseover', () => {
  imagen.src = imagenCambio;
});

// Volver a la imagen original cuando el mouse sale de la imagen
imagen.addEventListener('mouseout', () => {
  imagen.src = imagenOriginal;
});

//Hoja de estilos:
// Variables para el elemento de texto y tamaño inicial
const texto = document.getElementById('texto');
const tamañoInicial = 16; // Tamaño base en px
let tamañoActual = tamañoInicial;

// Función para aumentar el tamaño del texto
document.getElementById('aumentar').addEventListener('click', () => {
  tamañoActual += 2;
  texto.style.fontSize = tamañoActual + 'px';
});

// Función para disminuir el tamaño del texto
document.getElementById('disminuir').addEventListener('click', () => {
  if (tamañoActual > tamañoInicial) {
    tamañoActual -= 2;
    texto.style.fontSize = tamañoActual + 'px';
  }
});