//var numero = 0
//document.getElementById("contador").innerHTML = numero
var numero = 0

function subtrair (params){
    numero--
    document.getElementById("contador").innerHTML = numero

    if (numero%3==0){
        document.getElementById("multiplo").innerHTML = "Esse número é um múltiplo de 3"
    }
    if (numero%2==0){
        document.getElementById("multiplo").innerHTML = "Esse número é um múltiplo de 2"
    }
    if ((numero%2==0) && (numero%3==0)){
        document.getElementById("multiplo").innerHTML = "Esse número é um múltiplo de 2 e de 3"
    }
    if (((numero%2!=0) && (numero%3!=0)) || (numero==0)){
        document.getElementById("multiplo").innerHTML = ""
    }
}
function adicionar(params){
    numero++
    document.getElementById("contador").innerHTML = numero

    if (numero%3==0){
        document.getElementById("multiplo").innerHTML = "Esse número é um múltiplo de 3"
    }
    if (numero%2==0){
        document.getElementById("multiplo").innerHTML = "Esse número é um múltiplo de 2"
    }
    if ((numero%2==0) && (numero%3==0)){
        document.getElementById("multiplo").innerHTML = "Esse número é um múltiplo de 2 e de 3"
    }
    if (((numero%2!=0) && (numero%3!=0)) || (numero==0)){
        document.getElementById("multiplo").innerHTML = ""
    }
}

function limpar(params){
    numero=0
    document.getElementById("contador").innerHTML = numero
    document.getElementById("multiplo").innerHTML = ""
}



