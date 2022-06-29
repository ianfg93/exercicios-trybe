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

document.getElementById("text-princ").innerText = "Me vejo estruturado e dominante na programação";
document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(79, 164, 109)";
document.getElementsByClassName("center-content")[0].style.backgroundColor = "white";
document.getElementsByClassName("title")[0].innerText = "Exercício 5.1 - Javascript";


///////////////////////////////////
const maiusc = main-content.toUpperCase ();
document.getElementsByClassName("section").innerText = maiusc;
document.getElementsByTagName("p").innerText;
console.log(document.getElementsByClassName("p").innerText);
///////////////////////////////////