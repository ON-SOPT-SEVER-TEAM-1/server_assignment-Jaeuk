// level 2
console.log('*****Level 2*****');
const myTeam = [
    {
        name: '양재욱',
        live: '잠원동',
        age: 25,
        hobby: '컴퓨터 게임',
        getInfo: function(){
            console.log(`이름: ${this.name}, 거주지: ${this.live}, 나이: ${this.age}, 취미: ${this.hobby}`);
        }
    },
    {
        name: '신지혜',
        live: '쌍문동',
        age: 23,
        hobby: '산책',
        getInfo: function(){
            console.log(`이름: ${this.name}, 거주지: ${this.live}, 나이: ${this.age}, 취미: ${this.hobby}`);
        }        
    },
    {
        name: '이수진',
        live: '일산',
        age: 23,
        hobby: '만보걷기',
        getInfo: function(){
            console.log(`이름: ${this.name}, 거주지: ${this.live}, 나이: ${this.age}, 취미: ${this.hobby}`);
        }
    },
    {
        name: '석영현',
        live: '숭실대입구',
        age: 23,
        hobby: '노래하기',
        getInfo: function(){
            console.log(`이름: ${this.name}, 거주지: ${this.live}, 나이: ${this.age}, 취미: ${this.hobby}`);
        }
    },
    {
        name: '이현주',
        live: '숙대입구',
        age: 24,
        hobby: '넷플릭스',
        getInfo: function(){
            console.log(`이름: ${this.name}, 거주지: ${this.live}, 나이: ${this.age}, 취미: ${this.hobby}`);
        }
    }
]

myTeam.forEach(
    element => {
        element.getInfo()
    }
)

// level 3
console.log('\n*****Level 3*****');
const member = require('./member');

let team1 = [];
let team2 = [];
let team3 = [];
let team4 = [];
let team5 = [];

let yb = [];
let ob = [];

let splitYBOB = () => {
    for(var i = 0; i < member.length; i++){
        let m = member[i];
        if(m.status === 'YB'){
            yb.push(m);
        } else {
            ob.push(m);
        }
    }
}

splitYBOB();

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

shuffle(yb);
shuffle(ob);

for(var i = 0;  i < ob.length; i++){
    if(i>=0 && i<3){
        team1.push(ob[i]);
    } else if(i>=3 && i<6){
        team2.push(ob[i]);
    } else if(i>=6 && i<9){
        team3.push(ob[i]);
    } else if(i>=9 && i<12){
        team4.push(ob[i]);
    } else{
        team5.push(ob[i]);
    }
}

for(var i = 0; i < yb.length; i++){
    if(i>=0 && i<4){
        team1.push(yb[i]);
    } else if(i>=4 && i<8){
        team2.push(yb[i]);
    } else if(i>=8 && i<12){
        team3.push(yb[i]);
    } else if(i>=12 && i<16){
        team4.push(yb[i]);
    } else{
        team5.push(yb[i]);
    }
}

console.log('========================');
team1.forEach(
    element => {
        console.log('team1: ' + element.name, element.status);
    }
)
console.log('========================');
team2.forEach(
    element => {
        console.log('team2: ' + element.name, element.status);
    }
)
console.log('========================');
team3.forEach(
    element => {
        console.log('team3: ' + element.name, element.status);
    }
)
console.log('========================');
team4.forEach(
    element => {
        console.log('team4: ' + element.name, element.status);
    }
)
console.log('========================');
team5.forEach(
    element => {
        console.log('team5: ' + element.name, element.status);
    }
)
console.log('========================');
