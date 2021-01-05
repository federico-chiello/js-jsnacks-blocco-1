// ISTRUZIONI
// Realizziamo il gioco della morra cinese in JavaScript. Vince chi totalizza per primo 4 punti.

// Inseriamo le variabili
var alessandro;
var computer;
var punteggioAlessandro = 0;
var punteggioComputer = 0;

// Utilizziamo la condizione for, così stabiliamo la fine del ciclo. Stabiliamo che si giocheranno tre partite.
for (var i = 0; i < 3; i++) {
  // il giocatore di nome Riccardo genera numeri random compresi tra 0 e 2.
  computer = Math.floor(Math.random() * 3);

  if (computer == 0){
    computer = 'carta';
  } else if (computer == 1) {
    computer = 'forbici';
  } else {
    computer = 'sasso';
  }

  console.log('Il computer ha scelto '+ computer);

  // il giocatore Alessandro inserisce una delle scelte (carta, forbici o sasso) per giocare contro Riccardo.
  alessandro = prompt('Inserisci carta, forbici o sasso:')

  if ((alessandro == 'forbici' && computer == 'carta') || (alessandro == 'carta' && computer == 'sasso') || (alessandro == 'sasso' && computer == 'forbici') ) {
    console.log('Alessandro ha scelto ' + alessandro);
    console.log('Ha vinto Alessandro!');
    // se Alessandro vince incrementiamo il suo punteggio.
    punteggioAlessandro++;
  } else if (alessandro == computer) {
    console.log('Alessandro ha scelto ' + alessandro);
    // se vengono scelte le stesse opzioni, allora ci sarà pareggio.
    console.log('Parità!');
  } else {
    console.log('Alessandro ha scelto ' + alessandro);
    console.log('Ha vinto il computer!');
    // se il computer vince incrementiamo il suo punteggio.
    punteggioComputer++;
  }
}


document.getElementById('giocatore-uno').innerHTML = 'Alessandro ha totalizzato il punteggio di ' + punteggioAlessandro;
document.getElementById('giocatore-due').innerHTML = 'Il computer ha totalizzato il punteggio di ' + punteggioComputer;
