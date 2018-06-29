'use strict';

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log('> ' + getRandomNumber(100));

var button = document.querySelector('.boton-prueba');
var consoleNumber = getRandomNumber(100);
console.log(consoleNumber);

var espacioFeedback = document.querySelector(".espacio-feedback");

function showNumber (){
  var userNumber = document.querySelector('#user-number');
  var userNumberValue = userNumber.value; 
  var userNum = parseInt(userNumberValue);
  if(userNum < consoleNumber){
    espacioFeedback.innerHTML = "Demasiado bajo";
  } else if(userNum > consoleNumber){
    espacioFeedback.innerHTML = "Demasiado alto";
  } else if(userNum === consoleNumber){
    espacioFeedback.innerHTML = "¡Has ganado, campeona!";
  }
}

button.addEventListener('click', showNumber);


