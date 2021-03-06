const express = require('express');
const models = require('../models/models');
var router = express.Router();
var User = models.User;

var validateReq = function(password, repeatPassword) {
  console.log(password);
  console.log(repeatPassword);
  console.log(password === repeatPassword);
  return (password === repeatPassword);
};

module.exports = function(passport) {
  // Add Passport-related auth routes here, to the router!

  router.get('/', function(req, res) {
    res.render('home')
  })

  router.get('/register', function(req, res) {
    res.render('register')
  })

  router.post('/register', function(req, res, next) {
    console.log('REGISTER IS BEING HIT', req.body, validateReq(req.body.password, req.body.repeatPassword))
    if ((req.body.username) && (req.body.password)
    && validateReq(req.body.password, req.body.repeatPassword)) {
      var user = new User({
        name: req.body.name,
        email: req.body.email,
        college: req.body.college,
        username: req.body.username,
        password: req.body.password,
      })
      user.save(function(err,user){
        if(err){
          console.log(err)
        }
        if(user){
          res.redirect('/login');
        }
      })
    } else {
      console.log('got into else')
      res.sendStatus(400)
    }
  })

  router.get('/login', function(req, res) {
    res.render('login')
  })

  router.post('/login', passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/register'
  }), (req, res) => {
    console.log('inside login post route')
    res.redirect('/register');
  })

  router.get('/logout', function(req, res) {
    res.redirect('/')
  })

  return router;
}
