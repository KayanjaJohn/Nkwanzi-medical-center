//DEPENDENCIES
const express = require('express');
const path = require('path');
const passport = require('passport');
const config = require('./config/db');
const mongoose = require('mongoose');

// defining expressSession
const expressSession = require("express-session")({
	secret: "secret",
	resave: false,
	saveUninitialized: false,
});


// Importing model
const Registration = require('./model/User');

// Importing Routes
const registerRoute = require('./routes/registerRoute')

//INSTANTIATION
const app = express();


// Setting up db connections
mongoose.connect(config.database,{ useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once('open', function(){

console.log('Connected to MongoDB');
});
// Check for db errors
db.on('error', function(err){
  console.error(err);
});

//CONFIGURATIONS
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


//MIDDLEWARE

  // To parse URL encoded data
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
  app.use(expressSession);
  

  // Passport configuration middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(Registration.createStrategy());
passport.serializeUser(Registration.serializeUser());
passport.deserializeUser(Registration.deserializeUser());


// Using routes
app.use('/', registerRoute);


//ROUTES

app.get('*', (req, res) =>{
    res.send('Not Found!, page not found');
});


app.listen(4200, () => console.log('listening to 4200'));