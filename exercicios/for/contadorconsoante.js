// Contar quantas consoantes tem na palavra

const palavra = "Javascript"

let  consoantes = 0;

// textos são parecidos com arrays
// cada letra é um elemento

console.log(palavra[0]);
console.log(palavra.length);

// case sentitive
// A == a > false,
console.log(palavra[0].toLowerCase() == "j")

// JavaScript é case sensitive

for (let i = 0; i < palavra.length; i++){
  let letra = palavra[i].toLocaleLowerCase();

  if (
    letra != "a" &&
    letra != "e" &&
    letra != "i" &&
    letra != "o" &&
    letra != "u"
  ) {
    consoantes++;
  }
}

console.log(`Contagem de consoantes ${consoantes}`)

