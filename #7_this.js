// binding
// 호출한 대상에게 실제 함수를 연결 짓는 것

var myObject = {
    name : '홍길동';
    sayName : function() {
        console.log(this.name);
    }
}

var otherObject = {
    name: '장보고';
}

otherObject.sayName = myObject.sayName;

// 전역객체
// 코드 전체를 아우르는 객체

// Js in browser : window 객체
// Js in server side : global 객체

// 함수는 사실 전역 객체의 메서드
// 전역 변수도 사실 전역 객체의 속성

function myFunc() {
    console.log("this 값 : ", this);
}
myFunc();
Window.myFunc();

// 일반적인 함수 호출의 this는 전역 객체를 가리킨다

// 객체의 메서드에서 사용된 this는 그 메서드를 호출한 객체로 바인딩 된다

// 생성자 함수에서의 this는 그 생성자 함수를 통해 생성되어 반환되는 객체에 바인딩된다

// 생성자 함수 vs 일반 함수
// new로 새로운 객체를 만들면 생성자 함수
// 그냥 호출되어 쓰이면 일반함수