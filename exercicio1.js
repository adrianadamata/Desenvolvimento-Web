// Nível 1: DOM e Eventos Básicos
// Complete as 3 lacunas para fazer o botão "Limpar" funcionar:
const btnLimpar = document.________________('btn-limpar');
const formCadastro = document.getElementById('form-cadastro');

btnLimpar.addEventListener('________', () => {
    formCadastro.________(); // Dica: método nativo para resetar formulários
});

//OPÇÕES:[ submit | click | reset | getElementById | querySelector ]

// Nível 2: Validação do email:
const inputEmail = document.getElementById('email');

inputEmail.addEventListener('input', () => {
    const valor = inputEmail.____________;

    // Verifica se o e-mail termina com @ifpa.edu.br
    if (valor.endsWith('@ifpa.edu.br')) {
        inputEmail.classList.____________('campo-valido');
    } else {
        inputEmail.classList.____________('campo-valido');
    }
});

//   [ textContent | value | add | remove | toggle ]

//Nível 3: localStorage (Salvar e ler o usuário autenticado)
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');

const novoUsuario = {
    nome: inputNome.value,
    email: inputEmail.value
};

// Salva o objeto convertido em texto
localStorage.setItem('usuarioCadastrado', 
    JSON.____________(novoUsuario));

// Busca o texto salvo no navegador
const dadosSalvos = localStorage.____________('usuarioCadastrado');

if (dadosSalvos) {
    // Converte de volta para objeto
    const usuario = JSON.____________(dadosSalvos);
    document.getElementById('nome-usuario').textContent = 
    usuario.____________;
}

// [ parse | stringify | getItem | setItem | nome | value ]