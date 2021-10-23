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

btn0.addEventListener('click', clicarNumeros);
btn1.addEventListener('click', clicarNumeros);
btn2.addEventListener('click', clicarNumeros);
btn3.addEventListener('click', clicarNumeros);
btn4.addEventListener('click', clicarNumeros);
btn5.addEventListener('click', clicarNumeros);
btn6.addEventListener('click', clicarNumeros);
btn7.addEventListener('click', clicarNumeros);
btn8.addEventListener('click', clicarNumeros);
btn9.addEventListener('click', clicarNumeros);
window.addEventListener('load', () => {
  visor.focus();
});
function clicarNumeros(ev) {
  visor.value = visor.value + ev.target.textContent;

  console.log(ev.target.textContent);
}

function clicarOpercao(ev) {
  visor.value = visor.value + ev.target.textContent;
}

function clicarTeclas(ev) {
  console.log(ev.target.textContent);
}
visor.addEventListener('keyup', (ev) => {
  console.log(ev.key);
});
