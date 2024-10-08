let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'none';

    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display = 'none';

    let btnMascotaJugador = document.getElementById('btn-mascota')
    btnMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let btnFuego = document.getElementById('btn-fuego');
    btnFuego.addEventListener('click', function ataqueFuego() {
        ataqueJugador = 'FUEGO';
        ataqueAleatorioEnemigo();
    });
    let btnAgua = document.getElementById('btn-agua');
    btnAgua.addEventListener('click', function ataqueAgua() {
        ataqueJugador = 'AGUA';
        ataqueAleatorioEnemigo();
    });
    let btnTierra = document.getElementById('btn-tierra');
    btnTierra.addEventListener('click', function ataqueTierra() {
        ataqueJugador = 'TIERRA';
        ataqueAleatorioEnemigo();
    });

    let btnReiniciar = document.getElementById('btn-reiniciar');
    btnReiniciar.addEventListener('click', function reiniciarJuego() {
        let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
        sectionSeleccionarAtaque.style.display = 'none';
        location.reload();
    });
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
    sectionSeleccionarMascota.style.display = 'none';

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'block';

    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let inputLangostelvis = document.getElementById('langostelvis');
    let inputTucapalma = document.getElementById('tucapalma');
    let inputPydos = document.getElementById('pydos');

    let spanMascotaJugador = document.getElementById('mascota-jugador');

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge';
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo';
    }else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya';
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = 'Langostelvis';
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = 'Tucapalma';
    }else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = 'Pydos';
    }else{
        alert("Selecciona alguna opcion");
    }

    seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1, 6);
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge';
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo';
    } else if (mascotaAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya';
    } else if (mascotaAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = 'Langostelvis';
    } else if (mascotaAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = 'Tucapalma';
    } else if (mascotaAleatorio == 6) {
        spanMascotaEnemigo.innerHTML = 'Pydos';
    }
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 6);
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate();
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador');
    let spanVidasEnemigo = document.getElementById('vidas-enemigo');

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE 🟡");
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE ✅");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE ✅");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE ✅");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else {
        crearMensaje("PERDISTE ❌");
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    }

    revisarVidas();
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITADES GANASTES");
    } else if (vidasJugador == 0) {
        crearMensajeFinal("LO SIENTO PERDISTES");
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes');

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' +  ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + ' - ' + resultado;

    sectionMensajes.appendChild(parrafo);
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes');

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal;

    sectionMensajes.appendChild(parrafo);

    let btnFuego = document.getElementById('btn-fuego');
    btnFuego.disabled = true;
    let btnAgua = document.getElementById('btn-agua');
    btnAgua.disabled = true;
    let btnTierra = document.getElementById('btn-tierra');
    btnTierra.disabled = true;

    let sectionSeleccionarMascota = document.getElementById('reiniciar');
    sectionSeleccionarMascota.style.display = 'block';
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', iniciarJuego)