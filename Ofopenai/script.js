// Pega uma referência para o botão e para o body
const trocarCorBtn = document.getElementById('trocarCorBtn');
const body = document.body;

// Array de cores
const cores = ['lightcoral', 'lightgreen', 'lightyellow', 'lightpink', 'lightskyblue'];

// Função para trocar a cor de fundo
function trocarCorDeFundo() {
    // Escolhe uma cor aleatória do array
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    
    // Define a cor de fundo do body como a cor escolhida
    body.style.backgroundColor = corAleatoria;
}

// Adiciona um evento de clique ao botão para chamar a função de trocar cor
trocarCorBtn.addEventListener('click', trocarCorDeFundo);
