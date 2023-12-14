const qS = (el) => document.querySelector(el);
const qSA = (el) => document.querySelectorAll(el);

const elDisplay = qS('.display');

let numberDisplay = '';
let number1 = 0;
let number2 = 0;
let resultOper = 0;
let oper = '';


const renderDisplay = ()=>{

if(numberDisplay == ''){
    elDisplay.innerHTML = '0';
}else{
    elDisplay.innerHTML = '';
    elDisplay.innerHTML += numberDisplay;
}

}

const sum = ()=>{
    if(number1 == 0){
        number1 = parseFloat(numberDisplay);
        numberDisplay = '';
    }else{
        number2 = parseFloat(numberDisplay);
        resultOper = number1 + number2;
        result();
    }
    
    oper = 'sum';
}   

const minus = ()=>{
    if(number1 == 0){
        number1 = parseFloat(numberDisplay);
        numberDisplay = '';
    }else{
        number2 = parseFloat(numberDisplay);
        resultOper = number1 - number2;
        result();
    }
    oper = 'minus';
}

const mult = ()=>{
    if(number1 == 0){
        number1 = parseFloat(numberDisplay);
        numberDisplay = '';
    }else{
        number2 = parseFloat(numberDisplay);
        resultOper = number1 * number2;
        result();
    }
    oper = 'mult';
}

const division = ()=>{
    if(number1 == 0){
        number1 = parseFloat(numberDisplay);
        numberDisplay = '';
    }else{
        number2 = parseFloat(numberDisplay);
        resultOper = number1 / number2;
        result();
    }
    
    oper = 'division';
}

const percent = ()=>{
    if(numberDisplay == ''){
        numberDisplay = 0;
    }else{
        numberDisplay = parseFloat(numberDisplay);
    }
    numberDisplay /= 100;
    renderDisplay();
}

const inverseSign = ()=>{
    if(numberDisplay == ''){
        numberDisplay = 0;
    }else{
        numberDisplay = parseFloat(numberDisplay);
    }
    numberDisplay *= (-1);
    renderDisplay();
}

const addDot = ()=>{
    if(numberDisplay == ''){
        numberDisplay = '0';
    }
    
    numberDisplay += '.';
    renderDisplay();
}




const result = ()=>{

    switch(oper){
        case 'sum':
            if(number1 == 0){
                console.log('AAAAA')
                resultOper += number2;
                numberDisplay = resultOper.toString();
                renderDisplay();
            }
            else if(number2 == 0){
                console.log('BBBB')
                number2 = parseFloat(numberDisplay);
                resultOper = number1 + number2;
                numberDisplay = resultOper.toString();
                renderDisplay();
                number1 = 0;
        
            }else{
                console.log('CCCCC')
                number2 = parseFloat(numberDisplay);
                resultOper = number1 + number2;
                numberDisplay = resultOper.toString();
                renderDisplay();
                number1 = 0;
            }
            break;

        case 'minus':
            if(number1 == 0){
                resultOper -= number2;
                numberDisplay = resultOper.toString();
                renderDisplay();
            }
            else if(number2 == 0){
                number2 = parseFloat(numberDisplay);
                resultOper = number1 - number2;
                numberDisplay = resultOper.toString();
                renderDisplay();
                number1 = 0;
        
            }else{
                number2 = parseFloat(numberDisplay);
                resultOper = number1 - number2;
                numberDisplay = resultOper.toString();
                renderDisplay();
                number1 = 0;
            }
            break;
        case 'mult':
            if(number1 == 0){
                resultOper *= number2;
                numberDisplay = resultOper.toString();
                renderDisplay();
            }
            else if(number2 == 0){
                number2 = parseFloat(numberDisplay);
                resultOper = number1 * number2;
                numberDisplay = resultOper.toString();
                renderDisplay();
                number1 = 0;
        
            }else{
                number2 = parseFloat(numberDisplay);
                resultOper = number1 * number2;
                numberDisplay = resultOper.toString();
                renderDisplay();
                number1 = 0;
            }
            break;
        case 'division':
            if(number1 == 0){
                resultOper /= number2;
                numberDisplay = resultOper.toString();
                renderDisplay();
            }
            else if(number2 == 0){
                number2 = parseFloat(numberDisplay);
                resultOper = number1 / number2;
                numberDisplay = resultOper.toString();
                renderDisplay();
                number1 = 0;
        
            }else{
                number2 = parseFloat(numberDisplay);
                resultOper = number1 / number2;
                numberDisplay = resultOper.toString();
                renderDisplay();
                number1 = 0;
            }
            break;
    }

}


const clear = ()=>{
    number1 = 0;
    number2 = 0;
    oper = '';
    numberDisplay = '';

    renderDisplay();
}


const addNumber = (item)=>{
    numberDisplay += item.target.innerText;
    renderDisplay();
}




qSA('.number').forEach((item)=>{
    item.addEventListener('click', addNumber);
})

qS('.sum').addEventListener('click', sum);

qS('.minus').addEventListener('click', minus);

qS('.mult').addEventListener('click', mult);

qS('.division').addEventListener('click', division);

qS('.percent').addEventListener('click',percent);

qS('.inverseSign').addEventListener('click',inverseSign);

qS('.dot').addEventListener('click',addDot);

qS('.result').addEventListener('click', result);

qS('.clear').addEventListener('click',clear);