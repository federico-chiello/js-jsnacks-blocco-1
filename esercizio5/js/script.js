// Istruzioni:
// l’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.


// Variabili
var primaParola = prompt('Inserisci una parola:');
var secondaParola = prompt('Inserisci un\'altra parola:');
var letteraIniziale = primaParola.charAt(0).toUpperCase();
var restoParola = primaParola.substring(1).toLowerCase();
var primaLettera = secondaParola.charAt(0).toUpperCase();
var restoLettere = secondaParola.substring(1).toLowerCase();
primaParola = letteraIniziale +  restoParola;
secondaParola = primaLettera +  restoLettere;
var risultatoUno = primaParola + ' ' + secondaParola;
var risultatoDue = secondaParola + ' ' + primaParola;

// Condizione
// stampare prima la parola corta, poi quella lunga.
if (primaParola.length > secondaParola.length) {
  // console.log(risultatoDue);
  document.getElementById('risultato').innerHTML = risultatoDue;
} else if (secondaParola.length > primaParola.length) {
  // console.log(risultatoUno);
  document.getElementById('risultato').innerHTML = risultatoUno;
}
