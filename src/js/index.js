/*
O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema pra lua

    - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
        - passo 6 - remover a classe do modo-escuro do body
        - passo 7 - trocar a imagem do botão de alterar tema pra sol
*/

alert("Bem-vindo!");

// objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua

// passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlternarTema = document.getElementById("botao-alternar-tema")

//passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
const body = document.querySelector("body")

const imageBotaoAlternarTema = document.querySelector(".imagem-botao")

// passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlternarTema.addEventListener("click", () => {

    //objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
    const FlagModoEscuro = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro"); // toggle -> Alternar

    if (FlagModoEscuro) {
        // passo 6 - remover a classe do modo-escuro do body
        //body.classList.remove("modo-escuro");
        //body.classList.add("modo-claro");

        // passo 7 - trocar a imagem do botão de alterar tema pra sol
        imageBotaoAlternarTema.setAttribute("src", "./src/images/sun.png");
    } else {
        // passo 4 - adicionar a classe modo-escuro no body
        //body.classList.add("modo-escuro");

        // passo 5 - trocar a imagem do botão de alterar tema pra lua
        imageBotaoAlternarTema.setAttribute("src", "./src/images/moon.png");
    }

    // passo 6 - remover a classe do modo-escuro do body
})

//console.log() -> Apresentar as informações do JS no console do navegador
