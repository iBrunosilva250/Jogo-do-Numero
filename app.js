alert('Boas vindas ao jogo do número secreto');
let númeroMaximo = 3000;
let númeroSecreto = parseInt(Math.random() * númeroMaximo + 1);
console.log(númeroSecreto);
let chute; 
let Tentativas = 1;

// enquanto  chute não for igual ao n.s.
while (chute != númeroSecreto) {
    chute = prompt( `Escolha um número entre 1 e ${númeroMaximo} `); 
    // se chute for igual ao numero secreto
    if (chute == númeroSecreto) {
        break;
    } else {
        if (chute > númeroSecreto) {
            alert( `O número secreto é menor que ${chute}`);
        } else {
            alert( `O número secreto é maior que ${chute}`);
        }
        //Tentativas = Tentativas + 1;
        Tentativas++;
    }
}

let palavraTentativa = Tentativas > 1 ? 'Tentativas' : 'Tentativa';
alert(`Isso ai! Você acertou o número Secreto ${númeroSecreto} com ${Tentativas} ${palavraTentativa}.`);

//if (Tentativas > 1) { 
//   alert(`Isso ai! Você acertou o número Secreto ${númeroSecreto} com ${Tentativas} Tentativas.`);
//}  else { 
//   alert(`Isso ai! Você acertou o número Secreto ${númeroSecreto} com ${Tentativas} Tentativa.`);
//}



