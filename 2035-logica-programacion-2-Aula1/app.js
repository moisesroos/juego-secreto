let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function valorDelUsuario(){
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
   
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `¡Acertaste! El número es ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario < numeroSecreto){
        asignarTextoElemento('p','El número secreto es mayor');
    }  else {
            
            asignarTextoElemento('p','El número secreto es menor');
    }
    intentos++;
    limpiarCaja();
}


    return;
}
function limpiarCaja() {
   document.querySelector('#numeroUsuario').value ='';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;  
    //si el numero generado esta en la lista  
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
    // si el numero generado 
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }  else {
        listaNumerosSorteados.push(numeroGenerado); 
        return numeroGenerado;
    }
}
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p' , `Indica  un  número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el numero aleatorio
    //Inicializar el número de intentos.
    condicionesIniciales();
    //Deshabilitar el boton de nuevo Juego.
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}
condicionesIniciales();