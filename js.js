// Obtén la referencia a las opciones del menú
const inicioOption = document.getElementById('inicio');
const productosOption = document.getElementById('productos');
const contactoOption = document.getElementById('contacto');

// Obtén la referencia al botón de inicio
const startButton = document.getElementById('boton-iniciar');

// Obtén la referencia al elemento de contenido de texto
const contenidoElement = document.getElementById('contenido');

// Verifica si el navegador es compatible con la API de reconocimiento de voz y síntesis de voz
if ('webkitSpeechRecognition' in window && 'speechSynthesis' in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'es';

  let hasSpokenInicio = false; // Variable para controlar si el mensaje de inicio se ha reproducido
  let hasSpokenProductos = false; // Variable para controlar si el mensaje de productos se ha reproducido
  let hasSpokenContacto = false; // Variable para controlar si el mensaje de contacto se ha reproducido

  recognition.onresult = function(event) {
    const result = event.results[event.resultIndex];
    const transcript = result[0].transcript.toLowerCase();

    if (transcript.includes('inicio')) {
      // Realiza acciones para la opción "Inicio"
      console.log('Navegar al inicio');
      inicioOption.style.color = 'red'; // Cambia el color del texto a rojo
      if (!hasSpokenInicio) {
        speak('Estás en la sección de inicio.');
        speak(contenidoElement.textContent);
        hasSpokenInicio = true;
        hasSpokenProductos = false;
        hasSpokenContacto = false;
      }
      // Aquí puedes redirigir al usuario a la sección de inicio o realizar otras acciones relacionadas.
    } else if (transcript.includes('productos')) {
      // Realiza acciones para la opción "Productos"
      console.log('Navegar a productos');
      productosOption.style.color = 'red'; // Cambia el color del texto a rojo
      if (!hasSpokenProductos) {
        speak('Estás en la sección de productos.');
        speak(contenidoElement.textContent);
        hasSpokenInicio = false;
        hasSpokenProductos = true;
        hasSpokenContacto = false;
      }
      // Aquí puedes redirigir al usuario a la sección de productos o realizar otras acciones relacionadas.
    } else if (transcript.includes('contacto')) {
      // Realiza acciones para la opción "Contacto"
      console.log('Navegar a contacto');
      contactoOption.style.color = 'red'; // Cambia el color del texto a rojo
      if (!hasSpokenContacto) {
        speak('Estás en la sección de contacto.');
        speak(contenidoElement.textContent);
        hasSpokenInicio = false;
        hasSpokenProductos = false;
        hasSpokenContacto = true;
      }
      // Aquí puedes redirigir al usuario a la sección de contacto o realizar otras acciones relacionadas.
    }
  };

  inicioOption.addEventListener('click', function() {
    // Aquí puedes agregar la lógica para ir a la sección de inicio
    console.log('Opción de inicio seleccionada');
    inicioOption.style.color = 'red'; // Cambia el color del texto a rojo
    if (!hasSpokenInicio) {
      speak('Estás en la sección de inicio.');
      speak(contenidoElement.textContent);
      hasSpokenInicio = true;
      hasSpokenProductos = false;
      hasSpokenContacto = false;
    }
  });

  productosOption.addEventListener('click', function() {
    // Aquí puedes agregar la lógica para ir a la sección de productos
    console.log('Opción de productos seleccionada');
    productosOption.style.color = 'red'; // Cambia el color del texto a rojo
    if (!hasSpokenProductos) {
      speak('Estás en la sección de productos.');
      speak(contenidoElement.textContent);
      hasSpokenInicio = false;
      hasSpokenProductos = true;
      hasSpokenContacto = false;
    }
  });

  contactoOption.addEventListener('click', function() {
    // Aquí puedes agregar la lógica para ir a la sección de contacto
    console.log('Opción de contacto seleccionada');
    contactoOption.style.color = 'red'; // Cambia el color del texto a rojo
    if (!hasSpokenContacto) {
      speak('Estás en la sección de contacto.');
      speak(contenidoElement.textContent);
      hasSpokenInicio = false;
      hasSpokenProductos = false;
      hasSpokenContacto = true;
    }
  });

  startButton.addEventListener('click', function() {
    recognition.start();
  });

} else {
  // El navegador no es compatible con la API de reconocimiento de voz o síntesis de voz
  console.log('El navegador no es compatible con la API de reconocimiento de voz o síntesis de voz');
}

// Función para reproducir un mensaje de texto utilizando la síntesis de voz
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}
