let intentosUsuario = 0;
let numeroRandom = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function condicionesIniciales() {
    document.getElementById('intentar').removeAttribute('disabled');
    asignarTextoElemento('h1', 'Juego del numero secreto :)');
    asignarTextoElemento('p', 'Selecciona un numero del 1 al 10')
    intentosUsuario = 1 ;
    numeroRandom = generarNumeroRandom();
}

function desactivarIntentar () {
    document.getElementById('intentar').setAttribute('disabled', 'true');
}

function activarNuevoJuego() {
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function limpiarCampo () {
    let valorTF = document.getElementById('usuarioTF');
    valorTF.value = '';
}

function generarNumeroRandom() {
    let numeroRandom = Math.floor(Math.random() * numeroMaximo) + 1;

    if(numerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Se han sorteado todos los numeros');
        desactivarIntentar();
    }
    else if(numerosSorteados.includes(numeroRandom)){
        return generarNumeroRandom();
    } else {
        numerosSorteados.push(numeroRandom);
        return numeroRandom;
    }
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('usuarioTF').value);
    
    if(numeroUsuario != numeroRandom){
        (numeroUsuario < numeroRandom) ? asignarTextoElemento('p', 'El numero es mayor') : asignarTextoElemento('p', 'El numero es menor');
        limpiarCampo();
        intentosUsuario++;
    } else if(numeroUsuario === numeroRandom) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentosUsuario} ${(intentosUsuario === 1) ? 'intento' : 'intentos'}`);
        limpiarCampo();
        desactivarIntentar();
        activarNuevoJuego();
    }

    if(intentosUsuario > 2){
        asignarTextoElemento('p', 'Perdiste :(');
        desactivarIntentar();
        activarNuevoJuego();
    }
    return;
}

function reiniciarJuego() {
    limpiarCampo();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();