// synchronous method of writing file system module

const { readFileSync, writeFileSync } = require('fs') // file system module name inside our node
// readFileSync, writeFileSync this are both methods coming from require

console.log('start')

const first = readFileSync('./content/first.txt', 'utf8') // utf8 is the encoding, the node knows how to decode the file
const second = readFileSync('./content/second.txt', 'utf8') // './content/first.txt' this is a path

writeFileSync(
    './content/result-sync.txt',
     `Here is the result : ${first}, ${second}`,
      { flag: 'a' } // this is an object creating a new value
     ) // if this file ./content/result-sync.txt is already in your folder having texts
     // node will by default over write a new text 
console.log('done with this task')
console.log('starting the next one')

// NB: readFileSync, writeFileSync are also functions
