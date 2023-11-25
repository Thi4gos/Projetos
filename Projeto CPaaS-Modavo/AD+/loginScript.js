document.getElementById('envio').addEventListener('click', function () {
    const savedPass = localStorage.getItem('pass');
    const inputLogin = document.getElementById('login').value;
    const inputPass = document.getElementById('pass').value;

    if (inputLogin == 'login' && inputPass == savedPass) {
        // Redirecionar apenas se as credenciais estiverem corretas
        window.location.href = 'main-pag.html';
    } else {
        // Exibindo o alerta de erro
        document.getElementById('errorAlert').style.display = 'block';
    }
});

const savedLogin = localStorage.getItem('login');
    const savedPass = localStorage.getItem('pass');

    // Se houver dados salvos, preencha automaticamente os campos
    if (savedLogin && savedPass) {
        document.getElementById('login').value = savedLogin;
        document.getElementById('pass').value = savedPass;
    }