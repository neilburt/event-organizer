const router = require('express').Router();
const withAuth = require('../utils/auth');
const User = require("../models/User");


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

  res.render('signup');
});
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

router.get('/dashboard', (req, res) => {
  if(!req.session.logged_in){
    res.redirect('/login');
    return;
  }

  res.render('dashboard');
});


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
