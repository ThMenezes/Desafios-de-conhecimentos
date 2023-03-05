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

    formulario.submit();

});