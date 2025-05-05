const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function deleteChar(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    let expression = display.value;
    let operator = '';
    let index = -1;

    if(expression.includes('+')){
        operator = '+';
        index = expression.indexOf('+');
    }
    if(expression.includes('-')){
        operator = '-';
        index = expression.indexOf('-');
    }
    if(expression.includes('x')){
        operator = 'x';
        index = expression.indexOf('x');
    }
    if(expression.includes('/')){
        operator = '/';
        index = expression.indexOf('/');
    }

    if(index !== -1){
        let first = parseFloat(expression.slice(0,index));
        let second = parseFloat(expression.slice(index + 1));

        let result = 0;

        if(operator === '+'){
            result = first + second;
        }
        else if(operator === '-'){
            result = first - second;
        }
        else if(operator === 'x'){
            result = first * second;
        }
        else if(operator === '/'){
            if(second != 0){
                result = first / second;
            }
            else{
                result = 'Error';
            }
        }
        display.value = result;
    }  
    else{
        display.value = 'Invalid';
    }  
}