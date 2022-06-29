let h1first = document.getElementById("first");
let newH1 = document.createElement("h1");
newH1.innerText = "Exercício 5.2 - JavaScript";
h1first.appendChild(newH1);

let newMain = document.createElement("main");
newMain.className = "main-content";
h1first.appendChild(newMain);

let firstSection = document.getElementById("firstMain");
let newSection = document.createElement("section");
newSection.className = "center-content";
firstSection.appendChild(newSection);

let newTag = document.createElement('p');
newTag.innerText = " çsauidnvajvnaçjfvnaçjvnaçfjknadfj";
firstSection.appendChild(newTag);

let tag2 = document.createElement('section');
tag2.className = "right-content";
firstSection.appendChild(tag2)


