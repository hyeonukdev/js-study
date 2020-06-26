// 분기문
// 조건에 따라 달리 코드의 흐름을 제어하고자 할 때

// if ~ else
if (조건){
    // 조건이 참이면 실행
}else{
    /// 아니면 실행
}

// 삼항 연산자
// 조건식 ? 참이면 이코드 : 거짓이면 이 코드 
var traffic = 'green';
(traffic == 'green') ? console.log('go') : console.log('stop');

// 반복문
// 특정 조건을 만족할 동안 반복하라는 문법
for ( 초기화식; 조건식; 증감식 ){
    // 조건식이 참이면 반복 실행될 코드
}

for (var i =0; i< 10; i++){
    console.log(i);
}

while ( 조건 ){
    // 조건이 참일 동안 반복할 코드
}

// 반복하다가 종료
// break : n번째 종료
// continue : n+1번째 종료