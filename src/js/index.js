/* troca aba */

const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionada")){
            return;
        } //para n repetir o codigo
        if(aba.classList.contains("selecionado")){
            return;
        } //para n repetir o codigo

        selecionarAba(aba)

        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba){
    const abaSelecionada = document.querySelector(".aba.selecionada");
    abaSelecionada.classList.remove("selecionada");
    aba.classList.add("selecionada");
}

function mostrarInformacoesDaAba(aba){
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");

        const idDoElementoInformacoesDaAba = `informacao-${aba.id}`; //pega o id automaticamente, e é passado para o codigo seguinte. em outros projetos com mais abas, usar esse sistema, colocando no botao da aba o nome dela, e no seguinte coloco "informacao-..." que ira funcionar.

        const informacaoASerMostrada = document.getElementById(idDoElementoInformacoesDaAba);
        informacaoASerMostrada.classList.add("selecionado")
}