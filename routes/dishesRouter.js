const express = require('express');
const bodyParser = require('body-parser');

const dishesRouter = express.Router();

dishesRouter.use(bodyParser.json());
dishesRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); 
})
.get((req, res, next) => {
    res.end('We will send you all the dishes');
})
.post((req, res, next) => {
    const body = req.body.name;
    const desc = req.body.description;
    res.end(`Will add the dishes ${body} with details ${desc}`);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end(`Put operation not supported`);
})
.delete((req, res, next) => {
    res.end(`Deleting all dishes`);
});





module.exports = dishesRouter;