//? Assim como outras linguagéns essa possui operadores aritméticos

/*São:
//* Adição: + 
Adiciona um valor no outro
//* Subtração: -
Subtrai um valor do outro
//* Divisão: /
Divide um valor por outro
//* Módulo: %
Divide os valores e pega o resto
//* Multiplicação: *
Multiplica os valores
//* Incremento: ++ 
Adiciona 1 ao valor atual
//* Decremento: --
Subtrai 1 ao valor atual
*/

var subTotal = (13 + 1) * 5, shipping = 0.5 * (13 + 1);
var total = subTotal + shipping;

var elSub = document.getElementById('subTotal');
elSub.textContent = subTotal;

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;


