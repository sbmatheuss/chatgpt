var n1 = 10
var n2 = 6
var op = ''
if (op == '+' ) {
  var tot = n1 + n2
  console.log(`Total: ${tot}`)
} else if (op == '-') {
  var tot = n1 - n2
  console.log(`Total: ${tot}`)
} else if (op == '*') {
  var tot = n1 * n2
  console.log(`Total: ${tot}`)
} else if (op == '/') {
  var tot = n1 / n2
  console.log(`Total: ${tot.toFixed(2)}`)
} else {
  console.log(`[ERRO] Operador não reconhecido!`)
}