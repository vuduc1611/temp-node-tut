// globals = no windows
// __dirname - path to current directory
// __filename - file name
// require  - function to use modules
// process - info ablout env where the program is being executed

const os = require('os')

// info about current user

const user = os.userInfo()

//method returns the system uptime is seconds
console.log(user)
console.log(`The System Uptime is ${os.uptime()} seconds`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMen: os.freemem(),
}

console.log(currentOS)