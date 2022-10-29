// here is an example of base modules ( also HTTP modules )
const http = require('http')

const server = http.createServer((req, res) => { // createServer method looking for a call back function
    if(req.url === './') {  // the req is a giant object with bunch of useful info
    res.end('Welcome to our home page') // sending back res.end()
    }
    if(req.url === '/about') {
    res.end('Here is our short history')
    }
    // here is a default response
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
}) // req parameter as an object represents the incoming request
// the response is what we are sending back

server.listen(5000) // the port our server is listening to  
// web servers keep on listening for requests