const buttonClear = document.getElementById('Clear')
const buttonBackspace = document.getElementById('backspace');
const buttonsOperato = document.querySelectorAll('.operator')
const buttonsNumber = document.querySelectorAll('.num');

let saveForCalc = document.getElementById('previous-operation');
let currentCalc = document.getElementById('current-operetion');
let currentNumber = ''; // Número atual
let previousNumber = '';// Número salvo
let operator = ''; // Operador atual
let containerWidth = currentCalc.style.width;
let WidthText = currentNumber.length;

buttonsNumber.forEach(button => {
  button.addEventListener('click', () => {              
    // Adiciona o valor do botão ao número atual        
    currentNumber += button.textContent;
    
    // Atualiza a tela com o número atual                  
    currentCalc.textContent = currentNumber;

    const WidthText = currentNumber.length;
    let containerWidth = parseInt(window.getComputedStyle(currentCalc).width);

    if (WidthText > containerWidth) {
      // Adiciona a classe de animação de diminuição de fonte
      currentCalc.classList.add('font-shrink-animation');
    }
  });
});
                                                       

buttonsOperato.forEach(button => {
  button.addEventListener('click', () => {                   
    saveForCalc.textContent = currentCalc.textContent;
    saveForCalc.textContent = saveForCalc.textContent + button.textContent;  // Corrigi aqui
    currentNumber = '';
    saveForCalc.textContent += button.textContent
  });
});

buttonClear.addEventListener('click', clearAll) //botão C
buttonBackspace.addEventListener('click', backspace); //botão CE
function clearAll() {
  saveForCalc.textContent = '';
  currentNumber = '';
  currentCalc.textContent = 0;
  
}                                                          //Apagar tudo acima, apagar apenas um fator a baixo
function backspace() {
  const text = currentCalc.textContent;
  if (text.length > 0) {
    currentNumber = text.slice(0, -1); 
    currentCalc.textContent = currentNumber;
  };
  
};
