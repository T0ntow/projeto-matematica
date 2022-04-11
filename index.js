let number1 = 0;
let number2 = 0;
let base = 0;
let operador = '';

const valueBase1 = document.getElementById('base');
const valueNumber1 = document.getElementById('num1');
const valueNumber2 = document.getElementById('num2');

valueBase1.addEventListener('input', function (event) {
    const base1Value = event.target.value;
    document.querySelector('#previous-operand-base').innerHTML = (base1Value);
    console.log(base1Value)
})

valueNumber1.addEventListener('input', function (event) {
    const number1Value = event.target.value;
    console.log('number1Value: ',number1Value);
    document.querySelector('#previous-operand-num1').innerHTML = (number1Value);
})

valueNumber2.addEventListener('input', function (event) {
    const number2Value = event.target.value;
    document.querySelector('#previous-operand-num2').innerHTML = (number2Value);
})

function getNumbers() {
    number1 = document.getElementById('num1').value;
    number2 = document.getElementById('num2').value;
    base = document.getElementById('base').value;
    number1 = parseInt(number1, base);
    number2 = parseInt(number2, base);
}

function result() {
    let result = '';
    getNumbers();
    if (operador === '+') {  
        result = number1 + number2;
    } else if (operador === '-') {
        result = number1 - number2;
    } else if (operador === '*') {
        result = number1 * number2;
    } else if (operador === '/') {
        result = number1 / number2;
    }
    document.querySelector('.current-operand').innerHTML = (result.toString(base));
}

function adicionarOperador(op) {
    operador = op;
    document.querySelector('#previous-operand-op').innerHTML = op;
}

function clean() {
    document.querySelector('.current-operand').innerHTML = '';
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('base').value = '';
}


// Converter 

function getNumbers2() {
    number1Parte2 = document.getElementById('num1Parte2').value;
    fromBase = document.getElementById('fromBase').value;
    toBase = document.getElementById('toBase').value;
    tela = document.querySelector('.resultado');
}
function calcular() {
    getNumbers2();

    resultado = parseInt(number1Parte2, fromBase);

    tela.innerHTML = (resultado.toString(toBase));
}
function reset() {
    document.getElementById('num1Parte2').value = '';
    document.getElementById('fromBase').value = '';
    document.getElementById('toBase').value = '';
    document.querySelector('.resultado').innerHTML = '';
}

