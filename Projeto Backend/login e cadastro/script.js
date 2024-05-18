                        // ============================== VALIDAÇÃO DE NOME ==============================
const nomeCompletoInput = document.getElementById('nomeCompleto');
const errorNomeCompletoParagraph = nomeCompletoInput.nextElementSibling;

nomeCompletoInput.addEventListener('input', function () {
    if (!this.value.match(/^[a-zA-Z ]{15,80}$/)) {
        errorNomeCompletoParagraph.textContent = 'O nome deve conter apenas letras e ter entre 15 e 80 caracteres.';
    } else {
        errorNomeCompletoParagraph.textContent = '';
    }
});

                        // ============================== AUTOPREENCHIMENTO/VALIDAÇÃO CEP ==============================

const cepInput = document.getElementById('cep');
const logradouroInput = document.getElementById('logradouro');
const bairroInput = document.getElementById('bairro');
const estadoInput = document.getElementById('estado');
const errorCEPParagraph = cepInput.nextElementSibling;

cepInput.addEventListener('blur', function () {
    const cep = cepInput.value.replace(/\D/g, '');

    if (cep.length !== 8) {
        errorCEPParagraph.textContent = 'CEP inválido.';
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                errorCEPParagraph.textContent = 'CEP não encontrado.';
                return;
            }
            estadoInput.value = data.localidade;
            logradouroInput.value = data.logradouro;
            bairroInput.value = data.bairro;
            errorCEPParagraph.textContent = '';
        })
        .catch(error => {
            console.error('Erro ao obter dados do CEP:', error);
            errorCEPParagraph.textContent = 'Erro ao obter dados do CEP. Preencha manualmente.';
        });
});

                            // ============================== VALIDAÇÃO DE SENHA ==============================

const senhaInput = document.getElementById('senha');
const confirmarSenhaInput = document.getElementById('confirmarSenha');
const errorSenhaParagraph = senhaInput.nextElementSibling;
const errorConfirmarSenhaParagraph = confirmarSenhaInput.nextElementSibling;

const loginInput = document.getElementById('login');
const errorLoginParagraph = loginInput.nextElementSibling;

loginInput.addEventListener('input', function () {
    if (!/^[a-zA-Z0-9_]{6}$/.test(this.value)) {
        errorLoginParagraph.textContent = 'O login deve ter exatamente 6 caracteres alfanuméricos.';
    } else {
        errorLoginParagraph.textContent = '';
    }
});

senhaInput.addEventListener('input', function () {
    if (!/^[a-zA-Z0-9_]{8}$/.test(this.value)) {
        errorSenhaParagraph.textContent = 'A senha deve ter exatamente 8 caracteres alfanuméricos.';
    } else {
        errorSenhaParagraph.textContent = '';
        verificarSenhas();
    }
});

confirmarSenhaInput.addEventListener('input', function () {
    verificarSenhas();
});

function verificarSenhas() {
    if (senhaInput.value !== confirmarSenhaInput.value) {
        errorConfirmarSenhaParagraph.textContent = 'As senhas não coincidem.';
    } else {
        errorConfirmarSenhaParagraph.textContent = '';
    }
}
                            // ============================== TELEFONE VALIDAÇÃO ==============================

const telefoneCelularInput = document.getElementById('telefoneCelular');
const telefoneFixoInput = document.getElementById('telefoneFixo');

telefoneCelularInput.addEventListener('input', function () {
    const value = this.value.replace(/\D/g, '');
    const formattedValue = formatarTelefone(value);
    this.value = formattedValue;
});

telefoneFixoInput.addEventListener('input', function () {
    const value = this.value.replace(/\D/g, '');
    const formattedValue = formatarTelefone(value);
    this.value = formattedValue;
});

function formatarTelefone(telefone) {
    let formattedTelefone = '+55';
    if (telefone.length >= 2) {
        formattedTelefone += '(' + telefone.substring(0, 2) + ')';
        if (telefone.length > 2) {
            formattedTelefone += ' ' + telefone.substring(2, 4) + '-';
            if (telefone.length === 7) {
                formattedTelefone += telefone.substring(4, 7);
            } else if (telefone.length === 8) {
                formattedTelefone += telefone.substring(4, 8);
            } else if (telefone.length >= 9 && telefone.length <= 11) {
                formattedTelefone += telefone.substring(4, 7) + '-' + telefone.substring(7);
            } else if (telefone.length > 11) {
                formattedTelefone += telefone.substring(4, 8) + '-' + telefone.substring(8, 12);
            }
        }
    }
    return formattedTelefone; 
}

// function formatarTelefone(telefone) {
//     let formattedTelefone = '+55';
//     if (telefone.length >= 2) {
//         formattedTelefone += '(' + telefone.substring(0, 2) + ')';
//         if (telefone.length > 2) {
//             formattedTelefone += ' ' + telefone.substring(2, 4) + '-';
//             if (telefone.length === 7) {
//                 formattedTelefone += telefone.substring(4, 7);
//             } else if (telefone.length === 8) {
//                 formattedTelefone += telefone.substring(4, 8);
//             } else if (telefone.length >= 9 && telefone.length <= 11) {
//                 formattedTelefone += telefone.substring(4, 7) + '-' + telefone.substring(7);
//             } else if (telefone.length > 11) {
//                 formattedTelefone += telefone.substring(4, 8) + '-' + telefone.substring(8, 12);
//             }
//         }
//     }
//     return formattedTelefone; 
// }


                                    //============================== CPF VALIDAÇÃO ============================== 
const cpfInput = document.getElementById('cpf');
const errorCPFParagraph = cpfInput.nextElementSibling;

cpfInput.addEventListener('input', function () {
    if (!validarCPF(this.value)) {
        errorCPFParagraph.textContent = 'CPF inválido.';
    } else {
        errorCPFParagraph.textContent = '';
    }
});



function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;

    // Elimina CPFs invalidos conhecidos
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;

    // Valida 1o digito
    let add = 0;
    for (let i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;

    // Valida 2o digito
    add = 0;
    for (let i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;

    return true;
}

function criptografarSenha(senha) {
    // Aqui você pode usar qualquer algoritmo de hash, como SHA-256
    return senha; // Por enquanto, estamos apenas retornando a senha sem criptografar
}
