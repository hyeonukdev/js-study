// 일급 객체로서의 함수
// 1. 변수에 대입이 가능
// 2. 다른 함수의 인자나 리턴값으로 활용 가능
// 3. 배열, 객체 등의 자료구조에 대입 가능

function addNumber(num1, num2) {
    return num1 + num2;
}

var add = function (num1, num2) {
    return num1 + num2;
}

// ----------------------------

var sub = function (num1, num2) {
    return num1 - num2;
}

var cal = [add, sub];

console.log(cal[0](2, 3));
console.log(cal[1](2, 3));

