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
    for (var i = 0; i < member.length; i++) {
        let m = member[i];
        if (m.status === 'YB') {
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

for (var i = 0; i < ob.length; i++) {
    if (i >= 0 && i < 3) {
        team1.push(ob[i]);
    } else if (i >= 3 && i < 6) {
        team2.push(ob[i]);
    } else if (i >= 6 && i < 9) {
        team3.push(ob[i]);
    } else if (i >= 9 && i < 12) {
        team4.push(ob[i]);
    } else {
        team5.push(ob[i]);
    }
}

for (var i = 0; i < yb.length; i++) {
    if (i >= 0 && i < 4) {
        team1.push(yb[i]);
    } else if (i >= 4 && i < 8) {
        team2.push(yb[i]);
    } else if (i >= 8 && i < 12) {
        team3.push(yb[i]);
    } else if (i >= 12 && i < 16) {
        team4.push(yb[i]);
    } else {
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