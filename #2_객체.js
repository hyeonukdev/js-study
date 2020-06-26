// 객체
// 키와 그에 매칭되는 값(데이터) 혹은 동작의 집합
// 값 = 속성, property
// 동작 = 메서드, method
Object = {
    key1 : 'key1에 매칭되는 데이터',
    key2 : 'key2에 매칭되는 데이터',
    method : function(){
        //함수로 정의
    }
}

var onClass = {
    name : '자바스크립트',
    professor : '홍길동',
    classno : 3,
    printInfo : function(){
        console.log(this.name + '강의' + this.classno + '분반. 교수는' + this.professor + '입니다.');
    }
};

onClass.name;
onClass.professor;