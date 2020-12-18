// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while

// // **** Metodo con for
// // var sommaDeiNumeri = 0;
// //
// // for (var i = 0; i < 5; i++) {
// //   var numero = parseInt(prompt('Inserisci un numero'));
// //   console.log(numero);
// //   sommaDeiNumeri = sommaDeiNumeri + numero;
// // }
// //
// // console.log(sommaDeiNumeri);
//
// document.getElementById('sommma-numeri').innerHTML = sommaDeiNumeri

// **** Metodo con while
var i = 0;
var sommaDeiNumeri = 0;

while(i < 5) {
  var numero = parseInt(prompt('Inserisci un numero'));
  console.log(numero);
  sommaDeiNumeri = sommaDeiNumeri + numero;
  i++;
}

console.log(sommaDeiNumeri);

document.getElementById('sommma-numeri').innerHTML = sommaDeiNumeri
