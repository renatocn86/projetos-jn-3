
function NumerosPrimos() {

  var b = prompt()
  b = parseInt(b)
  g = true

  for (let i = 2; i <= b; i++) {
    if (b % i === 0 && b !== i) {
      g = false
      alert(b + " Não é primo")
      break
    }
  }
  if (g) {
    alert(b + " É primo")
  }
}