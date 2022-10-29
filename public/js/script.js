let operation = document.getElementById("operation")
let result = document.getElementById("result")

function insert(num) {
  operation.innerHTML += num
}

function calculate() {
  if (operation) {
    result.innerHTML = eval(operation.innerHTML)
  }
}

function clean() {
  operation.innerHTML = ""
  result.innerHTML = ""
}
