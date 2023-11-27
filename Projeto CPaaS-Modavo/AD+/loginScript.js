document.getElementById('envio').addEventListener('click', function () {
    const savedPass = localStorage.getItem('passCad');
    const savedLogin = localStorage.getItem('loginCad')
    const inputLogin = document.getElementById('loginLogin').value;
    const inputPass = document.getElementById('passLogin').value;

    if (inputLogin === savedLogin && inputPass === savedPass) {
        // Redirecionar apenas se as credenciais estiverem corretas
        window.location.href = 'main-pag.html';
    }
    if (inputLogin.value != savedLogin.valueOf && inputPass.value != savedPass.valueOf) {
        // Exibindo o alerta de erro
        document.getElementById('errorAlert').style.display = 'block';
    }
});