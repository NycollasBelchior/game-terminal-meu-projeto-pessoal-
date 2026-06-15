import leia from 'readline-sync'

console.log("----jogo de trabalho----")
let nome = leia.question("digite seu nome: ");

console.log("você quer começar o jogo?")
    
let resposta = leia.keyInSelect(["sim","não"]);
let dinheiro =  0;
let energia = 3;
let energiaMax = 3;

if (resposta === 0){
    console.log("você começou o jogo!");
    console.log("----MENU----");
    console.log("------------");
    console.log("dinheiro: "+ dinheiro  );
    console.log("------------");
    console.log("descanso: " + energia)
    
    
  while (true) {
    console.log("\nDinheiro: R$" + dinheiro);

    let menu = leia.keyInSelect(["trabalhar", "loja","descansar", "sair"]);

    if (menu === 0) {
        if(energia > 0){
        dinheiro += 150;
        energia -= 1;
        console.log("energia: "+ energia)
        console.log("Você trabalhou e ganhou R$150!");
        }
        else{
            console.log("você não conseguiu trabalhar")}
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
    if (energia < 3) {
        energia += 1;
        console.log("Você descansou.");
        console.log("Energia: " + energia);
    } else {
        console.log("Energia já está no máximo.");
        console.log("Energia: " + energia);
    }
}

    else if (menu === 3) {
        console.log("Jogo encerrando...");
        break;
    }
}
}













