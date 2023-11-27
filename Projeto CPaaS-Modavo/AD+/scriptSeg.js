let isContrastOn = false; // Adiciona uma variável de controle

function toggleContrast() {
  // Seleciona elementos HTML para alterar as cores
  const header = document.querySelector('header');
  const sections = document.querySelectorAll('body, main');
  const footer = document.querySelector('footer');
  const allText = document.querySelectorAll('*:not(#lista-transformacao-CpaaS)');

  // Verifica o estado atual e altera as cores conforme as especificações
  if (isContrastOn) {
    // Estado escuro, volta ao estado normal
    header.style.backgroundColor = '';
    sections.forEach(section => section.style.backgroundColor = '');
    footer.style.backgroundColor = '';
    allText.forEach(text => text.style.color = '');
  } else {
    // Estado normal, aplica o contraste
    header.style.backgroundColor = '#3d3d3d';
    sections.forEach(section => section.style.backgroundColor = '#4f4f4f');
    footer.style.backgroundColor = '#3d3d3d';
    allText.forEach(text => text.style.color = 'white');
  }

  // Altera o ícone da lua para o sol e vice-versa
  const icon = document.querySelector('.botao_contraste i');
  if (icon) {
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  }

  // Inverte o estado
  isContrastOn = !isContrastOn;
}

// Event listener para chamar a função quando o ícone for clicado
const iconElement = document.querySelector('.botao_contraste');
if (iconElement) {
  iconElement.addEventListener('click', toggleContrast);
}