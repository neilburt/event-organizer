const router = require('express').Router();
const CreatedEvent  = require('../../models/CreatedEvent');
const SavedEvent = require('../../models/SavedEvent');
const withAuth = require('../../utils/auth');

// Create events
router.post('/', withAuth, async (req, res) => {
  try{
    const createdEvent = await CreatedEvent.create({
      ...req.body,
      user_id: req.session.user_id
    });

    console.log(createdEvent);
    //res.render("dashboard", createdEvent);
    res.json({ result: "success" });


  }catch(err){
    console.log(err);
    res.status(400).json(err);
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

//Update created event 
// router.put('/:id', withAuth, (req, res) => {
//   createdEvent.update(req.body,
//       {
//           where: {
//               id: req.params.id
//           }
//       }
//   )
//   .then(createdEventData => {
//       if (!createdEventData) {
//           res.status(404).json({ message: 'No event found with this id' });
//           return;
//       }
//       res.json(createdEventData);
//   })
//   .catch(err => {
//       console.log(err);
//       res.status(500).json(err)
//   });
// });

// Allows for deletion of Events(CRUD)
router.delete('/', withAuth, async (req, res) => {
  console.log("delete id", req.body)
  try{
    const eventData = await CreatedEvent.destroy({
      where: {
        id: req.body.id,
        user_id: req.session.user_id
        
      }
    });

    if(!eventData){
      res.status(404).json({message: "Blenda does not approve of this id"});

      return;
    }

    res.status(200).json(eventData);

  }catch(err){
    console.log("Error deleting event", err)
    res.status(500).json(err);
  }
});

// Allows to delete saved events
router.delete('/saved', withAuth, async (req, res) => {
  try{
    const savedEventData = await SavedEvent.destroy({
      where: {
        id: req.body.id,
        user_id: req.session.user_id
      }
    });

    if(!savedEventData){
      res.status(404).json({message: "Blenda dice que no"});
      return;
    }

    res.status(200).json(savedEventData);

  }catch(err){
    console.log("Error deleting event", err)
    res.status(500).json(err);
  }
});

module.exports = router;
