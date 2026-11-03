const formLogin =  document.getElementById('form-login');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const btnLogin = document.getElementById('btn-login');
const btnVerSenha = document.getElementById('btn-ver-senha');

inputEmail.addEventListener('input', () => {
    if (inputEmail.checkValidity() && inputEmail.value.trim() !== '') {
        inputEmail.classList.add('campo-valido');
    } else {
        inputEmail.classList.remove('campo-valido');
    }
});

inputSenha.addEventListener('input', () => {
    if (inputSenha.value.length >= 8) {
        inputSenha.classList.add('campo-valido');
    } else {
        inputSenha.classList.remove('campo-valido');
    }
});

btnVerSenha.addEventListener('click', () => {
    if(inputSenha.type === 'password'){
        inputSenha.type = 'text';
        btnVerSenha.textContent = 'Ocultar';
    } else{
        inputSenha.type = 'password';
        btnVerSenha.textContent = 'Mostrar';
    }
});

formLogin.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = inputEmail.value;
    const senha = inputSenha.value;

    const dadosSalvos = localStorage.getItem('usuarioCadastrado');
    const usuarioCadastrado = dadosSalvos ? JSON.parse(dadosSalvos): null;

    if (usuarioCadastrado && email === usuarioCadastrado.email
        && senha === usuarioCadastrado.senha) {

        btnLogin.textContent = 'Autenticando ...';
        btnLogin.style.backgroundColor = '#28a745';

        setTimeout(() => {
            alert(`Bem-vindo ao Portal do Aluno! \nUsuário: ${email}`);
            btnLogin.textContent = 'Entrar';
            btnLogin.style.backgroundColor = '#0056b3';
            window.location.href = 'portal.html';
        }, 800);
    } else {
        alert('Email ou senha incorretos(ou cadastro não encontrado)!');
    }
    
});
