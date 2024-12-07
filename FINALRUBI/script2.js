document.addEventListener("DOMContentLoaded", function() {
    var emilio = document.getElementById('emilio');
    var andrei = document.getElementById('andrei');
    var volcan = document.getElementById('volcan');
    var volcan2 = document.getElementById('volcan2');
    var nubeContainer = document.getElementById('nubeContainer');
    var nubeContainer2 = document.getElementById('nubeContainer2');
    var pirotecniaContainer = document.getElementById('pirotecniaContainer');
    var pirotecniaContainer2 = document.getElementById('pirotecniaContainer2');


    emilio.addEventListener("click", mostrarNube);
    andrei.addEventListener("click", mostrarNube2);
    volcan.addEventListener("click",mostrarPirotecnia);
    volcan2.addEventListener("click",mostrarPirotecnia2);



    function mostrarNube() {
        nubeContainer.classList.remove('esconde');
    }
    
    function mostrarNube2() {
        nubeContainer2.classList.remove('esconde');
    }
    function mostrarPirotecnia(){
        pirotecniaContainer.classList.remove('esconde');
    }
    function mostrarPirotecnia2(){
        pirotecniaContainer2.classList.remove('esconde');
    }


    window.cambiarDiaNoche = function cambiarDiaNoche() {
        const cielo = document.querySelector('.cielo');
        const flecha= document.querySelector('.flecha');
        flecha.classList.toggle('dia2');
        cielo.classList.toggle('noche');
        cielo.classList.toggle('dia');
    }
});