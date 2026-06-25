import leia from 'readline-sync'

console.log("----jogo de trabalho----")
let nome = leia.question("digite seu nome: ");

console.log("você quer começar o jogo?")

let resposta = leia.keyInSelect(["sim","não"]);
let salario = 100
let dinheiro =  0;
let energia = 3;
let maxenergia = 3;
let gastoEnergia = 1
let dia = 0;
let cursoPgm = false
let cursoEng = false


if (resposta === 0){
    console.log("você começou o jogo!");
    console.log("----MENU----");
    console.log("dinheiro: "+ dinheiro  );
    console.log("energia: " + energia + "/"+ maxenergia);
    console.log("")

    

  while (true) {
    console.log("\nDinheiro: R$" + dinheiro);
    console.log("energia: "+ energia + "/" + maxenergia);
    console.log("salario: "+ salario);
    console.log("dias: "+ dia)


    let menu = leia.keyInSelect(["trabalhar", "loja","descansar","empregos","academia(+energia)","cursos"],"menu");

    if (menu === 0) {
        if(energia >= gastoEnergia ){
        dia++;
        dinheiro += salario;
        energia -= gastoEnergia;
        console.log("energia: "+ energia);
        console.log("Você trabalhou e ganhou R$"+ salario);
        }
        else{
            console.log("você não conseguiu trabalhar")}
    }

    else if (menu === 1) {
        let compra = leia.keyInSelect(["sofa(R$200)", "cama(R$300)"],"loja");

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
    if (energia < maxenergia) {
        energia += 1;
        dia++;
        console.log("Você descansou.");
    } else {
        console.log("Energia já está no máximo.");
    }
}
else if (menu === 3){
    let empregos = leia.keyInSelect(["repositor","taxi","estagiario(programação)","pedreiro","engenharia"],"empregos")
    if(empregos === 0){
        salario = 250;
        gastoEnergia = 2;
        console.log("você agora é um repositor!");
        console.log("agora você recebe o salario de: " + salario);
    }
    else if (empregos === 1){
        salario = 300;
        gastoEnergia = 2;
        console.log("você agora é um taxi!");
        console.log("agora você recebe o salario de: "+ salario)

    }
    else if (empregos === 2){

        if(dinheiro >= 1000 && cursoPgm === true){
            gastoEnergia = 2;
            salario = 650;
            console.log("você agora trabalha num estágio dev");
            console.log("você agora recebe o salário de: "+ salario);
        }
        else{
            console.log("você precisa de R$1000 para conseguir este emprego");
            console.log("você precisa do curso de programador (R$600)");
        }


    }
    else if(empregos === 3){
        gastoEnergia = 3;
        salario = 500;
        console.log("você agora é um pedreiro!");
        console.log("você agora recebe o salário de: "+ salario);
    }else if(empregos === 4){
        if (cursoEng === true){
        
        gastoEnergia = 2;
        salario = 650;
        console.log("você é engenheiro");
        console.log("você agora recebe o salario de: " + salario)
        }
        else {
            console.log("você precisa do curso de engenharia!")
        }

    }
    else if (empregos === -1){
        console.log("você desistiu de procurar um trabalho!");
    }
}
else if (menu ===4 ){
    console.log("você deseja fazer a diária na academia?")
    console.log("benefícios: +1 energia por dia pagado");
    console.log("custo: R$150,00")
    let resposta1 = leia.keyInSelect(["sim","não"]);
    if(resposta1 === 0  && dinheiro >= 150){
        dia++;
        dinheiro -= 150;
        maxenergia +=1;
        console.log("você fez academia")
        console.log("energia maxima agora: "+ maxenergia)
    }
    else if(resposta1 === 0 && dinheiro <150){
        console.log("você não tem dinheiro suficiente")
    }
    else{
        console.log("você não quis fazer academia")
    }

} else if(menu === 5){
    console.log("você deseja fazer algum curso?")
    let curso = leia.keyInSelect(["sim","não"]);
    if (curso === 0){
        let cursos = leia.keyInSelect(["programação(R$600)","engenharia(R$550)"]);

        if (cursos === 0){
            
            if (dinheiro >= 600){
                dinheiro -= 600
                console.log("você fez curso!")
                console.log("você liberou o cargo de dev.programador!")
                cursoPgm = true
            }
            else if (dinheiro < 600){
                console.log("dinheiro insuficiente");
            }
        }
        else if (cursos === 1){
            if(dinheiro >= 550){
                dinheiro -= 550
                console.log("você fez curso!")
                console.log("você liberou o cargo de Engenheiro!")
                cursoEng = true
            }
            else if (dinheiro < 550){
                console.log("dinheiro insuficiente")
            }
        }
        
    }    
    else{
        console.log("você desistiu de fazer o curso")
    }
    }

    else if (menu === -1) {
        console.log("Jogo encerrando...");
        break;
    }
}
}








