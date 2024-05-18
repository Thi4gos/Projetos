document.getElementById("loginForm").addEventListener("submit", function (event) {
    var usuarioInput = document.getElementById("usuario");
    var usuarioError = document.getElementById("usuarioError");
    var senhaInput = document.getElementById("senha");
    var senhaError = document.getElementById("senhaError");
    var usuarioValue = usuarioInput.value.trim();
    var senhaValue = senhaInput.value.trim();

    if (usuarioValue.length < 7) {
        usuarioError.textContent = "O usuário deve conter pelo menos 7 caracteres.";
        usuarioError.style.display = "block";
        usuarioInput.style.borderColor = "red";
        usuarioInput.focus();
        event.preventDefault();
    } else {
        usuarioError.textContent = "";
        usuarioError.style.display = "none";
        usuarioInput.style.borderColor = "#ccc";
    }

    if (senhaValue.length < 8) {
        senhaError.textContent = "A senha deve conter pelo menos 8 caracteres.";
        senhaError.style.display = "block";
        senhaInput.style.borderColor = "red";
        senhaInput.focus();
        event.preventDefault();
    } else {
        senhaError.textContent = "";
        senhaError.style.display = "none";
        senhaInput.style.borderColor = "#ccc";
    }
});