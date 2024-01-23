const saveForCalc = document.getElementById('previous-operation');
const currentCalc = document.getElementById('current-operetion');

const buttonsNumber = document.querySelectorAll('.num');

let currentNumber = ''; // Número atual

let previousNumber = ''; // Número anterior

let operator = ''; // Operador atual


buttonsNumber.forEach(button => {
  button.addEventListener('click', () => {
    // Adiciona o valor do botão ao número atual
    currentNumber += button.textContent;

    // Atualiza a tela com o número atual
    currentCalc.textContent = currentNumber;
  });
});