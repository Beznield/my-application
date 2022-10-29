const os = require('os') // looking for the built in module
// i now have all the methods and properties that this module provides

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
   name:os.type(),
   release:os.release(),
   totalMem:os.totalmem(), 
   freeMem:os.freemem(),
}
console.log(currentOS)