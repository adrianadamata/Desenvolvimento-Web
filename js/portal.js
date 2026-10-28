const nomeUsuarioElemento = document.getElementById('nome-usuario');
const tituloBoasVindas = document.getElementById('titulo-boas-vindas');
const btnLogout = document.getElementById('btn-logout');

const dadosSalvos = localStorage.getItem('usuarioCadastrado');

if (!dadosSalvos) {
    alert('Acesso negado! Faça o login primeiro');
    window.location.href = 'login.html';
} else {
    const usuario = JSON.parse(dadosSalvos);
    const nomeExibicao = usuario.nome || usuario.email;

    nomeUsuarioElemento.textContent = `Olá, ${nomeExibicao}`;
    tituloBoasVindas.textContent = `Bem Vindo(a), ${nomeExibicao}`;
}

btnLogout.addEventListener('click' , () => {
    const confirmou = confirm('Deseja realmente sair do Portal?');
    if (confirmou) {
        window.location.href = 'login.html'
    }
});