// Gera um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Pega referências aos elementos HTML
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const message = document.getElementById('message');

// Inicializa o número de tentativas
let tentativas = 0;

// Função para verificar o palpite
function verificarPalpite() {
    const palpite = parseInt(guessInput.value);
    tentativas++;

    if (palpite === numeroAleatorio) {
        message.textContent = `Parabéns! Você acertou em ${tentativas} tentativas!`;
        message.style.color = 'green';
        guessInput.disabled = true;
        submitButton.disabled = true;
    } else if (palpite < numeroAleatorio) {
        message.textContent = 'Tente um número maior.';
        message.style.color = 'red';
    } else {
        message.textContent = 'Tente um número menor.';
        message.style.color = 'red';
    }

    guessInput.value = '';
    guessInput.focus();
}

// Adiciona um evento de clique ao botão de envio
submitButton.addEventListener('click', verificarPalpite);
