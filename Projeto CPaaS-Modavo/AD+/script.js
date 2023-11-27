// Função para alternar entre os modos claro e escuro
function toggleContrast() {
  
  const header = document.querySelector('header');
  const sections = document.querySelectorAll('body > section');
  const footer = document.querySelector('footer');
  const allText = document.querySelectorAll('*:not(#lista-transformacao-CpaaS)');

  
  if (header) {
    header.style.backgroundColor = '#3d3d3d';
  }
  
  sections.forEach(section => section.style.backgroundColor = '#4f4f4f');
  
  if (footer) {
    footer.style.backgroundColor = '#3d3d3d';
  }
  
  allText.forEach(text => text.style.color = '#3d3d3d');

  
  const icon = document.querySelector('.fa-moon');
  if (icon) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
}


const iconElement = document.querySelector('.botao_contraste');
if (iconElement) {
  iconElement.addEventListener('click', toggleContrast);
}

