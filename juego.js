let numeroSecreto= 0;
let intentos = 0;
let listaNumerosSorteados=[];
let numeroMaximo=10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}

function verificarIntento(){
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  console.log(intentos);
   if (numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p', `Acertaste el número en ${intentos}  ${(intentos===1)? 'vez': 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
   }
   else{
    //El usuario no acertó.
    if(numeroDeUsuario>numeroSecreto){
        asignarTextoElemento('p', 'El número es menor');
    }
    else{
        asignarTextoElemento('p', 'El número es mayor');
    }
    intentos++;
    limpiarCaja();
   }
   return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(params) {
   numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   //si ya sorteamos todos los numeros
   if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');

}else{

   }


  //si el numero generado está en la lista hacer una acción u otra
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
}

function condicionesIniciales(){
        asignarTextoElemento('h1', 'Juego del numero secreto');
        asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
        numeroSecreto = generarNumeroSecreto();
        intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja()
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
     //Inicia los intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego  
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();











/* 
let numeroSorteados = [];

console.log(numeroSorteados);

numeroSorteados.push(5);
1
console.log(numeroSorteados);


numeroSorteados.push(8);
2
console.log(numeroSorteados);


console.log(numeroSorteados.length);

console.log(numeroSorteados[0]);


numeroSorteados.push(3);
3
console.log(numeroSorteados);


console.log(numeroSorteados.length);

console.log(numeroSorteados[numeroSorteados-1]);

console.log(numeroSorteados[numeroSorteados.length-1]);

numeroSorteados.push(9);
4
console.log(numeroSorteados[numeroSorteados.length-1]);

*/