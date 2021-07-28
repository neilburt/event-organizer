const router = require('express').Router();
const withAuth = require('../utils/auth');
const User = require("../models/User");
const SavedEvent = require("../models/SavedEvent");
const CreatedEvent = require('../models/CreatedEvent');

// Render landing page initially
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

// Render saved API events from table to dashboard
router.get('/dashboard',async (req, res) => {
  if(!req.session.logged_in){
    res.redirect('/login');
    return;
  }
  let savedEvents = await SavedEvent.findAll({ where: { user_id: req.session.user_id }});
  savedEvents = savedEvents.map(events => events.get({plain: true}));

  let createdEvents = await CreatedEvent.findAll({ where: { user_id: req.session.user_id }});
  createdEvents = createdEvents.map(events => events.get({plain: true}));

  console.log(savedEvents);
  res.render('dashboard', {savedEvents, createdEvents});
});


// Login redirect to dashboard once logged in
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

// Signup redirect to dashboard once account created
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});


// Logout redirect to landing page
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get('api/events/:id', async (req, res) => {
  try{
    const eventData = await CreatedEvent.findByPk(req.params.id, {
      include: [{
        model: User,
        attributes: ['name']
      }]
    });

    const createdEvents = eventData.get({plain: true});

    res.render('dashboard', {
      ...createdEvents,
      logged_in: req.session.logged_in
    });

  }catch(err){
    res.status(500).json(err);
  }
});

// router.get('/dashboard', withAuth, async (req, res) => {
//   try{
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: {exclude: ['password']},
//       include: [{model: Post}]
//     });

//     const user = userData.get({plain: true});

//     res.render('dashboard', {
//       ...user,
//       logged_in: true
//     });

//   }catch(err){
//     res.status(500).json(err);
//   }
// });

// router.post('/login', async (req, res) => {
//   try {
//     const userData = await User.findOne({ where: { email: req.body.email } });

//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;
      
//       res.json({ user: userData, message: 'You are now logged in!' });
//     });

//   } catch (err) {
//     res.status(400).json(err);
//   }
// });


// router.post('/signup', async (req, res) => {
//   try {
//     const userData = await User.create(req.body);

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
//   res.redirect('/dashboard');
// });

// router.get('/signup', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/dashboard');
//     return;
//   }

//   res.render('signup');
// });


// router.get('/results', async (req, res) => {
  
//   console.log("results page");
//   try {
//     res.render('results', {
//       User,
//       // logged_in: req.session.logged_in,
//     });
    
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



module.exports = router;
