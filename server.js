var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var path = require('path');
var morgan = require('morgan');
var mongoose = require('mongoose');
var mainRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var DB ='mongodb://localhost/angular2Node';

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    urlencoded : true
}));
app.set('port',process.env.PORT || 8000);

mongoose.connect(DB,function(err){
    if(err){
        return err;
    }
    else{
        console.log("successfully connnected to "+DB);
    }
});

app.set('views',path.join(__dirname,'client/src/views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
app.use(express.static(path.join(__dirname,'client')));

app.use('/',mainRouter);
app.use('/api',apiRouter)
app.listen(app.get('port'),function(){
    console.log('express is running on localhost://'+app.get('port'));
})