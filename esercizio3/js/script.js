// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.




for (var i = 0; i <=0; i++) {
  var invitatiFesta = ['Rossi', 'Verdi', 'Bianchi', 'Neri'];
  var utente = prompt('Inserisci il tuo nome');
  if (utente != invitatiFesta){
    utente = 'Non sei tra gli invitati';
  } else {
    utente = 'Puoi partecipare';
  }
}

document.getElementById('festa').innerHTML = utente;
