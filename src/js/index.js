const botoes = document.querySelectorAll ('.botao');

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        Desselecionar();
        Desselecionarpersonagem();
        
        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    }) 
});
function Desselecionarpersonagem() {
    const personagemselecionado = document.querySelector(".personagem.selecionado");
    personagemselecionado.classList.remove("selecionado");
}

function Desselecionar() {
    const botaoselecionado = document.querySelector(".botao.selecionado");
    botaoselecionado.classList.remove("selecionado");
}

