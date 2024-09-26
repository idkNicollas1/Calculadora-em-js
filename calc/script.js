function insert(num) {
    var numero = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML += num;
}

function clearDisplay() {
    document.getElementById('display').innerHTML = "";
}

function throwBack() {
    var resultado = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = resultado.substring(0, resultado.length -1)
}

function resul() {
    var conta = document.getElementById('display').innerHTML;
    if(conta){
        document.getElementById('display').innerHTML = eval(conta);
    }
    else {
        document.getElementById('display').innerHTML = "Error";
    }
}