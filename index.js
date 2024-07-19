
var displayValue = '';

var display = document.getElementById('display');

display.value = "0";

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('zero');

var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var equal = document.getElementById('equal');
var clear = document.getElementById('clear');



let numbers = [];
let signs = ""



function calculate(sign, value1, value2) {

console.log(sign,value1,value2);

    var total = 0;

    switch (sign) {
        case '+':
            total = parseInt(value1) + parseInt(value2);
            break;
        case '-':
            total = parseInt(value1) - parseInt(value2);
            break;
        case '*':
            total = parseInt(value1) * parseInt(value2);
            break;
        case '/':
            total = parseInt(value1) / parseInt(value2);
            break;
    }

    return total;

}

function enterNumber(strNumber){
    if (display.value.charAt(0) === '0') {
        display.value = display.value.substring(1);
    }

    display.value = display.value + strNumber;
}


one.addEventListener('click', function () {

    enterNumber("1");

});

two.addEventListener('click', function () {

    enterNumber("2");

});

three.addEventListener('click', function () {

    enterNumber("3");
 
});

four.addEventListener('click', function () {

    enterNumber("4");
   
});

five.addEventListener('click', function () {

    enterNumber("5");

});

six.addEventListener('click', function () {

    enterNumber("6");
 
});

seven.addEventListener('click', function () {
   
    enterNumber("7");
});

eight.addEventListener('click', function () {
    
    enterNumber("8");
});

nine.addEventListener('click', function () {
 
    enterNumber("9");
});

zero.addEventListener('click', function () {
    // Add your event listener logic here
    display.value = display.value + "0";
});

plus.addEventListener('click', function () {
    signs = "+"
    numbers.push(parseInt(display.value));
    display.value = "0";
});

minus.addEventListener('click', function () {
    signs = "-"
    numbers.push(parseInt(display.value));
    display.value = "0";
});

multiply.addEventListener('click', function () {
    signs = "*"
    numbers.push(parseInt(display.value));
    display.value = "0";
});

divide.addEventListener('click', function () {
    signs = "/"
    numbers.push(parseInt(display.value));
    display.value = "0";
});


clear.addEventListener('click', function () {
    signs = "";
    numbers = [];
    display.value = "0";
});


equal.addEventListener('click', function () {
    // Add your event listener logic here
var number = calculate(signs,numbers[0],display.value);
console.log(number);

if(number <0){
    display.value = `${number * -1}-`;
}else{
    display.value = number.toString();
}




});





