const http = require('http');
const express = require('express');
const morgan  =  require('morgan');
const bodyParser = require('body-parser')
const dishesRouter = require('./routes/dishesRouter')
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

app.use(bodyParser.json());

app.use('/dishes', dishesRouter)
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an express application</h1></body></html>')
});

const server = http.createServer(app);
server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}`)
});