
    // Função para validar o formulário
    function validarFormulario() {
        // Obter os valores dos campos
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("login").value;
        var dataNasc = document.getElementById("data_nasc").value;
        var sexo = document.getElementById("sexo").value;
        var nomeMae = document.getElementById("nome_materno").value;
        var cpf = document.getElementById("cpf").value;
        var telCel = document.getElementById("tel").value;
        var senha = document.getElementById("pass").value;
        var confSenha = document.getElementById("pass_conf").value;

        // Verificar se os campos obrigatórios estão preenchidos
        if (nome === "" || email === "" || dataNasc === "" || sexo === "none" || nomeMae === "" || cpf === "" || senha === "" || confSenha === "") {
            document.getElementById("alert").textContent = "Por favor, preencha todos os campos obrigatórios.";
        } else if (senha !== confSenha) {
            document.getElementById("alert").textContent = "As senhas não coincidem. Tente novamente.";
        } else {
            // O formulário está válido, você pode adicionar o código para processar os dados aqui

            // Exemplo: envio para um servidor
            // var dados = {
            //     nome: nome,
            //     email: email,
            //     // Outros campos
            // };
            // fetch('URL_DO_SERVIDOR', {
            //     method: 'POST',
            //     body: JSON.stringify(dados)
            // }).then(response => {
            //     // Lógica de resposta do servidor
            // }).catch(error => {
            //     // Tratar erros de envio
            // });

            document.getElementById("alert").textContent = "Formulário enviado com sucesso!";
        }
    }

    // Adicionar um ouvinte de evento para o envio do formulário
    document.getElementById("formulario").addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        validarFormulario(); // Chama a função de validação
    });

