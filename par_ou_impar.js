
function ParOuImpar() {

  var x = prompt("X = ")
  x = parseInt(x)

  var y = prompt("Y = ")
  y = parseInt(y)

  alert(x - y)

  if (x % 2 === 0) {
    alert("X é PAR!")
  } else {
    alert("X é Ímpar!")
  }
}