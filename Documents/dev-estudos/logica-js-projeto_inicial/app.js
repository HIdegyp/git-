alert ('boas vindas ao jogo numero secreto' );
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo+1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao numeroSecreto
while(chute != numeroSecreto ){
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);
    //dando uma condição será feita se for verdadeira
    if (numeroSecreto == chute){
        break;
    } else {
    if (chute > numeroSecreto){
    alert(`Ò numero secreto é menor que ${chute}`);
    } else {
    alert(`Ò numeroSecreto é maior que ${chute}`);
 }
 //tentativas = tentativas +1;
 tentativas++;
}
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Ìsso ai ! Você descobriu o número secreto ${numeroSecreto} com  ${tentativas} ${palavraTentativa}.`);
/*
if(tentativas > 1){
alert(`Isso ai! você descrobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
}else{
    alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}

*/ 