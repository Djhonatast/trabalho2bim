let inpn1 = document.querySelector("#inpn1");
let inpn2 = document.querySelector("#inpn2");
let inpn3 = document.querySelector("#inpn3");
let btverify = document.querySelector("#btverify");
let h3result = document.querySelector("#h3result");

function triangulos() {
    let n1 = Number(inpn1.value);
    let n2 = Number(inpn2.value);
    let n3 = Number(inpn3.value);
triangulo.className = "";
    if (n1 < n2 + n3 && n2 < n1 + n3 && n3 < n1 + n2) {
        if (n1 === n2 && n2 === n3) {
            h3result.textContent = "Triângulo Equilátero"
            triangulo.classList.add("equilatero");
        } else if (n1 === n2 || n2 === n3 || n1 === n3) {
            h3result.textContent = "Triângulo Isósceles";
            triangulo.classList.add("isosceles");
        } else {
            h3result.textContent = "Triângulo Escaleno";
            triangulo.classList.add("escaleno");
        }
    } else {
        h3result.innerHTML = "N&atilde;o &eacute; um tri&acirc;ngulo"
    }
}


btverify.onclick = function () {
    triangulos()
}





let inpimc1 = document.querySelector("#inpimc1");
let inpimc2 = document.querySelector("#inpimc2");
let btcalcule = document.querySelector("#btcalcule");
let h3exibir = document.querySelector("#h3exibir")

function imc() {
    let imc1 = Number(inpimc1.value);
    let imc2 = Number(inpimc2.value);
    let imc = imc1 / (imc2 * imc2);
    if (imc < 18.5) {
        h3exibir.innerHTML = "Abaixo do peso"

    } else if (imc <= 24.9) {
        h3exibir.innerHTML = "Peso normal"
    } else if (imc <= 29.9) {
        h3exibir.innerHTML = "Sobrepeso"
    } else if (imc <= 34.9) {
        h3exibir.innerHTML = "Obesidade grau 1"
    } else if (imc <= 39.9) {
        h3exibir.innerHTML = "Obesidade grau 2"
    } else {
        h3exibir.innerHTML = "Obesidade grau 3"
    }
}

btcalcule.onclick = function () {
    imc();
}







let inpano = document.querySelector("#inpano");
let inptabela = document.querySelector("#inptabela");
let btimposto = document.querySelector("#btimposto");
let h3imposto = document.querySelector("#h3imposto");

function imposto() {
    let ano = Number(inpano.value);
    let tabela = Number(inptabela.value);
    if (ano < 1990) {
        h3imposto.innerHTML = (tabela / 100).toFixed(2) + " Reais"
    } else if (ano >= 1990) {
        h3imposto.innerHTML = ((tabela * 1.5) / 100).toFixed(2) + " Reais"
    }

}

btimposto.onclick = function () {
    imposto();
}






let inpsal = document.querySelector("#inpsal")
let inpcargo = document.querySelector("#inpcargo")
let btsalario = document.querySelector("#btsalario");
let h3novosal = document.querySelector("#h3novosal");

function aumento() {
    sal = Number(inpsal.value);

    let percentual;
    let cargo = inpcargo.value

    if (cargo === 'gerente') {
        percentual = 0.10;
    } else if (cargo === 'engenheiro') {
        percentual = 0.20;
    } else if (cargo === 'técnico' || cargo === 'tecnico') {
        percentual = 0.30;
    } else {
        percentual = 0.40;
    }
    let aumento = sal * percentual;
    let novosal = sal + aumento;
    h3novosal.textContent = "Salário antigo: R$ " + sal.toFixed(2) +
        " | Novo salário: R$ " + novosal.toFixed(2) +
        " | Aumento: R$ " + (novosal - sal)
}
btsalario.onclick = function () {
    aumento()
}




let inpsaldo = document.querySelector("#inpsaldo");
let btpercentual = document.querySelector("#btpercentual");
let h3credito = document.querySelector("#h3credito");

