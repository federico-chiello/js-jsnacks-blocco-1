// Istruzioni:
// l’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

// Variabili
var primoNumero = parseFloat(prompt('Inserisci un numero:'));
var secondoNumero = parseFloat(prompt('Inserisci un altro numero:'));
var numeroMaggiore = 'Numeri uguali';

// Condizioni
// Deve essere stampato il maggiore tra i due numeri.
if (primoNumero > secondoNumero) {
  numeroMaggiore = 'Il numero maggiore è: ' + primoNumero;
  // console.log(numeroMaggiore);
} else if(secondoNumero > primoNumero) {
  numeroMaggiore = 'Il numero maggiore è: ' + secondoNumero;
  // console.log(numeroMaggiore);
}

document.getElementById('risultato').innerHTML += numeroMaggiore;
