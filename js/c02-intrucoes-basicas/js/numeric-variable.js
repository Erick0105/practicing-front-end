/*1 - Variável:
servem para armazenar dados necessários temporariamente, e podem variar sempre que um script é executado

1.1 - Declaração:
tem que usar a palavra chave "var" e depois o nome da variável
Ex: var numero;
Pode até atribuir um valor a ela
Ex: numero = 5;

1.2 - Tipo de Dados:
Existe 3:
O tipo númerico, String e Boolean
*/

/*As 6 primeiras linhas são apenas para declaração e armazenamento valores números dentro de duas e no calcula o total */

/* 
var price; 
var quantity;
var total;
price = 5; // !contém o preço de uma letra
quantity = 14; // ! armezana a quantidade de letra 
total = price * quantity; // ! é o custo total
*/
//? O código de cima é o código bruto mas tem como abreviar/abreviar a declaração/criação de varáveis e irei mostrar como abaixo.

var price = 5, quantity = 14;
var total = price*quantity;
var el = document.getElementById("cost");
el.textContent = "$" + total;
/*Nas ultimas 2 linhas se pega 1 elementos pelo seu ID e o conteudo desses elementos é atualizado granvando o total no elemento*/