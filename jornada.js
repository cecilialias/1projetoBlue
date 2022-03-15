console.clear();
const prompt = require("prompt-sync")();

console.log("Um aniversario feliz?!")

console.log("");
console.log("Uma garotinha recebeu uma missão de sua mãe, de compra os preparativos da festa de seu irmão menor. \nIndo ao mercado ela esquece do que compra para o aniversário.")
console.log();
console.log("Ajude a pobre garotinha a compra itens certos para fazer a festa de aniversário.");
console.log("Digite [sim] ou [nao] para suas escolhas");
console.log();
let pergunta = [];

let i = 0;

pergunta.push(
  prompt("Compra uma pinhata? ").toUpperCase());

while (pergunta[i] != "SIM" && pergunta[i] != "NAO") {
  console.log("Compra uma pinhata? ");
  pergunta[i] = prompt("Responda com sim ou nao: ").toUpperCase();
  console.clear();
}

i++;

pergunta.push(
  prompt("Compra balões? ").toUpperCase()
);

while (pergunta[i] != "SIM" && pergunta[i] != "NAO") {
  console.log("Compra balões? ");
  pergunta[i] = prompt("Responda com sim ou nao: ").toUpperCase();
  console.clear();
}

i++;

pergunta.push(
  prompt("Procurando por confetes, ela ver o doce favorito dela, compra o doce? ").toUpperCase()
);

while (pergunta[i] != "SIM" && pergunta[i] != "NAO") {
  console.log("Procurando por confetes, ela ver o doce favorito dela, compra o doce?  ");
  pergunta[i] = prompt("Responda com sim ou nao: ").toUpperCase();
  console.clear();
}

i++;

pergunta.push(
  prompt("Compra os salgadinhos? ").toUpperCase()
);

while (pergunta[i] != "SIM" && pergunta[i] != "NAO") {
  console.log("Compra os salgadinhos? ");
  pergunta[i] = prompt("Responda com sim ou nao: ").toUpperCase();
  console.clear();
}

i++;

pergunta.push(
  prompt("Compra brigadeiros? ").toUpperCase()
);

while (pergunta[i] != "SIM" && pergunta[i] != "NAO") {
  console.log("Compra brigadeiros? ");
  pergunta[i] = prompt("Responda com sim ou nao: ").toUpperCase();
  console.clear();
}

for (let j = 0; j < 5; j++) {
  if (pergunta[j] == "SIM") {
    pergunta[j] = 1;
  } else if (pergunta[j] == "NAO") {
    pergunta[j] = 0;
  }
  if (pergunta[j] == "SIM") {
    pergunta[j] = 1;
  } else if (pergunta[j] == "NAO") {
    pergunta[j] = 0;
  }
  if (pergunta[j] == "SIM") {
    pergunta[j] = 1;
  } else if (pergunta[j] == "NAO") {
    pergunta[j] = 0;
  }
  if (pergunta[j] == "SIM") {
    pergunta[j] = 1;
  } else if (pergunta[j] == "NAO") {
    pergunta[j] = 0;
  }
  if (pergunta[j] == "SIM") {
    pergunta[j] = 1;
  } else if (pergunta[j] == "NAO") {
    pergunta[j] = 0;
  }
}

const soma = pergunta[0] + pergunta[1] + pergunta[2] + pergunta[3] + pergunta[4];

if (soma == 0) {
  console.log("\nFesta estragada, sua mãe está decepcionada com você e seu irmão está triste. Faça boas escolhas na próxima vez.");
} else if (soma == 1 || soma == 2) {
  console.log("\nFesta incompleta. Seu irmão está até que alegre, mas sua mãe está começando a pensa que não deveria confia tanto assim em você!");
} else if (soma == 3) {
  console.log("\nQuasse lá, sua mãe reconhece que você deu o seu melhor, pelo menos seu irmão esta alegre, pense bem na próxima vez.");
} else if (soma == 4) {
  console.log("\nFesta concluída com sucesso, todos estão felizes, e sua mãe está orgulhosa. Parabéns por conseguir!");
} else {
  console.log("\nVocê deu tudo de si, a festa está boa e todos estão alegres, sua mãe não está decepcionada com você relaxe até que foi bem!");
}

console.log();
