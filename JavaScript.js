let btnNumeros = document.getElementsByClassName("botao-numero");
let visor = document.getElementById('visor');
let btnOperador = document.getElementsByClassName("botao-operador");

let operacao = null;
let valor1 = null;

for (let botao of btnNumeros) {
    botao.addEventListener('click', clique_numero);

}
function clique_numero(event) {


    if (visor.innerHTML === '0' || isNaN(visor.innerHTML))
        visor.innerHTML = event.target.innerHTML;
    else
        visor.innerHTML = visor.innerHTML + event.target.innerHTML;
}





let botaoC = document.getElementById("botao-C");
botaoC.addEventListener('click', limpar_Visor);

function limpar_Visor(event) {
    visor.innerHTML = "0";
    valor1 = null;
    operacao = null;
}

for (let botao of btnOperador) {
    botao.addEventListener("click", clique_operador);
}
function clique_operador(event) {
    if (isNaN(visor.innerHTML) === false) {
        if (valor1 === null) {
            valor1 = Number(visor.innerHTML);
        }
        else {
            valor1 = realiza_operacao(valor1, operacao, Number(visor.innerHTML)
            );

        }
    }

    operacao = event.target.innerHTML;
    visor.innerHTML = operacao;
}

let botao_igual = document.getElementById(`botao-igual`);

botao_igual.addEventListener("click", calcula_resultado);

function calcula_resultado(event) {
    if (
        valor1 != null &&
        operacao != null &&
        isNaN(visor.innerHTML) === false) {

        visor.innerHTML = realiza_operacao(valor1, operacao,
            Number(visor.innerHTML));
        valor1 = null;
        operacao = null;
    }
}
function realiza_operacao(valor1, operacao, valor2) {
    if (operacao === "+") {
        return valor1 + valor2;
    }
    else if (operacao === "-") {
        return valor1 - valor2;
    }
    else if (operacao === "*") {
        return valor1 * valor2;
    }
    else if (operacao === "/") {
        return valor1 / valor2;
    }
}



let body = document.getElementsByTagName("body")[0];
body.addEventListener("keydown", pressionou_tecla);
function pressionou_tecla(event) {
    if (event.key === "+") {
        document.getElementById("botao-adicao").click();
    }
    else if (event.key === "-") {
        document.getElementById("botao-subtracao").click();
    }
    else if (event.key === "*") {
        document.getElementById("botao-multiplicacao").click();
    }
    else if (event.key === "/") {
        document.getElementById("botao-divisao").click();
    }
}