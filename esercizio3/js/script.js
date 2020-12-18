// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


var i = 0;
var invitatiFesta = ['Rossi', 'Verdi', 'Bianchi', 'Neri'];
var utente = prompt('Inserisci il tuo nome');
var letteraIniziale = utente.charAt(0).toUpperCase();
var restoNome = utente.substring(1).toLowerCase();
utente = letteraIniziale + restoNome;
var esito = 'Non puoi partecipare';

for (i = 0; i < invitatiFesta.length; i++) {
  if (utente == invitatiFesta[i]){
    esito = 'Puoi partecipare';
  }
}

document.getElementById('festa').innerHTML = esito;
