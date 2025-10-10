const prompt = require('prompt-sync')()
let senha_correta = "js123"
let tentativa = prompt('Digite a senha: ')


while(tentativa !== senha_correta) {
  console.log('[SENHA INCORRETA], Tente Novamente!')
  tentativa = prompt("Digite a senha: ")
}

console.log("Acesso Concedido!")
