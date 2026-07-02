import leia from "readline-sync";

let jogador = {
 dinheiro : 0,
 salario : 100,
 energiaG : 1,
 energiamax : 1,
 energia : 1,
 empregoatual : "desempregado",
 dias : 0,
casas: [],
automoveis: [],

 cursos : {
    cursoPr : false,
    cursoEn : false 
}
}
//---------------------
// LOOP DO JOGO
//---------------------
while (true) {
    status();
    let menu = leia.keyInSelect(
        ["trabalhar", "descansar", "empregos", "treino", "cursos","loja"],
        "O que deseja? "
    );
    if (menu === 0) {
        trabalhar();
    } 
    else if (menu === 1) {
        descansar();
    } 
    else if (menu === 2) {
        empregos();
    } 
    else if (menu === 3) {
        treino();
    } 
    else if (menu === 4) {
        curso();
    }
    else if (menu === 5){
        menuL();
    } 
    else if (menu === -1) {
        console.log("Jogo encerrado");
        break;
    }
}
//---------------------
// FUNÇÕES
//---------------------
function status() {
    console.log("--------------------------");
    console.log("dias: " + jogador.dias);
    console.log("energia: " + jogador.energia + "/" + jogador.energiamax);
    console.log("dinheiro: " + jogador.dinheiro);
    console.log("salario: " + jogador.salario);
    console.log("emprego: " + jogador.empregoatual);
    console.log("casas: " + jogador.casas.join(" | "))
    console.log("automoveis: " + jogador.automoveis.join(" | "))
    console.log("--------------------------");
}
//---------------------
// AÇÕES
//---------------------
function trabalhar() {
    if (jogador.energia >= jogador.energiaG) {
        jogador.dinheiro += jogador.salario;
        jogador.energia -= jogador.energiaG;
        jogador.dias++;
        console.log("Você trabalhou e ganhou: R$" + jogador.salario);
    } else {
        console.log("Energia insuficiente!");
    }
}
function descansar() {
    if (jogador.energia < jogador.energiamax) {
        jogador.energia++;
        console.log("Você descansou!");
        jogador.dias++;  
    } else {
        console.log("Energia já está no máximo!");
    }   
}
function empregos() {
    let emprego = leia.keyInSelect([
        "(R$150) pedreiro",
        "(R$200) garçom",
        "(R$650) programador",
        "(R$700) engenheiro"
    ]);
    if (emprego === 0) {
        jogador.salario = 150;
        jogador.energiaG = 2;
        jogador.empregoatual = "pedreiro";
        console.log("Você agora trabalha como pedreiro!");
    } 
    else if (emprego === 1) {
        if (jogador.energiamax >= 2) {
            jogador.salario = 200;
            jogador.energiaG = 2;
            jogador.empregoatual = "garçom";
            console.log("Você agora trabalha como garçom!");
        } else {
            console.log("Precisa de 2 energia máxima!");
        }
    } 
    else if (emprego === 2) {
        if (jogador.cursos.cursoPr && jogador.energiamax >= 3) {
            jogador.salario = 650;
            jogador.energiaG = 3;
            jogador.empregoatual = "programador";
            console.log("Você agora trabalha como programador!");
        } else if (!jogador.cursos.cursoPr) {
            console.log("Precisa do curso de programação!");
        } else {
            console.log("Precisa de 3 de energia máxima!");
        }
    } 
    else if (emprego === 3) {
        if (jogador.cursos.cursoEn && jogador.energiamax >= 3) {
            jogador.salario = 700;
            jogador.energiaG = 3;
            jogador.empregoatual = "engenheiro";
            console.log("Você agora trabalha como engenheiro!");
        } else if (!jogador.cursos.cursoEn) {
            console.log("Precisa do curso de engenharia!");
        } else {
            console.log("Precisa de 3 de energia máxima!");
        }
    }
    jogador.dias++;
  
}
function treino() {
    console.log("Deseja treinar na academia por R$150? (+1 energia máxima)");
    let resp = leia.keyInSelect(["sim", "não"]);
    if (resp === 0) {
        if (jogador.dinheiro >= 150) {
            jogador.dinheiro -= 150;
            jogador.energiamax++;
            jogador.energia = jogador.energiamax;

            console.log("Você treinou!");
            console.log("Energia máxima: " + jogador.energiamax);
        } else {
            console.log("Dinheiro insuficiente!");
        }
    } else {
        console.log("Você desistiu de treinar!");
    }
    jogador.dias++; 
}
function curso() {
    let esc = leia.keyInSelect([
        "(R$600) programação",
        "(R$550) engenharia"
    ]);
    if (esc === 0) {
        if (jogador.dinheiro >= 600) {
            jogador.dinheiro -= 600;
            jogador.cursos.cursoPr = true;
            console.log("Curso de programação concluído!");
        } else {
            console.log("Dinheiro insuficiente!");
        }
    } 
    else if (esc === 1) {
        if (jogador.dinheiro >= 550) {
            jogador.dinheiro -= 550;
            jogador.cursos.cursoEn = true;
            console.log("Curso de engenharia concluído!");
        } else {
            console.log("Dinheiro insuficiente!");
        }
    } 
    else {
        console.log("Você desistiu do curso!");
    }
    jogador.dias++; 
}
function menuL(){
    console.log("============================")
    console.log("===== bem vindo a loja =====")
    console.log("============================")
let opcoes = ["casas","automóveis","eletronicos"]
let esc = leia.keyInSelect(opcoes)
if (esc ===0){
    let escolhacasa = leia.keyInSelect([
        "casa pequena - 15000",
        "casa media - 22500",
        "casa grande - 35000"
    ])
    if (escolhacasa === 0){
    if (jogador.dinheiro >= 15000){
        jogador.dinheiro -= 15000
        jogador.casas.push("casa pequena")
    }
    else{
        console.log("dinheiro insuficiente")
    }
}
    else if(escolhacasa === 1){
        if(jogador.dinheiro >= 22500){
            jogador.dinheiro -=22500
            jogador.casas.push("casa media")
        }
        else{
            console.log("dinheiro insuficiente")
        }
    }
    else if(escolhacasa===2){
        if (jogador.dinheiro >= 35000){
            jogador.dinheiro -=35000;
            jogador.casas.push("casa grande")
        }
        else{
        console.log("dinheiro insuficiente")
    }
    }
}
if (esc === 1){
    let escolhaautomoveis = leia.keyInSelect([
        "bicicleta - 500",
        "moto - 5000",
        "carro ruim - 8000",
        "carro medio - 12000",
        "carro bom - 20000",
        "carro moderno - 35000"
    ])
if (escolhaautomoveis === 0){
    if (jogador.dinheiro >= 500){
        jogador.dinheiro-=500;
        jogador.automoveis.push("bicicleta")
    }
    else{
        console.log("dinheiro insuficiente")
    }
}
else if(escolhaautomoveis === 1){
    if (jogador.dinheiro >= 5000){
        jogador.dinheiro -= 5000;
        jogador.automoveis.push("moto")
    }
    else{
        console.log("dinheiro insuficiente")
    }
}
else if (escolhaautomoveis === 2){
    if(jogador.dinheiro >= 8000){
        jogador.dinheiro -= 8000;
        jogador.automoveis.push("carro ruim")
    }
    else{
        console.log("dinheiro insuficiente")
    }
}
else if (escolhaautomoveis === 3){
    if(jogador.dinheiro >= 12000){
        jogador.dinheiro -= 12000;
        jogador.automoveis.push("carro medio")
    }
    else{
        console.log("dinheiro insuficiente")
    }
}
else if (escolhaautomoveis === 4){
    if(jogador.dinheiro >= 20000){
        jogador.dinheiro -= 20000;
        jogador.automoveis.push("carro bom")
    }
    else{
        console.log("dinheiro insuficiente")
    }
}
else if (escolhaautomoveis === 5){
    if(jogador.dinheiro >= 35000){
        jogador.dinheiro -= 35000;
        jogador.automoveis.push("carro moderno")
    }
    else{
        console.log("dinheiro insuficiente")
    }
}
}
}