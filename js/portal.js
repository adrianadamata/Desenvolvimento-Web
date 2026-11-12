const nomeUsuarioElemento = document.getElementById('nome-usuario');
const tituloBoasVindas = document.getElementById('titulo-boas-vindas');
const btnLogout = document.getElementById('btn-logout');

const dadosSalvos = localStorage.getItem('usuarioCadastrado');

const btnTema = document.getElementById('btn-tema');

btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


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

const disciplinas = document.querySelectorAll('.item-disciplina');

const notasDisciplinas = {
    'Desenvolvimento Web': [6.0, 7.0, 8.0, 9.0],
    'Banco de Dados': [10.0, 9.0, 10.0, 9.0],
    'Algoritmos e Linguagem de Programação': [0.5, 1.5, 2.5, 3.0]
}

function renderizarNotas(elemento, disciplinaNome) {
    const notas = notasDisciplinas[disciplinaNome];
    const conteinerNotas = elemento.querySelector('.detalhes-notas');

    if (notas && notas.length ===4) {
        const soma = notas.reduce((acc,curr) => acc + curr, 0);
        const media = (soma / 4).toFixed(1);
        const aprovado = media >= 7.0;

        conteinerNotas.innerHTML = `
    <div class="linha-notas">
        <span class="badge-nota">1º Bi: <strong>${notas[0].toFixed(1)}</strong></span>
        <span class="badge-nota">2º Bi: <strong>${notas[1].toFixed(1)}</strong></span>
    </div>
    <div class="linha-notas">
        <span class="badge-nota">3º Bi: <strong>${notas[2].toFixed(1)}</strong></span>
        <span class="badge-nota">4º Bi: <strong>${notas[3].toFixed(1)}</strong></span>
    </div>
    <div class="linha-media">
        <span class="badge-media ${aprovado ? 'media-aprovado' : 'media-reprovado'}">
            Média Final: ${media} ${aprovado ? '✅' : '⚠️'}
        </span>
    </div>
`;
    } else {
        conteinerNotas.innerHTML = `<span class="sem-notas">Nenhuma nota cadastrada</span>`;
    }
}

disciplinas.forEach(item => {
    const nomeDisciplina = item.getAttribute('data-disciplina');
    renderizarNotas(item, nomeDisciplina);
});