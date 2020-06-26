// js-study

// Boolean
var bool1 = true;
var bool2 = flase;

console.log(typeof bool1);
console.log(typeof bool2);

// Number
var num1 = 2;
var num2 = 3;

// 동등연산자 vs 일치연산자
// 자료형을 일치시킨뒤 비교 vs 자료형도 비교 대상에 포함
//  0 == '0' -> true vs o === '0' -> false

// String 
// 인덱스에 매칭되는 데이터의 집합
// 한 번 선언되면 변환 불가
var name = "홍길동";
name[2] = "순";
console.log(name);

// 문자열을 다루는 메서드
// length search slice replace concat

// null
// 아무 값도 갖지 않음을 뜻하는 자료형
// null 타입 검사할 때는 === 사용

// undefined
// 변수를 선언하고 값 할당을 안 한 경우
// 존재하지 않는 객체로 접근한 경우

// Wrapper 객체