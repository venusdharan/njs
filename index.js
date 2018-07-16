const express = require('express');
const app = express();
const path = require('path');
const hbs = require('express-hbs');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const settings = require('./config/settings.js');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
if(settings.log){app.use(morgan('combined'));}
app.set('view engine', 'hbs');
app.engine('hbs', hbs.express4({  
  defaultLayout: __dirname + '/views/layouts/default.hbs',
  partialsDir: __dirname + '/views/partials',
  layoutsDir: __dirname + '/views/layouts'
}));
app.use(express.static('static'));
app.set('views', path.join(__dirname, 'views'));
var home_route = require('./routes/home.js');
app.use('/', home_route);
app.post('/auth/login',  function (req, res){
	console.log(req.body);
});
app.listen(settings.port, () => console.log('Tas Server Running....'));