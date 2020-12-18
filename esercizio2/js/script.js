// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

var numeri = [];

for(var i = 0; i < 6; i++) {
  numeri = parseInt(prompt('Inserisci un numero'));
  if (numeri%2 != 0) {
    console.log(numeri);
    document.getElementById('risultato').innerHTML += numeri;
  }
}
