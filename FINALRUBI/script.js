document.addEventListener("DOMContentLoaded", function() {
    var emilio = document.getElementById('emilio');
    var andrei = document.getElementById('andrei');
    var nubeContainer = document.getElementById('nubeContainer');
    var nubeContainer2 = document.getElementById('nubeContainer2');


    emilio.addEventListener("click", mostrarNube);
    andrei.addEventListener("click", mostrarNube2);


    function mostrarNube() {
        nubeContainer.classList.remove('esconde');
    }
    
    function mostrarNube2() {
        nubeContainer2.classList.remove('esconde');
    }

    window.cambiarDiaNoche = function cambiarDiaNoche() {
        const cielo = document.querySelector('.cielo');
        const flecha= document.querySelector('.flecha');
        flecha.classList.toggle('dia2');
        cielo.classList.toggle('noche');
        cielo.classList.toggle('dia');
    }
});
