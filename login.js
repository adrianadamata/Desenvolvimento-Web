const formLogin =  document.getElementById('form-login');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const btnLogin = document.getElementById('btn-login');

inputEmail.addEventListener('input', () => {
    if (inputEmail.checkValidity() && inputEmail.value.trim() !== '') {
        inputEmail.classList.add('campo-valido');
    } else {
        inputSenha.classList.remove('campo-valido');
    }
});

inputSenha.addEventListener('input', () => {
    if (inputSenha.value.length >= 8) {
        inputSenha.classList.add('campo-valido');
    } else {
        inputSenha.classList.remove('campo-valido');
    }
});

formLogin.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = inputEmail.value;
    const senha = inputSenha.value;

    if (email && senha.length >= 8) {
        btnLogin.textContent = 'Autenticando ...';
        [link suspeito removido].backgroundColor = '#28a745';

        setTimeout(() => {
            alert('Bem-vindo ao Portal do Aluno! \nUsuário: ${email}');
            btnLogin.textContent = 'Entrar';
            [link suspeito removido].backgroundColor = '#0056b3';
        }, 800);
    } else {
        alert('Por favor, preencha as credenciais corretamente.');
    }
});
