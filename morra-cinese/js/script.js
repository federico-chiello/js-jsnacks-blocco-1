// ISTRUZIONI
// Realizziamo il gioco della morra cinese in JavaScript. Vince chi totalizza per primo 4 punti.

// Inseriamo le variabili
var utente;
var computer;
var punteggioUtente = 0;
var punteggioComputer = 0;

// Utilizziamo la condizione for, così stabiliamo la fine del ciclo. Stabiliamo che si giocheranno tre partite.
for (var i = 0; i < 3; i++) {
  // il computer genera numeri random compresi tra 0 e 2.
  computer = generaNumeroRandom(0, 2);

  if (computer == 0){
    computer = 'carta';
  } else if (computer == 1) {
    computer = 'forbici';
  } else {
    computer = 'sasso';
  }

  console.log('Il computer ha scelto '+ computer);

  // il giocatore  inserisce una delle scelte (carta, forbici o sasso) per giocare contro il computer.
  utente = prompt('Inserisci carta, forbici o sasso:')

  if ((utente == 'forbici' && computer == 'carta') || (utente == 'carta' && computer == 'sasso') || (utente == 'sasso' && computer == 'forbici') ) {
    console.log('Il giocatore ha scelto ' + utente);
    console.log('Ha vinto il giocatore!');
    // se il giocatore vince incrementiamo il suo punteggio.
    punteggioUtente++;
  } else if (utente == computer) {
    console.log('Il giocatore ha scelto ' + utente);
    // se vengono scelte le stesse opzioni, allora ci sarà pareggio.
    console.log('Parità!');
  } else {
    console.log('Il giocatore ha scelto ' + utente);
    console.log('Ha vinto il computer!');
    // se il computer vince incrementiamo il suo punteggio.
    punteggioComputer++;
  }
}


document.getElementById('giocatore-uno').innerHTML = 'Il giocatore ha totalizzato il punteggio di ' + punteggioUtente;
document.getElementById('giocatore-due').innerHTML = 'Il computer ha totalizzato il punteggio di ' + punteggioComputer;

// Funzioni riutilizzabili
function generaNumeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
