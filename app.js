const express = require('express');
app = express();
const PORT = 9000;

const debug = require('debug')('app');
const morgan = require('morgan');
const chalk = require('chalk');
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use('/src',express.static('src'));
app.use(morgan('combined'));
app.use(express.urlencoded({extended: true}));

//  content
app.get('/',(req,res)=>{
    res.render('home');
})

//end

app.use('/',(req,res)=>{
    res.status(404).render('status404');
})

app.listen(PORT,()=>{
    debug('port: ' + chalk.blue(PORT) + ' ON');
});  