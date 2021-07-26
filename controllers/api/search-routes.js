// const router = require('express').Router();
// const fetch = require("node-fetch");


// // Zip code search
// router.get('/', async function(req, res) {
//   const clientId = "MjI2MjI4NTh8MTYyNjk3MDg5NS41Mzc3NTc";
//   const clientSecret = "41ea6b300379c4e9d39458d185e60c52b49d4768398589851fa2ecdd1bd7b30f";
//   const endpoint = "events";
//   const id = "2";
//   const zipcode = zipInput.value;
  
//   const result = await fetch(`https://api.seatgeek.com/${id}/${endpoint}?postal_code=${zipcode}&client_id=${clientId}&client_secret=${clientSecret}`);
//   const data = await result.json()
  
//   console.log(data)
  
//   res.json({data: data});
// });

// City Search
// router.get('/:id', async function(req, res) {
//   const clientId = "MjI2MjI4NTh8MTYyNjk3MDg5NS41Mzc3NTc";
//   const clientSecret = "41ea6b300379c4e9d39458d185e60c52b49d4768398589851fa2ecdd1bd7b30f";
//   const endpoint = "events";
//   const id = "2";
//   const zipcode = "90210";
  
//   const result = await fetch(`https://api.seatgeek.com/${id}/${endpoint}?postal_code=${zipcode}&client_id=${clientId}&client_secret=${clientSecret}`);
//   const data = await result.json()
  
//   console.log(data)
  
//   res.json({data: data});
// });

// router.get('/', async function(req, res) {
//   const clientId = "MjI2MjI4NTh8MTYyNjk3MDg5NS41Mzc3NTc";
//   const clientSecret = "41ea6b300379c4e9d39458d185e60c52b49d4768398589851fa2ecdd1bd7b30f";
//   const endpoint = "events";
//   const id = "2";
//   const zipcode = "90210";
  
//   const result = await fetch(`https://api.seatgeek.com/${id}/${endpoint}?postal_code=${zipcode}&client_id=${clientId}&client_secret=${clientSecret}`);
//   const data = await result.json()
  
//   console.log(data)
  
//   res.json({data: data});
// });

// module.exports = router;