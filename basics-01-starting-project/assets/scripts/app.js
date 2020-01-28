const defaultResult = 0;
let currentResult = defaultResult;


function add() {

    currentResult += +userInput.value; //el operador + delante de userInput.value convierte ese string a intiger 
    outputResult(currentResult, '');    
}


addBtn.addEventListener('click', add);