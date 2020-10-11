// level 2
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
        hobby: '독서',
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
        hobby: '솝트',
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
let member = [
    {
        "name": "최정재",
        "part": "Server",
        "status": "OB",
        "gender": "남"
    },
    {
        "name": "박경선",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "신연상",
        "part": "Server",
        "status": "OB",
        "gender": "남"
    },
    {
        "name": "정효원",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "류세화",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "이가영",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "이영현",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "남궁찬",
        "part": "Server",
        "status": "OB",
        "gender": "남"
    },
    {
        "name": "김민주",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "최정훈",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "박주은",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "이현준",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "김수민",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "김현상",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "김채림",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "이현상",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "홍혜진",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "오승준",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "양재욱",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "최선준",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "박상수",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "임찬기",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "박진호",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "신지한",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "김영은",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "송정훈",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "강준수",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "김중현",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "김기찬",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "김우영",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "윤가인",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "이예진",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "박수진",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "최다슬",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "한승아",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "김재은",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    }
]

console.log(member.length);

let team1 = [];
let team2 = [];
let team3 = [];
let team4 = [];
let team5 = [];

let yb = [];
let ob = [];

// let randomNum = () => {
//     return Math.floor(Math.random() * member.length);
// }


let ybob = () => {
    for(var i = 0; i < member.length; i++){
        let m = member[i];
        if(m.status === 'YB'){
            yb.push(m);
        } else {
            ob.push(m);
        }
    }
}

ybob();

yb.forEach(
    element => {
        console.log('yb: ' + element.name)
    }
)

ob.forEach(
    element => {
        console.log('ob: ' + element.name)
    }
)

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