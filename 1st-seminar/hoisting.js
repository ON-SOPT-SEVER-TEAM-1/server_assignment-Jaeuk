hoistFunction();

function hoistFunction(){
    console.log(x);
    var x = 'var';
    console.log(x);
}

//자바스크립트 엔진이 해석한 코드
function hoistFunction(){
    var x;
    console.log(x);
    x = 'var';
    console.log(x);
}

// 호이스팅이 일어나지 않도록 해야한다.
// 함수와 변수를 가급적 코드 상단부에서 선언하면, 호이스팅으로 인한 스코프 꼬임 현상은 방지할 수 있다.
// let, const만 사용하자.
