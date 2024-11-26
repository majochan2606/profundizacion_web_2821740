document.addEventListener('DOMContentLoaded', () => {
    const screens = document.querySelectorAll('.screen');
    const startBtn = document.getElementById('start-btn');
    const nextBtns = document.querySelectorAll('.next-btn');
    const backBtns = document.querySelectorAll('.back-btn');
  
    // Muestra una pantalla específica
    const showScreen = (index) => {
      screens.forEach((screen, i) => {
        screen.classList.toggle('active', i === index);
      });
    };
  
    // Evento para el botón "Comenzar"
    startBtn.addEventListener('click', () => {
      showScreen(1); // Mostrar el video 1
    });
  
    // Evento para botones "Siguiente"
    nextBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        showScreen(index + 2); // Mostrar la siguiente pantalla
      });
    });
  
    // Evento para botones "Regresar al Inicio"
    backBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        showScreen(0); // Mostrar la pantalla inicial
      });
    });
  });
  