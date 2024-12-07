document.addEventListener("DOMContentLoaded", function () {
    const meteoro = document.querySelector('.meteoro');
    var volcan = document.getElementById('volcan');
    var volcan2 = document.getElementById('volcan2');
    var pirotecniaContainer = document.getElementById('pirotecniaContainer');
    var pirotecniaContainer2 = document.getElementById('pirotecniaContainer2');

    volcan.addEventListener("click",mostrarPirotecnia);
    volcan2.addEventListener("click",mostrarPirotecnia2);

    meteoro.addEventListener('animationend', () => {
        meteoro.addEventListener('click', () => {
            meteoro.src = './rb_45732.png'; 
        });
    });
    
    function mostrarPirotecnia(){
        pirotecniaContainer.classList.remove('esconde');
    }
    function mostrarPirotecnia2(){
        pirotecniaContainer2.classList.remove('esconde');
    }

    window.cambiarDiaNoche = function cambiarDiaNoche() {
        const cielo = document.querySelector('.cielo');
        const flecha = document.querySelector('.flecha');
        flecha.classList.toggle('dia2');
        cielo.classList.toggle('noche');
        cielo.classList.toggle('dia');
    }
});