let resultado = document.getElementById("resultado");
let limpar = document.getElementById("limpar");

let operador, numSoma1, numSoma2, resultSoma, numSub1, numSub2, resultSub, numMult1, numMult2, resultMult, numDiv1, numDiv2, resultDiv

document.getElementById("numero-7").addEventListener("click", function(){
    resultado.value = Number(resultado.value + document.getElementById("numero-7").innerHTML);
});

document.getElementById("numero-8").addEventListener("click", function(){
    resultado.value = Number(resultado.value + document.getElementById("numero-8").innerHTML);
});

document.getElementById("numero-9").addEventListener("click", function(){
    resultado.value = Number(resultado.value + document.getElementById("numero-9").innerHTML);
});

document.getElementById("numero-4").addEventListener("click", function(){
    resultado.value = Number(resultado.value + document.getElementById("numero-4").innerHTML);
});

document.getElementById("numero-5").addEventListener("click", function(){
    resultado.value = Number(resultado.value + document.getElementById("numero-5").innerHTML);
});

document.getElementById("numero-6").addEventListener("click", function(){
    resultado.value = Number(resultado.value + document.getElementById("numero-6").innerHTML);
});

document.getElementById("numero-1").addEventListener("click", function(){
    resultado.value = Number(resultado.value + document.getElementById("numero-1").innerHTML);
});

document.getElementById("numero-2").addEventListener("click", function(){
    resultado.value = Number(resultado.value + document.getElementById("numero-2").innerHTML);
});

document.getElementById("numero-3").addEventListener("click", function(){
    resultado.value = Number(resultado.value + document.getElementById("numero-3").innerHTML);
});

document.getElementById("numero-0").addEventListener("click", function(){
    resultado.value = Number(resultado.value + document.getElementById("numero-0").innerHTML);
});

document.getElementById("ponto").addEventListener("click", function(){
    resultado.value = resultado.value + document.getElementById("ponto").innerHTML;
});



document.getElementById("soma").addEventListener("click", function(){
    numSoma1 = Number(resultado.value);
    resultado.value = "";
    operador = "+";
    console.log(numSoma1);
});


document.getElementById("subtracao").addEventListener("click", function(){
    numSub1 = Number(resultado.value);
    resultado.value = "";
    operador = "-";
    console.log(numSub1);
});

document.getElementById("multiplicacao").addEventListener("click", function(){
    numMult1 = Number(resultado.value);
    resultado.value = "";
    operador = "*";
    console.log(numMult1);
});

document.getElementById("divisao").addEventListener("click", function(){
    numDiv1 = Number(resultado.value);
    resultado.value = "";
    operador = "/";
    console.log(numDiv1);
});

document.getElementById("calcular").addEventListener("click", function(){
    if(operador == "+"){
    numSoma2 = Number(resultado.value);
    resultado.value = "";
    console.log(numSoma2);
    resultSoma = numSoma1 + numSoma2;
    resultado.value = Number(resultSoma);
    numSoma1 = "";
    numSoma2 = "";
    document.getElementById("limpar").style.backgroundColor = "red";
    }
    else if(operador == "-"){
        numSub2 = Number(resultado.value)
        resultado.value = "";
        console.log(numSub2);
        resultSub = numSub1 - numSub2;
        resultado.value = Number(resultSub);
        numSub1 = "";
        numSub2 = "";
        document.getElementById("limpar").style.backgroundColor = "red";
    }
    else if(operador == "*"){
        numMult2 = Number(resultado.value);
        resultado.value = "";
        console.log(numMult2);
        resultMult = numMult1 * numMult2;
        resultado.value = Number(resultMult);
        numMult1 = "";
        numMult2 = "";
        document.getElementById("limpar").style.backgroundColor = "red";
    }
    else if(operador == "/"){
        if(resultado.value != '0'){
            numDiv2 = Number(resultado.value);
            resultado.value = "";
            console.log(numDiv2);
            resultDiv = numDiv1 / numDiv2;
            resultado.value = resultDiv;
        }
        else if (resultado.value === '0'){
            resultDiv = 'Impossivel dividir por zero';
            resultado.value = resultDiv;
        }
        numDiv1 = "";
        numDiv2 = "";
        document.getElementById("limpar").style.backgroundColor = "red";
    }
});



limpar.addEventListener("click", function(){
    numSoma1 = "";
    numSoma2 = "";
    resultSoma = "";
    numSub1 = "";
    numSub2 = "";
    resultSub = "";
    numMult1 = "";
    numMult2 = "";
    resultMult = "";
    numDiv1 = "";
    numDiv2 = "";
    resultDiv = "";
    resultado.value = "";
    document.getElementById("limpar").style.backgroundColor = " rgb(23, 66, 146)";
})


