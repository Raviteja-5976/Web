const result = document.getElementById('result')

function appendToResult(value) {
  result.value += value
}

function clearResult() {
  result.value = ''
}

function calculate() {
  try {
    result.value = eval(result.value)
  } catch (error) {
    result.value = 'Error'
  }
}

document.addEventListener('keydown', function(event) {
  const key = event.key
  if ((key >= '0' && key <= '9') || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
    appendToResult(key)
  } else if (key === 'Enter') {
    calculate()
  } else if (key === 'Escape') {
    clearResult()
  }

});