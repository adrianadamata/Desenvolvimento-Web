// 🔗 PARTE 2: Exercício de Associação de Colunas no portal.js
// Abaixo temos o código do arquivo js/portal.js. Associe cada trecho numerado da Coluna A à sua respectiva função na Coluna B.
// [1]
const nomeUsuarioElemento = document.getElementById('nome-usuario');
const btnLogout = document.getElementById('btn-logout');

// [2]
const dadosSalvos = localStorage.getItem('usuarioCadastrado');

// [3]
if (!dadosSalvos) {
    alert('Acesso negado! Faça o login primeiro');
    window.location.href = 'login.html';
}

// [4]
const usuario = JSON.parse(dadosSalvos);

// [5]
nomeUsuarioElemento.textContent = `Olá, ${nomeExibicao}`;

// [6]
btnLogout.addEventListener('click', () => { ... });

// [7]
window.location.href = 'login.html';

// Relacione as colunas:
Coluna A (Trecho) / Coluna B (O que o código faz?)
(    ) Converte o texto JSON salvo de volta para um objeto JavaScript manipulável.
(    ) Redireciona a página do navegador para a tela de login.
(    ) Busca no navegador a informação do usuário que foi salva durante o cadastro.
(    ) Captura os elementos do HTML usando o id para poder controlá-los pelo JavaScript.
(    ) Atualiza o texto exibido dentro do elemento na tela para mostrar o nome da pessoa.
(    ) Protege a página: se não houver ninguém logado, bloqueia o acesso e expulsa o usuário.
(    ) Fica "escutando" e aguardando o usuário clicar no botão de Sair.