let input = document.querySelector('input');
input.setAttribute('value', '0');

let num = '';
let num2 = '';
let sign = '';

const numbers = document.querySelectorAll('#num');
const add = document.querySelector('.button16');
const minus = document.querySelector('.button12');
const multiply = document.querySelector('.button8');
const divide = document.querySelector('.button4');
const resultSign = document.querySelector('.button19');
const perсent = document.querySelector('.button2');
const plusMinusSign = document.querySelector('.button3');
const reset = document.querySelector('.button1');


const calc = function() {

    const getNumber = function() {
        
        if (num2 === '' && sign === '') {
            if (input.value == '0') input.value = '';
            num = this.innerHTML;
            input.value += num;
    
            num = input.value;
            num = +num;
            
            return;
        } else {
            if (input.value == '0') input.value = '';
            num2 = this.innerHTML;
            input.value += num2;
            
            num2 = input.value;
            num2 = +num2;
            
            return;
        }
    };
    numbers.forEach(function(element) {
        element.addEventListener('click', getNumber);
    });


    const getPerсent = function() {
        num = num / 100;
        input.value = num;
        return;
    };
    perсent.addEventListener('click', getPerсent);


    const getPlusMinusReplace = function() {
        if (!sign) {
            num = -num;
            input.value = num;
        } else {
            num2 = -num2;
            input.value = num2;
        }
    };
    plusMinusSign.addEventListener('click', getPlusMinusReplace)


    const getSign = function() {
        input.value = '0';
        sign = this.innerHTML;
        return;
    };
    add.addEventListener('click', getSign);
    minus.addEventListener('click', getSign);
    multiply.addEventListener('click', getSign);
    divide.addEventListener('click', getSign);


    const operation = function() {
        
        input.value = '0';
        if (num2 === '') num2 = num;
        console.log(num, num2, sign);

        switch (true) {
            case (sign === '+'):
                num = num + num2;
                showResult();
            break;
            case (sign === '-'):
                num = num - num2;
                showResult();
            break;
            case (sign === '*'):
                num = num * num2;
                showResult();
            break;
            case (sign === '/'):
                num = num / num2;
                showResult();
            break;
        };
    };
    resultSign.addEventListener('click', operation);


    const showResult = function() {
        input.value = num;
        console.log(num);
    };


    const fullReset = function() {
        location.reload();
    };
    reset.addEventListener('click', fullReset);
}

calc();