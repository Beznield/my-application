// MODULES

// CommonJS, every file is a module (by default) 
// modules - Encapsulated Code (only share minimum)
const names = require('./4-names') // here is the path, the names could also be {john, peter}
const sayHi = require('./5-utils') // another path
const data = require('./6-alternative') // it could be given any import name 
require('./7-calculation') // the module has a function, we do not need to pass a variable

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

// every file in nodeJS is a module