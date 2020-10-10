console.log('--------------');
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(symbol1.description)
console.log(symbol1 === symbol2);

console.log('--------------');

const includes = Symbol('커스텀 includes 함수');

Array.prototype[includes] = function() {
  return 'its Symbol';
}

var arr = [1, 2, 3];
console.log(arr.includes(1)); // true, JS 기본 includes 함수
console.log(arr['includes'](1)); // true, JS 기본 includes 함수
console.log(arr[includes]()); // its Symbol, 커스텀 includes 함수



// null, undefined
console.log('--------------');

let nothing = null;
console.log(`nothing: ${nothing}, type: ${typeof nothing}`); //object (EcmaScript의 설계상 오류로 원래는 null 이어야함.)

let t;
console.log(`t: ${t}, type ${typeof t}`); //undefined

// null vs undefined
console.log('null vs undefined');
console.log('null === undefined: ', null === undefined); // 동등연산자
console.log('null == undefined: ', null == undefined); // 일치연산자