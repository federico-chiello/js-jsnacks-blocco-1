// ISTRUZIONI
// Occorre indovinare un numero casuale compreso tra 1 e 100, generato dal computer.
// Il giocatore ha a disposizione 4 tentativi. Quando sbaglia gli verrà detto se il numero da indovinare è più alto oppure più basso.
// Bonus: provate 3 livelli di complessità

// ***** Parte con il bonus *****
// Inserisco la variabile del livello di difficoltà da scegliere per indovinare il numero;
var livello = prompt('Scegli il livello di complessità: 1(facile); 2 (intermedio); 3(difficile)');

// Utilizzo la condizione switch per inserire i tre diversi casi (livelli) per giocare.
switch (livello) {
  // Livello 1 (facile): da 1 a 20
case "1":
var computer = generaNumeroRandom(1, 20);
alert('Inserisci un numero compreso tra 1 e 20, hai a disposizione 4 tentativi.');
 break;
  // Livello 2(intermedio): da 1 a 60
case "2":
var computer = generaNumeroRandom(1, 60);
alert('Inserisci un numero compreso tra 1 e 60, hai a disposizione 4 tentativi.');
 break;
  // Livello 3(difficile): da 1 a 100
case "3":
var computer = generaNumeroRandom(1, 100);
alert('Inserisci un numero compreso tra 1 e 100, hai a disposizione 4 tentativi.');
 break;
}
console.log('Il numero del computer è: ',computer);

var numeroIndovinato = false;
var numeriScelti = [];
for (var i = 0; i < 4 && numeroIndovinato == false; i++) {
  var giocatore = parseInt(prompt('Inserisci un numero, hai a disposizione 4 tentativi.'));
  numeriScelti.push(giocatore);
  if (giocatore > computer) {
    alert('Hai sbagliato! Il numero che devi indovinare è più basso.');
  } else if (giocatore < computer) {
    alert('Hai sbagliato! Il numero che devi indovinare è più alto.');
  } else {
    alert('Complimenti. Hai indovinato il numero!');
    numeroIndovinato = true;
  }
}
console.log('I numeri inseriti dall\'utente sono: ', numeriScelti);



// ***** Metodo senza bonus *****

// Inserisco le variabili
// var computer = generaNumeroRandom(1, 100);
// console.log(computer);
// var numeroIndovinato = false;
// var numeriScelti = [];


// Utilizzo la condizione for perché vengono dati 4 tentativi all'utente per poter indovinare il numero del computer.
// for (var i = 0; i < 4 && numeroIndovinato == false; i++) {
//   var giocatore = parseInt(prompt('Inserisci un numero compreso tra 1 e 100, hai a disposizione 4 tentativi.'));
//   numeriScelti.push(utente);
//   if (giocatore > computer) {
//     alert('Hai sbagliato! Il numero che devi indovinare è più basso.');
//   } else if (giocatore < computer) {
//     alert('Hai sbagliato! Il numero che devi indovinare è più alto.');
//   } else {
//     alert('Complimenti. Hai indovinato il numero!');
//     numeroIndovinato = true;
//   }
// }
//
// console.log('I numeri inseriti dall\'utente sono: ', numeriScelti);


// Funzioni riutilizzabili
function generaNumeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
