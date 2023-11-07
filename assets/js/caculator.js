let display = document.querySelector("#display");
let num1 = "";
let num2 = "";
let operator = null;
let num1Int = 0;
let num2Int = 0;
let result = 0;
let numberOperator = 0;
let arrayOfOperator = [];
const delBtn = document.querySelector(".del");

function operatorToCaculate(element) {
    operator = element;
    arrayOfOperator.push(operator);
    numberOperator += 1;
    if (numberOperator > 1) {
        if (num1 !== "" && num2 !== "") {
            equal(arrayOfOperator[numberOperator - 2]);
            num1 = `${result}`;
            num2 = "";
        }
        
    }
}

const add = (item) => {
    // operator = "add";
    operatorToCaculate(item);
};
const subtract = (item) => {
    // operator = "subtract";
    operatorToCaculate(item);
};
const multiply = (item) => {
    // operator = "multiply";
    operatorToCaculate(item);
};
const divide = (item) => {
    // operator = "divide";
    operatorToCaculate(item);
};

function checkDots(str) {
    // const re = new RegExp(".", 'g');
    const count = (str.match(/\./g) || []).length;
    // console.log(count);
    return count
}

const addNumber = (number) => {
    if (operator === null) {
        num1 = num1.concat(number);
        display.textContent = num1;
    }
    else {
        num2 = num2.concat(number);
        display.textContent = num2;
    }
};

delBtn.addEventListener("click", () => {
    if (operator === null) {
        num1 = num1.slice(0, -1);
        display.textContent = num1;
    }
    else {
        num2 = num2.slice(0, -1);
        display.textContent = num2;
    }
});

const equal = (item) => {
    if (item === undefined) {
        item = operator;
    }
    
    num1Int = checkDots(num1) <= 1 ?  num1Int = parseFloat(num1) : num1Int = NaN;
    num2Int = checkDots(num2) <= 1 ?  num2Int = parseFloat(num2) : num2Int = NaN;
    
    switch(item) {
        case "add":
            result = num1Int + num2Int;
            break;
        case "subtract":
            result = num1Int - num2Int;
            break;
        case "multiply":
            result = num1Int * num2Int;
            break;
        case "divide":
            result = num1Int / num2Int;
            break;
    }
    console.log(`num1: ${num1}, num2: ${num2}, operator: ${item}, result: ${result}`);
    display.textContent = `${result}`;
};

const clearCalc = () => {
    num1 = "";
    num2 = "";
    num1Int = 0;
    num2Int = 0;
    result = 0;
    numberOperator = 0;
    operator = null;
    arrayOfOperator = [];
    display.textContent = "";
};

