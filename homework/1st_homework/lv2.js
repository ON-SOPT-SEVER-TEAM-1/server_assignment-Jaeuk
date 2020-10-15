// level 2
console.log('*****Level 2*****');
const myTeam = [
    {
        name: '양재욱',
        live: '잠원동',
        age: 25,
        hobby: '컴퓨터 게임',
        getInfo: function () {
            console.log(`이름: ${this.name}, 거주지: ${this.live}, 나이: ${this.age}, 취미: ${this.hobby}`);
        }
    },
    {
        name: '신지혜',
        live: '쌍문동',
        age: 23,
        hobby: '산책',
        getInfo: function () {
            console.log(`이름: ${this.name}, 거주지: ${this.live}, 나이: ${this.age}, 취미: ${this.hobby}`);
        }
    },
    {
        name: '이수진',
        live: '일산',
        age: 23,
        hobby: '만보걷기',
        getInfo: function () {
            console.log(`이름: ${this.name}, 거주지: ${this.live}, 나이: ${this.age}, 취미: ${this.hobby}`);
        }
    },
    {
        name: '석영현',
        live: '숭실대입구',
        age: 23,
        hobby: '노래하기',
        getInfo: function () {
            console.log(`이름: ${this.name}, 거주지: ${this.live}, 나이: ${this.age}, 취미: ${this.hobby}`);
        }
    },
    {
        name: '이현주',
        live: '숙대입구',
        age: 24,
        hobby: '넷플릭스',
        getInfo: function () {
            console.log(`이름: ${this.name}, 거주지: ${this.live}, 나이: ${this.age}, 취미: ${this.hobby}`);
        }
    }
]

myTeam.forEach(
    element => {
        element.getInfo()
    }
)