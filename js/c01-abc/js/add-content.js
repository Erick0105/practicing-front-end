/*1 - O que é um Script?
Script é praticamente uma série de intruções que possuem um passo a passo para o computador

Em um script é bom detalhar os objetivos e dividir uma série de tarefas para serem realizadas

2- Intruções:
A instrução é um comando individual que o computador deve seguir
SEMPRE TERMINAR COM ; 
Quando as instruções são colocadas em chaves ficam conhecidas como blocos de códigos que normalmente agrupam várias instruções.

3 - Objetos 
Dentro de programação cada coisa física no mundo pode ser representada como um objeto, 
e para criar um modelo funcional de um objeto cada objeto deve possuir suas:
- Propriedades;
- Eventos;
- Métodos.

3.1 - Propriedades:
Normalmente são as características de um objeto onde cada propriedade tem um nome e um valor.

3.2 - Eventos:
São meio que uma maneira do computador alertar e dizer: "Ei, isso acabou de acontecer"
Quando algum evento específico acaba acontecendo, o programador pode usar ele para disparar uma seção específica do código

3.3 - Métodos:
São perguntas ou instruções resumidamente, onde podem conter diversos instruções


O Objeto 'document' é muito util até porque ele representa uma página HTML, assim podendo acessar e alterar o contúdo que usuários vêm na página 
 Exemplo:*/
var today = new Date(); // Cria um novo objeto Date
var hourNow = today.getHours(); // Verifica a hora atual
var greeting;

// exibe a mensagem apropriada de acordo com a hora atual
if (hourNow > 18) {
    greeting = "Good evening!";
} else if(hourNow > 12) {
    greeting = "Good afternoon!";
} else if(hourNow > 0){
    greeting = "Good Moorning!";
} else{
    greeting = "Welcome!";
}

document.write("<h3>" + greeting + "</h3>")

/*Como usar Objetos e seus métodos:
Ex: document.write("Boa Noite!")

- document é o Objeto
- O "." é o operador de membro, ou seja você consegue acessar os membros/método de um objeto utilizando o ponto
- write é um método do Objeto document e dentro dos () é onde fica os parâmetros deste método */