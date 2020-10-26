module.exports = {
    add: (...args) => {
        return args.reduce( (a, b) => {
            return a + b
        })
    },
    sub: (...args) => {
        return args.reduce( (a, b) => {
            return a - b
        })
    },
    mul: (...args) => {
        return args.reduce( (a, b) => {
            return a * b
        })
    },
    div: (...args) => {
        return args.reduce( (a, b) => {
            if(b === 0) return new Error('Zero Error')
            return a / b
        })
    }
}