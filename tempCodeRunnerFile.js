// 비슷한 구조의 객체를 자동적으로 만들어주는 함수
function computerClass (name, professor, classno){
    this.name = name;
    this.professor = professor;
    this.classno = classno;
    this.printInfo = function (){
        console.log(this.name + '강의' + this.classno + '분반 입니다. 교수님은 ' + this.professor + '입니다.');
    }
}

// 객체 생성
var class1 = new computerClass('운영체제', '홍길동', '2');

class1;

class1.printInfo();