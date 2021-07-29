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
      logged_in: req.session.logged_in
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
  res.render('dashboard', {user: req.session.user, savedEvents, createdEvents});
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

//Get Created Event by Id -- Update event
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

//Delete saved Event
router.delete('api/events/:id', withAuth, async (req, res) => {
  try{
    const eventData = await SavedEvent.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      }
    });

    if(!eventData){
      res.status(404).json({message: "Event not found."});

      return;
    }

    res.status(200).json(eventData);

  }catch(err){
    res.status(500).json(err);
  }
});

//Delete created Event
router.delete('api/events/:id', withAuth, async (req, res) => {
  try{
    const eventData = await CreatedEvent.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      }
    });

    if(!eventData){
      res.status(404).json({message: "Event not found."});

      return;
    }

    res.status(200).json(eventData);

  }catch(err){
    res.status(500).json(err);
  }
});


module.exports = router;
