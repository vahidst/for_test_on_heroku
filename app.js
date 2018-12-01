
var express    = require('express');
var path       = require('path');
var bodyParser = require('body-parser');
var cors       = require('cors');


var app = express();







app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.set('views',__dirname+'/views');
app.set('view engine','jsx');
var options = { beautify: true };
app.engine('jsx',require('express-react-views').createEngine(options));

app.use(express.static(path.join(__dirname, 'build')));




app.use('/',require('./routes/Home_router'));
app.use('/nonlindqem1d',require('./routes/nonlindqem1d_router'));

// app.use('/serverside_solver',()=>{console.log("i am here...")});

app.use('/serverside_solver',
require('./Server_side/nonlindqem1d/serverside_solver'));


app.listen('6400');




