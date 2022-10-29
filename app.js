// npm - global command, comes with node
// npm -- version

// we can install package as a local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageNmae> (mac)
// NB: there is less need for setting something globaly

// package.json - manifest file (stores important info about project/package)
// here are the 3 ways to create package.json
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default) 

// when we install the first dependency lodash npm creates a folder for us in the node modules name lodash

const _ = require('lodash')

const items = [1, [2, [3, [4]]]] // this ia a method in lodash 
const newItems = _.flattenDeep(items)
console.log(newItems)

// working on external packages e.g lodash and emberding their methods