const buttonClear = document.getElementById('Clear');
const buttonBackspace = document.getElementById('backspace');
const buttonsOperator = document.querySelectorAll('.operator');
const buttonsNumber = document.querySelectorAll('.num');
const buttonEqual = document.getElementById('iqualite');

let previousOperation = document.getElementById('previous-operation');
let currentOperation = document.getElementById('current-operation');

let currentNumber = ''; // Número atual
let previousNumber = ''; // Número salvo
let operator = ''; // Operador atual



buttonsNumber.forEach(button => {
  button.addEventListener('click', () => {
    // Adiciona o valor do botão ao número atual
    currentNumber += button.textContent;

    // Atualiza a tela com o número atual
    currentOperation.textContent = currentNumber;

    textWidth = currentNumber.length;
    containerWidth = parseInt(window.getComputedStyle(currentOperation).width);

    if (textWidth > containerWidth) {
      // Adiciona a classe de animação de diminuição de fonte
      currentOperation.classList.add('font-shrink-animation');
    }
  });
});

buttonEqual.addEventListener('click', () => {
  if (previousOperation && currentOperation.textContent != '') {
    previousNumber = parseFloat(previousOperation.textContent);
    currentNumber = parseFloat(currentOperation.textContent);

    switch (operator) {
      case '+':
        currentNumber = previousNumber + currentNumber;
        break;
      case '-':
        currentNumber = previousNumber - currentNumber;
        break;
      case '*':
        currentNumber = previousNumber * currentNumber;
        break;
      case '/':
        currentNumber = previousNumber / currentNumber;
        break;
    }

    previousOperation.textContent = `${previousNumber} ${operator} ${currentNumber}`;
    currentOperation.textContent = currentNumber.toString();
  }
});

buttonsOperator.forEach(button => {
  button.addEventListener('click', () => {
    if (currentNumber != '') {
      previousOperation.textContent = currentOperation.textContent;
      previousNumber = parseFloat(currentOperation.textContent);
      operator = button.textContent;
      currentNumber = '';
    }
  });
});

buttonClear.addEventListener('click', clearAll); // Botão C
buttonBackspace.addEventListener('click', backspace); // Botão CE

function clearAll() {
  previousOperation.textContent = '';
  currentNumber = '';
  currentOperation.textContent = '0';
}

function backspace() {
  const text = currentOperation.textContent;
  if (text.length > 0) {
    currentNumber = text.slice(0, -1);
    currentOperation.textContent = currentNumber;
  }
}
