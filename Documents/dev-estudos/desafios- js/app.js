//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let numeroSecreto = 8();

function exibirTextoNaTela(tag,texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'jogo do numero secreto');
exibirTextoNaTela('p','Escolha um numero entre 1 a 10');


function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
      exibirTextoNaTela('h1, acertou !')
    }

}

function gerarNumeroAleatorio(){
   return parseInt( Math.random()*10+1);
} 