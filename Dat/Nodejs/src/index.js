
const path = require('path');

const express = require('express');

const handlebars = require('express-handlebars');

//const morgan = require('morgan') 

const app = express();

const port = 3000;

// HTTP logger
//app.use(morgan('combined')) 

// Template engine (using onetemplate for all html files)
app.engine('.hbs', handlebars.engine({
  defaultLayout: 'main',  // Set default layout
  extname: '.hbs'
})); 
app.set('view engine', '.hbs'); // Set view engine
app.set('views', path.join(__dirname, 'resources/views')); // Set path for views


app.get('/', (req, res) => {
  res.render('home');
})

app.get('/test', (req, res) => {
  res.render('test');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})