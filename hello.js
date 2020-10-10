// 변수 선언법 
// var, let, const

// var
var vv = '123'
console.log(vv)

var vv = '321'
console.log(vv)

// let
let ll = '123'
console.log(ll)

//가능
// ll = '321';
//불가능
// let ll = '321'; 

const cc = '123'
console.log(cc)

//불가능
// cc = '321'
// const cc = '321'

if(true){
    var x = 'var';
}
console.log(`var: ${x}`);

if(true){
    let y = 'let';
}
//console.log(`let: ${y}`);

function colorFunc(){
    if(true){
        var color = 'blue';
        console.log(color);
    }
    console.log(color);
}

//console.log(color);
colorFunc();



