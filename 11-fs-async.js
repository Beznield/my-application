// asynchronous method of writing file system module

const { readFile, writeFile } = require('fs') // file system module name inside our node
// readFile, writeFile this are both methods coming from require

console.log('start')

readFile('./content/first.txt', 'utf8', (err, result) => { // utf8 the encoding node decodes
  // ./content/first.txt', 'utf8 calling a call back function
    if (err) {
    console.log(err)
    return;
   }
   const first = result;  // running the call backs err and result
   readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return;
       }
       const second = result // running the call backs err and result
       writeFile(
        './content/result-async.txt',
        `Here is the result : ${first}, ${second}`
        ,(err, result) => {
            if(err){
                console.log(err)
                return;
            }
            console.log('done with this task')
        })
   })
})
console.log('starting the next one')
// also note readFile is taking in arguments ./content/second.txt', 'utf8',(err, result) 
// also note readFile, writeFile are also functions