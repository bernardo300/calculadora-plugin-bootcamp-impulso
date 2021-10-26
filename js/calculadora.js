var visor = document.querySelector('.visor');

var btnLimpar = document.querySelector('#btnLimpar');
var btnPorcentagem = document.querySelector('#btnPorcentagem');
var btnMulSinal = document.querySelector('#btnSinal');
var btnDivisao = document.querySelector('#btnDivisao');

var btn7 = document.querySelector('#btn7');
var btn8 = document.querySelector('#btn8');
var btn9 = document.querySelector('#btn9');
var btnMultiplicacao = document.querySelector('#btnMultiplicacao');

var btn4 = document.querySelector('#btn4');
var btn5 = document.querySelector('#btn5');
var btn6 = document.querySelector('#btn6');
var btnMenos = document.querySelector('#btnMenos');

var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var btn3 = document.querySelector('#btn3');
var btnMais = document.querySelector('#btnMais');

var btn0 = document.querySelector('#btn0');
var btnPonto = document.querySelector('#btnPonto');
var btnIgual = document.querySelector('#btnIgual');

btn0.addEventListener('click', handlerAddExpressionvisor);
btn1.addEventListener('click', handlerAddExpressionvisor);
btn2.addEventListener('click', handlerAddExpressionvisor);
btn3.addEventListener('click', handlerAddExpressionvisor);
btn4.addEventListener('click', handlerAddExpressionvisor);
btn5.addEventListener('click', handlerAddExpressionvisor);
btn6.addEventListener('click', handlerAddExpressionvisor);
btn7.addEventListener('click', handlerAddExpressionvisor);
btn8.addEventListener('click', handlerAddExpressionvisor);
btn9.addEventListener('click', handlerAddExpressionvisor);
btnPonto.addEventListener('click', handlerAddExpressionvisor);
btnDivisao.addEventListener('click', handlerAddExpressionvisor);
btnMultiplicacao.addEventListener('click', handlerAddExpressionvisor);
btnMenos.addEventListener('click', handlerAddExpressionvisor);
btnMais.addEventListener('click', handlerAddExpressionvisor);
btnIgual.addEventListener('click', handlerKeyEqual);

window.addEventListener('load', () => {
  visor.focus();
});

visor.addEventListener('keyup', (ev) => {
  if (ev.key == '=' || ev.key == 'Enter') {
    visor.value = visor.value.replaceAll('=', '');
    let expression = visor.value.replaceAll('x', '*');
    calcular(expression);
    return;
  }
  visor.value = visor.value + ev.target.textContent;
});

btnLimpar.addEventListener('click', () => {
  visor.value = '';
});
function handlerAddExpressionvisor(ev) {
  visor.value = visor.value + ev.target.textContent;
}

function handlerKeyEqual() {
  let expression = visor.value.replaceAll('x', '*');
  calcular(expression);
}
function calcular(expression) {
  visor.value = eval(expression);
}