function credito() {
    saldo = Number(inpsaldo.value);
    if (saldo > 0 && saldo < 201) {
        h3credito.innerHTML = "Voc&ecirc; n&atildeo tem cr&eacute;dito liberado"
    }
    if (saldo > 200 && saldo < 401) {
        let valorcred = saldo * 0.20
        h3credito.innerHTML = "Voc&ecirc;  tem " + valorcred.toFixed(2) + "R$ de cr&eacute;dito liberado" + "<br> Seu saldo m&eacute;dio &eacute;: " + saldo + "<br> A porcentagem de cr&eacute;dito liberada foi de: 20% "
    }
    if (saldo > 400 && saldo < 601) {
        let valorcred = saldo * 0.30
        h3credito.innerHTML = "Voc&ecirc;  tem " + valorcred.toFixed(2) + "R$ de cr&eacute;dito liberado" + "<br> Seu saldo m&eacute;dio &eacute;: " + saldo + "<br> A porcentagem de cr&eacute;dito liberada foi de: 30% "
    } else if (saldo > 600) {
        let valorcred = saldo * 0.40
        h3credito.innerHTML = "Voc&ecirc;  tem " + valorcred.toFixed(2) + "R$ de cr&eacute;dito liberado" + "<br> Seu saldo m&eacute;dio &eacute;: " + saldo + "<br> A porcentagem de cr&eacute;dito liberada foi de: 40% "
    }
}

btpercentual.onclick = function () {
    credito()
}





let inplanche = document.querySelector("#inplanche");
let inpquant = document.querySelector("#inpquant");
let btpedir = document.querySelector("#btpedir");
let h3pedido = document.querySelector("#h3pedido");

function pedido() {
    quantia = Number(inpquant.value);
    lanche = inplanche.value.toLowerCase();
    let valor;

    if (lanche === 'cachorro quente') {
        valor = 11.00
    }
    else if (lanche === 'bauru') {
        valor = 8.50
    }
    else if (lanche === 'misto quente') {
        valor = 8.00
    }
    else if (lanche === 'hamburguer') {
        valor = 9.00
    }
    else if (lanche === 'cheeseburguer') {
        valor = 10.00
    }
    else if (lanche === 'refrigerante') {
        valor = 4.50
    }

    let pedidos = quantia * valor

    h3pedido.innerHTML = "O valor do seu pedido de " + lanche + " &eacute; de " + pedidos + "R$"
}

btpedir.onclick = function () {
    pedido();
}






let inpvalprod = document.querySelector("#inpvalprod");
let opcoes = document.querySelector("#opcoes");
let btvenda = document.querySelector("#btvenda");
let h3sistema = document.querySelector("#h3sistema");

function pagar() {
    valprod = Number(inpvalprod.value)
    let valorfinal = 0;
    let escolha = opcoes.value
    if (escolha === "dinheiro") {
        valorfinal = valprod * 0.90;
        h3sistema.innerHTML = "O valor final a pagar é de R$ " + valorfinal.toFixed(2);
    } else if (escolha === "credito") {
        valorfinal = valprod * 0.85;
        h3sistema.innerHTML = "O valor final a pagar é de R$ " + valorfinal.toFixed(2);
    } else if (escolha === "vezes") {
        valorfinal = valprod / 2;
        h3sistema.innerHTML = "O valor final a pagar é duas vezes de R$ " + valorfinal.toFixed(2) + " sem juros";
    } else if (escolha === "porcento") {
        valorfinal = (valprod * 1.10) / 2
        h3sistema.innerHTML = "O valor final a pagar é duas vezes de R$ " + valorfinal.toFixed(2) + " com juros de 10%";
    }


}

btvenda.onclick = function () {
    pagar();
}




let inphora = document.querySelector("#inphora");
let nivel = document.querySelector("#nivel");
let bthoraaula = document.querySelector("#bthoraaula")
let h3hraula = document.querySelector("#h3hraula");

function pagamento() {
    let hora = Number(inphora.value);
    let nvl = nivel.value;
    let valnivel = 0;
    let sal;

    if (nvl === "1") {
        valnivel = 12.00
        sal = valnivel * hora * 4.5;
        h3hraula.innerHTML = "o salário é de R$" + sal.toFixed(2)
    } else if (nvl === "2") {
        valnivel = 17.00

        sal = valnivel * hora * 4.5;
        h3hraula.innerHTML = "o salário é de R$" + sal.toFixed(2)
    } else if (nvl === "3") {
        valnivel = 25.00

        sal = valnivel * hora * 4.5;
        h3hraula.innerHTML = "o salário é de R$" + sal.toFixed(2)
    } else {
        h3hraula.textContet = "Insira corretamente as informações"
    }
}

bthoraaula.onclick = function () {
    pagamento();
}