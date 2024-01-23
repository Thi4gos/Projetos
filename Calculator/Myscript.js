/*

 Ouvir os botões: ouvir os números (0...9), eles formando os fatores do calculo,
 e as operações, para esperarem o pedido de resultado.

AÇÕES ⋁ v

 transformar valores digitados (+/-),
 apagar valores digitados e mostragem prévia dos valores, operações e resultados.

*/

// **Seleciona os elementos**
const previousOperationSpan = document.getElementById('previous-operation'); // Elemento que exibe a operação anterior
const currentOperationSpan = document.getElementById('current-operetion'); // Elemento que exibe a operação atual

// **Inicializa variáveis**
let currentNumber = ''; // Número atual
let previousNumber = ''; // Número anterior
let operator = ''; // Operador atual

// **Adiciona eventos aos botões numéricos**
const numberButtons = document.querySelectorAll('.num');
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Adiciona o valor do botão ao número atual
    currentNumber += button.textContent;

    // Atualiza a tela com o número atual
    currentOperationSpan.textContent = currentNumber;
  });
});

// **Implementa funções para operadores**
// **Exemplo de função para um operador**
const handleAddition = () => {
  // Verifica se há um número atual
  if (currentNumber !== '') {
    // Verifica se há um número anterior
    if (previousNumber !== '') {
      // Realiza a operação anterior
      const result = performOperation(previousNumber, currentNumber, operator);

      // Atualiza a tela com a operação anterior
      previousOperationSpan.textContent = `${previousNumber} ${operator} ${currentNumber} = ${result}`;

      // Atualiza o número anterior com o resultado
      previousNumber = result;
    } else {
      // O número anterior é o número atual
      previousNumber = currentNumber;
    }

    // Limpa o número atual
    currentNumber = '';

    // Atualiza o operador atual
    operator = '+';
  }

  // Atualiza a tela com o operador atual
  currentOperationSpan.textContent = `${previousNumber} ${operator}`;
};

// **Adiciona eventos aos botões de operadores**
operatorButtons.forEach(button => {
  switch (button.textContent) {
    case '+':
      button.addEventListener('click', handleAddition);
      break;
    // Adicione casos para outros operadores
  }
});

// **Implementa funções adicionais**
// **Função para limpeza da tela**
const handleClear = () => {
  // Limpa o número atual
  currentNumber = '';

  // Limpa o operador atual
  operator = '';

  // Limpa a tela
  previousOperationSpan.textContent = '';
  currentOperationSpan.textContent = '';
};

// **Função para apagar o último número**
const handleDelete = () => {
  // Remove o último caractere do número atual
  if (currentNumber.length > 0) {
    currentNumber = currentNumber.substring(0, currentNumber.length - 1);
  }

  // Atualiza a tela com o número atual
  currentOperationSpan.textContent = currentNumber;
};

// **Função para calcular o resultado final**
const handleEqual = () => {
  // Verifica se há um número atual
  if (currentNumber !== '') {
    // Realiza a operação anterior
    const result = performOperation(previousNumber, currentNumber, operator);

    // Atualiza a tela com o resultado
    previousOperationSpan.textContent = `${previousNumber} ${operator} ${currentNumber} = ${result}`;

    // Limpa o número atual
    currentNumber = '';

    // Limpa o operador atual
    operator = '';
  }
};
