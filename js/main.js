'use strict';

function getRandomNumber(max){
  return Math.ceil(Math.random() * max);
}
var button = document.querySelector('.boton-prueba');
var consoleNumber = getRandomNumber(100);
var espacioFeedback = document.querySelector(".espacio-feedback");
console.log(consoleNumber);
var contadorIntentos = document.querySelector (".contador-intentos");
var contador = 0;

function sumContador(){
  contadorIntentos.innerHTML = contador;
}

function showNumber(){
  var userNumber = document.querySelector('#user-number');
  var userNumberValue = parseInt(userNumber.value); 
  if(userNumberValue < consoleNumber){
    espacioFeedback.innerHTML = "Demasiado bajo";
  } else if(userNumberValue > consoleNumber){
    espacioFeedback.innerHTML = "Demasiado alto";
  } else if(userNumberValue === consoleNumber){
    espacioFeedback.innerHTML = "¡Has ganado, campeona!";
  }
  contador += 1;
  sumContador();
}

button.addEventListener('click', showNumber);


