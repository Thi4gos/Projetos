// Obtendo os elementos do formulário
const form = document.querySelector('form');
const nomeInput = document.getElementById('nome');
const loginInput = document.getElementById('login');
const dataNascInput = document.getElementById('data_nasc');
const sexoInput = document.getElementById('sexo');
const nomeMaeInput = document.getElementById('nome_materno');
const cpfInput = document.getElementById('cpf');
const telCelInput = document.getElementById('tel');
const telFixInput = document.getElementById('tel_fix');
const adressInput = document.getElementById('adress');
const passInput = document.getElementById('pass');
const passConfInput = document.getElementById('pass_conf');

// Adicionando um ouvinte de evento ao formulário para capturar o envio
form.addEventListener('submit', function (event) {
    // Evitando o envio padrão do formulário
    event.preventDefault();

    // Salvando os dados no localStorage
    localStorage.setItem('nome', nomeInput.value);
    localStorage.setItem('login', loginInput.value);
    localStorage.setItem('dataNasc', dataNascInput.value);
    localStorage.setItem('sexo', sexoInput.value);
    localStorage.setItem('nomeMae', nomeMaeInput.value);
    localStorage.setItem('cpf', cpfInput.value);
    localStorage.setItem('telCel', telCelInput.value);
    localStorage.setItem('telFix', telFixInput.value);
    localStorage.setItem('adress', adressInput.value);
    localStorage.setItem('pass', passInput.value);
    localStorage.setItem('passConf', passConfInput.value);

    // Redirecionando para a página de login
    window.location.href = 'Login-pag.html';
});
