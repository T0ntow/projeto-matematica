let number1 = 0;
let number2 = 0;
let base = 0;
let operador = '';

const valueBase1 = document.getElementById('base');
const valueNumber1 = document.getElementById('num1');
const valueNumber2 = document.getElementById('num2');

// calculadora var

valueBase1.addEventListener('input', function (event) {
    const base1Value = event.target.value;
    document.querySelector('#previous-operand-base').innerHTML = (base1Value);
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
function adicionarOperador(op) {
    operador = op;
    document.querySelector('#previous-operand-op').innerHTML = op;
}

function getNumbers() {
    number1 = document.getElementById('num1').value;
    number2 = document.getElementById('num2').value;
    base = document.getElementById('base').value;
    number1 = parseInt(number1, base);
    number2 = parseInt(number2, base);
}
// calculadora
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
    document.getElementById('current-operand').innerHTML = (result.toString(base));
    document.querySelector('.current-operand').style.display = 'block';  

    console.log(result.toString(base))
}   
function clean(){
    document.getElementById('previous-operand-base').innerHTML = '';
    document.getElementById('previous-operand-num1').innerHTML = '';
    document.getElementById('previous-operand-num2').innerHTML = '';
    document.getElementById('previous-operand-op').innerHTML = '';
    document.querySelector('.current-operand').style.display = 'none';  

    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('base').value = '';
}

// Converter 

function getNumbers2() {
    number1Parte2 = document.getElementById('num1Parte2').value;
    fromBase = document.getElementById('fromBase').value;
    toBase = document.getElementById('toBase').value;
    tela = document.getElementById('resultado');
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
    document.querySelector('.resultado').innerHTML = 'RESULT';
}

// pop-up - pergunta

function abrir(){
    document.getElementById('previous-operand-base').innerHTML = '';
    document.getElementById('previous-operand-num1').innerHTML = '';
    document.getElementById('previous-operand-num2').innerHTML = '';
    document.getElementById('previous-operand-op').innerHTML = '';
    document.querySelector('.current-operand').style.display = 'none'; 
    
    if (document.querySelector('.popup').style.display === 'none' ){
        document.querySelector('.popup').style.display = 'block';
    }else{
        document.querySelector('.popup').style.display = 'none';
        document.querySelector('.current-operand').style.display = 'block';
    }
}

// copiar - calculudaora

function copiarTexto(){
    let copiado = document.getElementById('current-operand').innerHTML;

    navigator.clipboard.writeText(copiado)
    console.log(copiado)
};

// copiar - conversora

function copiarTexto2(){
    let copiado2 = document.querySelector('.resultado').innerHTML;

    navigator.clipboard.writeText(copiado2)
    console.log(copiado2)
};


// 

const html = document.querySelector('html')
const swit = document.querySelector('.switch')
const checkbox = document.querySelector('#switch')

let isTemaClaro = false

function toggleTema(){
    isTemaClaro = !isTemaClaro
    let img = document.querySelector('#background');
    if(isTemaClaro) {
        img.src = 'img/background2.jpeg'
    } else {
        img.src = 'img/fundo.png'
    }
    html.classList.toggle('light-mode');
    swit.classList.toggle('active');
}