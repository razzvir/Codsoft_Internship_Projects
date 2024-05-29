let inputValue = '';

function appendInput(value) {
  inputValue += value;
  document.getElementById('result').value = inputValue;
}

function clearInput() {
  inputValue = '';
  document.getElementById('result').value = '';
}

function deleteInput() {
  inputValue = inputValue.slice(0, -1);
  document.getElementById('result').value = inputValue;
}

function calculateResult() {
  try {
    const result = eval(inputValue);
    document.getElementById('result').value = result;
    inputValue = result.toString();
  } catch (error) {
    document.getElementById('result').value = 'Error';
    inputValue = '';
  }
}