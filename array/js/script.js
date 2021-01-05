// ISTRUZIONI
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// Variabili
var numeri = [];
var somma = 0;

// utilizziamo la condizione while perché deve ciclare finché la condizione risulta vera. Nel nostro esempio la condizione diventa falsa quando la somma dei numeri inseriti è >= 50.
while (somma < 50){ // condizione iniziale
  var numeroUtente = parseInt(prompt('Inserisci un numero:'));
  numeri.push(numeroUtente);
  somma = somma + numeroUtente;
  if (somma >= 50 ) { // la condizione iniziale non è più rispettata 
    alert('La somma dei numeri inseriti è maggiore o uguale a 50');
  }
}

console.log(numeri);
console.log(somma);
