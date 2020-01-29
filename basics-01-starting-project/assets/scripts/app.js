const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];



function getUserNumberInput() {
    return +userInput.value; //el operador + delante de userInput.value convierte ese string a intiger 
}


function showOutput (operator,resultBeforeCalc,calcNumber) {

        outputResult(currentResult,createOutput(operator,resultBeforeCalc,calcNumber));
}



function createOutput (operator, resultBeforeCalc, calcNumber) {

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


function add() {

    const resultBeforeCalc = currentResult;
    currentResult += getUserNumberInput(); 
    showOutput('+',resultBeforeCalc,getUserNumberInput());
    writeToLog('ADD', resultBeforeCalc ,getUserNumberInput(), currentResult);

}

function substract() {

    const resultBeforeCalc = currentResult;
    currentResult -= getUserNumberInput(); 
    showOutput('-',resultBeforeCalc,getUserNumberInput());
    writeToLog('SUB', resultBeforeCalc ,getUserNumberInput(), currentResult);
    
}


function multiply() {

    const resultBeforeCalc = currentResult;
    currentResult *= getUserNumberInput(); 
    showOutput('*',resultBeforeCalc,getUserNumberInput());
    writeToLog('MULTIPLY', resultBeforeCalc ,getUserNumberInput(), currentResult);
    
}



function divide() {

    const resultBeforeCalc = currentResult;
    currentResult /= getUserNumberInput(); 
    showOutput('/',resultBeforeCalc,getUserNumberInput());
    writeToLog('DIVIDE', resultBeforeCalc ,getUserNumberInput(), currentResult);
    
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);