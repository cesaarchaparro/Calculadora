function obtenerValores() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;

    return [parseFloat(n1), parseFloat(n2)];
}

function mostrarResultado(res) {
    document.getElementById("resultado").innerText = "Resultado: " + res;
}

const pantalla= document.getElementById("pantalla");

function agregar(valor) {
    if(pantalla.innerText =='0') {
        pantalla.innerText =valor;
    } else {
        pantalla.innerText += valor;
    }
}

function limpiar() {
    pantalla.innerText='0';
}

function calcular() {
    try{
        pantalla.innerText = eval(pantalla.innerText);
    } catch {
        pantalla.innerText = "Error";
    }
}