const pantalla= document.getElementById("pantalla");

let yaCalculo = false;

function agregar(valor) {
  let pantalla = document.getElementById('pantalla');
  let operadores = ['+', '-', '*', '/', '%', '×'];
  let display = valor === '*' ? '×' : valor;

  if (pantalla.innerText === '0' || yaCalculo) {
    pantalla.innerText = display;
    yaCalculo = false;
  } else {
    let ultimo = pantalla.innerText.slice(-1);
    if (pantalla.innerText.length >= 12) return;
    if (operadores.includes(ultimo) && operadores.includes(valor)) return;
    pantalla.innerText += display;
  }
}

function calcular() {
  let pantalla = document.getElementById('pantalla');
  let expresionDiv = document.getElementById('expresion');
  let expr = pantalla.innerText.trim();

  try {
    let exprCalculable = expr.replace(/(\d+(\.\d+)?)%/g, '($1/100)');
    exprCalculable = exprCalculable.replace(/×/g, '*'); // ← esta línea faltaba
    let resultado = eval(exprCalculable);

    expresionDiv.innerText = expr + ' =';
    pantalla.innerText = resultado;
    yaCalculo = true;
  } catch (e) {
    pantalla.innerText = 'Error';
  }
}

function borrarUltimo() {
  let pantalla = document.getElementById('pantalla');
  let valorActual = pantalla.innerText.trim();

  if (valorActual.length > 1) {
    pantalla.innerText = valorActual.slice(0, -1);
  } else {
    pantalla.innerText = '0';
  }
}

function agregarDecimal() {
  let pantalla = document.getElementById('pantalla');
  let valorActual = pantalla.innerText.trim();

  if (!valorActual.includes('.')) {
    pantalla.innerText = valorActual + '.';
  }
}

function limpiar() {
  document.getElementById('pantalla').innerText = '0';
  document.getElementById('expresion').innerText = '';
}

document.addEventListener('keydown', function(e) {
  if ('0123456789'.includes(e.key)) {
    agregar(e.key);
  } else if (['+', '-', '*', '/', '%'].includes(e.key)) {
    agregar(e.key);
  } else if (e.key === 'Enter' || e.key === '=') {
    calcular();
  } else if (e.key === 'Escape') {
    limpiar();
  } else if (e.key === 'Backspace') {
    borrarUltimo();
  } else if (e.key === '.') {
    agregarDecimal();
  } 
});