const router = require('express').Router();
// const withAuth = require('../utils/auth');
const User = require("../models/User");
const fetch = require("node-fetch");

router.get('/', async (req, res) => {
  console.log("landing page");
  try {
    res.render('landing', {
      User,
      // logged_in: req.session.logged_in,
    });
    
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('dashboard');
});


router.get('/results', async (req, res) => {
  console.log("results page");
  try {
    res.render('results', {
      User,
      // logged_in: req.session.logged_in,
    });
    
  } catch (err) {
    res.status(500).json(err);
  }
});
// router.get('/apitest', async function(req, res) {
//     console.log("api hit")
  
//     // const apikey = "41ea6b300379c4e9d39458d185e60c52b49d4768398589851fa2ecdd1bd7b30f:MjI2MjI4NTh8MTYyNjk3MDg5NS41Mzc3NTc";
  
//     const clientId = "MjI2MjI4NTh8MTYyNjk3MDg5NS41Mzc3NTc";
//     const clientSecret = "41ea6b300379c4e9d39458d185e60c52b49d4768398589851fa2ecdd1bd7b30f";
//     const query = "events";
//     const id = "2";
  
//     const result = await fetch(`https://api.seatgeek.com/${id}/${query}?client_id=${clientId}&client_secret=${clientSecret}`);
//     const data = await result.json()
  
//     console.log(data)
  
//     res.json({data: data});
  
//   });



module.exports = router;
