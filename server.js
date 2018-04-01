require('dotenv').config();
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;
const api = require('./backend/routes/routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const auth = require('./backend/routes/auth');
const exphbs = require('express-handlebars');


const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));

const User = require('./backend/models/models.js').User;

// view engine setup
app.engine('hbs', exphbs());
app.set('views', path.join(__dirname, 'backend/views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
// app.use(logger('dev'));

app.use(cookieParser());

// app.use('/', index);

// catch 404 and forward to error handler

app.use(session({
  secret: process.env.SECRET || "HI HERE I AM",
}));



passport.use(new LocalStrategy(function(username, password, done) {
  console.log('am i getting gee');
  // Find the user with the given username
  User.findOne({ username: username }, function (err, user) {
    // if there's an error, finish trying to authenticate (auth failed)
    console.log("hereeee");
    if (err) {
      console.log(err);
      return done(err);
    }
    // if no user present, auth failed
    if (!user) {
      console.log('no user');
      return done(null, false);
    }
    // if passwords do not match, auth failed
    if (user.password !== password) {
      console.log('went in here wrong password')
      return done(null, false);
    }
    console.log('hit em up chf')
    console.log(user);
    // auth has has succeeded
    return done(null, user);
  });
}));

passport.serializeUser((user, done) => {
  console.log('SERIALIZE', user);
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  console.log('******user');
  User.findById(id, (err, user) => {
    console.log('found user: ', user);
    if (!user) {
      console.log('nothing');
    }
    done(err, user);
  });
});

app.use(passport.initialize());

app.use(passport.session());



app.use('/', auth(passport));

app.get('*', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  console.log(err);
  err.status = 404;
  next(err);
});


app.use('/api/', api);

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
module.exports = app;
