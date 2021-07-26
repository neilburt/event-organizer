const router = require('express').Router();
const { CreatedEvent } = require('../../models');

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

module.exports = router;