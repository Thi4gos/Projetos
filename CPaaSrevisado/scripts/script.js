const button = document.querySelector('.contrast-toggle');
const letras = document.querySelectorAll('p, a,');
const corpo = document.getElementById('body');


button.addEventListener('click', e => {
	button.classList.toggle('is-toggled');
	document.body.classList.toggle('is-high-contrast');
});