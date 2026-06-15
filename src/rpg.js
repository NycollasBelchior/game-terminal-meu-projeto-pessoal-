import leia from 'readline-sync'

console.log("----jogo de trabalho----")
let nome = leia.question("digite seu nome: ");

console.log("você quer começar o jogo?")
    
let resposta = leia.keyInSelect(["sim","não"])+1;
let dinheiro =  0;

if (resposta === 1){
    console.log("você começou o jogo!");
    console.log("----MENU----");
    console.log("------------");
    console.log("dinheiro: "+ dinheiro  );
    console.log("------------");
    
    
  while (true) {
    console.log("\nDinheiro: R$" + dinheiro);

    let menu = leia.keyInSelect(["trabalhar", "loja", "sair"]);

    if (menu === 0) {
        dinheiro += 150;
        console.log("Você trabalhou e ganhou R$150!");
    }

    else if (menu === 1) {
        let compra = leia.keyInSelect(["sofa(R$200)", "cama(R$300)"]);

        if (compra === 0) {
            if (dinheiro >= 200) {
                dinheiro -= 200;
                console.log("Você comprou o sofá!");
            } else {
                console.log("Dinheiro insuficiente para o sofá!");
            }
        }

        else if (compra === 1) {
            if (dinheiro >= 300) {
                dinheiro -= 300;
                console.log("Você comprou a cama!");
            } else {
                console.log("Dinheiro insuficiente para a cama!");
            }
        }
    }

    else if (menu === 2) {
        console.log("Jogo encerrando...");
        break;
    }
}
}













