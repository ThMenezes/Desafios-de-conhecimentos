const formulario = document.querySelector('#formulario')
const inputNome = document.querySelector('#nome')
const inputSobrenome = document.querySelector('#sobrenome')
const inputIdade = document.querySelector('#idade')
const inputEmail = document.querySelector('#email')
const inputSenha = document.querySelector('#senha')

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

    if(inputNome.value === "") {
        alert('Por favor, preencha seu nome.');
        return;
    }

    if(inputSobrenome.value === "") {
        alert('Por favor, preencha seu Sobrenome.');
        return;
    }

    if(inputIdade.value === "") {
        alert('Por favor, informe sua idade!');
        return;
    }

    if(inputEmail.value === "" || !isEmailValidacao(inputEmail.value)) {
        alert('Por favor, preencha seu email.');
        return;
    }

    if(!validacaoSenha(inputSenha.value, 8)) {
        alert('A senha precisa ser no mínimo 8 dígitos.');
        return;
    }   
    
    window.location.replace("desafio.html");
    
});

function isEmailValidacao(email) {
    const emailRegex = new RegExp (
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if (emailRegex.test(email)) {
        return true
    }
    return false;
}

function validacaoSenha(senha, minDigitos) {
    if(senha.length >= minDigitos) { // 8 dígitos
        return true
    }
    return false
}