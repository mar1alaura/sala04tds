function soma(){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    console.log(numero1, numero2)
    var resposta = document.getElementById('respostasoma')
    resposta.textContent = numero1 + numero2
}

function multiplicacao(){
   var numero1 = parseFloat(document.getElementById("n5").value)
   var numero1 = parseFloat(document.getElementById("n6").value)
    document.getElementById('respostaMulti').innerHTML = numero1 * numero2
}

function div(){
    var numero1 = document.getElementById("n3").valueAsNumber
    var numero2 = document.getElementById("n4").valueAsNumber
    console.log(numero1, numero2)
    var resposta = document.getElementById('respostaMulti')
    resposta.textContent = numero1 / numero2
}