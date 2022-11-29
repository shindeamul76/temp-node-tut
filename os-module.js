const os = require("os");


const user = os.userInfo();

console.log(user)

const object = {
    Type: os.type(),
    Memory: os.freemem(),
    Release: os.release(),
    Run_Time: os.uptime(),
}

console.log(object)