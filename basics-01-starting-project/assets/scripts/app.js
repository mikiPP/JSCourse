/* eslint-disable no-undef */
const defaultResult = 0;
const logEntries = [];
let currentResult = defaultResult;

function getUserNumberInput() {
  return +userInput.value; // el operador + delante de userInput.value convierte ese string a intiger
}

function showOutput(operator, resultBeforeCalc, calcNumber) {
  outputResult(
    currentResult,
    createOutput(operator, resultBeforeCalc, calcNumber)
  );
}

function createOutput(operator, resultBeforeCalc, calcNumber) {
  return `${resultBeforeCalc} ${operator} ${calcNumber}`;
}

function writeToLog(operator, resultBeforeCalc, operationNumber, newResult) {
  const logEntry = {
    operation: operator,
    prevResult: resultBeforeCalc,
    number: operationNumber,
    result: newResult,
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(operation, operator) {
  if (!getUserNumberInput()) return;

  const resultBeforeCalc = currentResult;

  switch (operation) {
    case 'ADD':
      currentResult += getUserNumberInput();
      break;

    case 'SUB':
      currentResult -= getUserNumberInput();
      break;

    case 'MULTIPLY':
      currentResult *= getUserNumberInput();
      break;

    case 'DIVIDE':
      currentResult /= getUserNumberInput();
      break;

    default:
      console.log('Operation not supported');
  }

  showOutput(operator, resultBeforeCalc, getUserNumberInput());
  writeToLog(operation, resultBeforeCalc, getUserNumberInput(), currentResult);
}

function add() {
  calculateResult('ADD', '+');
}

function substract() {
  calculateResult('SUB', '-');
}

function multiply() {
  calculateResult('MULTIPLY', '*');
}

function divide() {
  calculateResult('DIVIDE', '/');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
