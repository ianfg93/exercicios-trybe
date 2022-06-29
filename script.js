      /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p>-----</p> para uma descrição de como você se vê daqui 
 a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

 // 1 - Crie uma função que mude o texto na tag <p>-----</p>
document.getElementById("text-princ").innerText = "Me vejo estruturado e dominante na programação";

// 2 - Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe
document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(79, 164, 109)";

// 3 -  Crie uma função que mude a cor do quadrado vermelho para branco.
document.getElementsByClassName("center-content")[0].style.backgroundColor = "white";

// 4 - Crie uma função que corrija o texto da tag <h1>.
document.getElementsByClassName("title")[0].innerText = "Exercício 5.1 - Javascript";

// 5 - Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
const tudoMaiusc = document.getElementsByTagName ("p");
for (maiusculo of tudoMaiusc)
maiusculo.innerText = maiusculo.innerText.toUpperCase();

// 6 - Crie uma função que exiba o conteúdo de todas as tags <p> no console.

