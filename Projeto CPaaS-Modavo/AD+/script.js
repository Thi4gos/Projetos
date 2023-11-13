function contraste() {
    // Pega o botão que vai mudar o contraste
const botao_contraste = document.getElementById('botao_contraste');

// Pega o corpo da página ou a área que você quer mudar o contraste
const corpoPagina = document.main;

// Adiciona um event listener pro botão
botao_contraste.addEventListener('click', () => {
  // Troca entre os estilos de contraste
  corpoPagina.classList.toggle('black');
});
}