const router = require('express').Router();
const CreatedEvent  = require('../../models/CreatedEvent');
const SavedEvent = require('../../models/SavedEvent');
const withAuth = require('../../utils/auth');

// Create events
router.post('/', async (req, res) => {
  try{
    const newEvent = await CreatedEvent.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(newEvent);
  
  }catch(err){
    res.status(400).json(err);
  }
});

// Allows for deletion of Events(CRUD)
router.delete('/:id', withAuth, async (req, res) => {
  try{
    const eventData = await CreatedEvent.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      }
    });

    if(!eventData){
      res.status(404).json({message: "Blenda does not approve of this id"});

      return;
    }

    res.status(200).json(eventData);

  }catch(err){
    res.status(500).json(err);
  }
});

router.post('/saved', withAuth, async (req, res) => {
  try{
    const newEvent = await SavedEvent.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(newEvent);
  
  }catch(err){
    console.log(err);
    res.status(400).json(err);
  }
});

// Allows to delete saved events
router.delete('/:id', withAuth, async (req, res) => {
  try{
    const savedEventData = await SavedEvent.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      }
    });

    if(!eventData){
      res.status(404).json({message: "Entered event ID not found."});

      return;
    }

    res.status(200).json(savedEventData);

  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
