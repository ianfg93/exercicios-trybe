let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: { golden: 2, silver: 3 },
  bestInTheWorld: {
    ano: [2006, 2007, 2008, 2009, 2010, 2018],
  },
};
let anoMelhor = 0;
for (let index = 0; index < player.bestInTheWorld.ano.length; index += 1) {
  anoMelhor += 1;
}
console.log("Nome: ", player["name"] + " ", player["lastName"]);
console.log("Idade : ", player["age"]);
console.log('A jogadora', player['name'] + ' ', 'foi eleita a melhor do mundo por', [anoMelhor] + ' ','vezes');
console.log('A jogadora possui' , player.medals['golden'] + ' medalhas de ouro e ' + player.medals['silver'] + ' de prata');
