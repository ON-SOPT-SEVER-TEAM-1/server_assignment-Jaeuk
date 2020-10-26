// level 2
const members = require('./member')

function getFemale(members){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const female = members.filter(member => member.gender === '여')
            resolve(female)
        }, 500)
    })
}

function getYB(members){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const status = members.filter(member => member.status === 'YB')
            resolve(status)
        }, 500)
    })
}

function getiOS(members){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const iOS = members.filter(member => member.part === 'iOS')
            resolve(iOS)
        }, 500)
    })
}

getFemale(members) //
    .then(result => getYB(result))
    .then(result => getiOS(result))
    .then(result => result.forEach(member => {
        console.log(`name: ${member.name}, part: ${member.part}, status: ${member.status}, gender: ${member.gender}`)
    }))

