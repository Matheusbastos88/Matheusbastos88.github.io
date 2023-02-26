/*Index JS é um padrão de nomenclatura, como se o navegador e o servidor entendesse que este é o arquivo principal a ser executado. */
/* Antes de escrever o código,precisamos pensar primeiro na lógica a ser utilizada */



// PS: |Todas as Variáveis devem ficar acima dos códigos, elas estão como estão devido ao passo a passo comentado.
 

 


// Objetivo 1 - Quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer.
console.log('Mostrar o documento', document);
// console = objeto. Log = função */
 //- passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o JS 
console.log(document.querySelector(".botao-trailer"));

const botaoTrailer = document.querySelector(".botao-trailer");

// passo 2 - Identificar quando o usuário clicar no botão 
botaoTrailer.addEventListener("click", () => {
     console.log("CLICOU NO BOTÃO VEJA O TRAILER")
     //   -passo 4 - Abrir a modal(popup) na tela. 
     //adicionando uma classe através do JS no HTML 
    modal.classList.add("aberto");

});

// passo 3 -  Pegar o Elemento da modal no JS 

const modal = document.querySelector(".modal");

//Objetivo 2 - Quando o Usuário clicar no X, devemos fechar a modal.
 //   -passo 1 - pegar o elemento de fechar modal usando o JS
 const botaoFecharModal = document.querySelector(".fechar-modal");

 //   -passo 2 - identificar quando o usuario clicar no X

    botaoFecharModal.addEventListener('click', () =>{
//   -passo 3 - Fechar Modal
    modal.classList.remove("aberto");
    
    // Fazer o video parar de rodar mesmo após fechar a pop-up
    const video = document.getElementById("video");
    video.setAttribute("src","");
// Após o fechamento, o video vai parar de funcionar, pois setamos o valor "vazio" para o atributo SRC. Precisamos agora faze-lo voltar ao normal,para que seja reutilizado.
    const linkDoVideo = "https://www.youtube.com/embed/Cb4WV4aXBpk";
    video.setAttribute("src", linkDoVideo);
    
    });






    