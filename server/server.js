var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');





app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client/components'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
mongoose.connect('mongodb://127.0.0.1:27017/Awp_Project', {useNewUrlParser: true});


/*//passport configuration
app.use(session({
    secret: 'abcd',
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
  
  // pass currentUser to all routes
  app.use((req, res, next) => {
    res.locals.currentUser = req.user; // req.user is an authenticated user
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
  });

*/

app.use('/', router);
module.exports=app;