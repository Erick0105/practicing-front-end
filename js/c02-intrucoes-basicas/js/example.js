//? Primeiro a parte da mensagem de boas-vindas
var greeting = "Howdy ", name = "Molly", message = ", please check your order:";
var welcome = greeting + name + message;

//? Agora para armazenar detalhes sobre a placa
var sign = "Montague House", tiles = sign.length, subTotal = tiles * 5, shipping = 7;
var grandTotal = subTotal + shipping;

var el = document.getElementById("greeting");
el.textContent = welcome;

var elSign = document.getElementById("userSign");
elSign.textContent = sign;

var elTiles = document.getElementById("tiles");
elTiles.textContent = tiles;

var elSubTotal = document.getElementById("SubTotal");
elSubTotal.textContent = "$" + subTotal;

var elShipping = document.getElementById("shipping");
elShipping.textContent = shipping;

var elGrandTotal = document.getElementById("grandTotal");
elGrandTotal.textContent = grandTotal;