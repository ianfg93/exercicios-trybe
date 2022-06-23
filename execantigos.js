// ex: 1

let a = 15;
let b = 25;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// ex: 2

let c = 30;
let d = 20;

if (c > d) {
    console.log("Valor C é maior -", c);
} else {
    console.log("Valor D é maior", d);
}

// ex: 3

let e = 80;
let f = 70;
let g = 50;

if (e > f && e > g) {
    console.log("Valor E é maior -", e);
} else if (e < f && f > g) {
    console.log("Valor F é maior -", f);
} else {
    console.log("Valor G é maior -", g);
}

// ex: 4

let h = 0;

if (h > 0) {
    console.log("Valor positivo");
} else if (h < 0) {
    console.log("Valor negativo");
} else {
    console.log("Valor zero");
}

// ex: 5

let i = 10;
let j = 20;
let k = 30;

// ex: 6

let pecaXadrez = 'rei';

switch (pecaXadrez.toLowerCase) {
    case 'peão' :
        console.log('Os peões se movem somente para frente, uma casa por vez');
        break;
    case 'bispo' :
        console.log('O bispo se move em uma linha reta diagonalmente');
        break;
    case 'torre' :
        console.log('A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas');
        break;
    case 'cavalo' :
        console.log('O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto');
        break;
    case 'rainha' :
        console.log('A rainha pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente');
        break;
    case 'rei' :
        console.log('O rei pode se mover para qualquer casa adjacente')
        break;
    default :
        console.log('Peça inválida');
}

// ex: 7

let nota = 80;

if (nota >= 90 && nota <=100) {
    console.log('A');
}else if (nota >= 80 && nota < 90) {
    console.log('B');
}else if (nota >= 70 && nota < 80) {
    console.log('C');
}else if (nota >= 60 && nota < 70) {
    console.log('D');
}else if (nota >= 50 && nota < 60) {
    console.log('E');
}else if (nota < 50  && nota > 0) {
    console.log('F');
}else {
    console.log('Valor não aceito');
}

// ex: 8


