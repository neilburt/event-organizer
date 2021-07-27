const router = require('express').Router();
const { response } = require('express');
const fetch = require("node-fetch");

// Search by Zipcode
router.get('/zip/:zipcode', async function (req, res) {
    const clientId = "MjI2MjI4NTh8MTYyNjk3MDg5NS41Mzc3NTc";
    const clientSecret = "41ea6b300379c4e9d39458d185e60c52b49d4768398589851fa2ecdd1bd7b30f";
    const endpoint = "events";
    const zipcode = req.params.zipcode;
    console.log(req.params.zipcode);

    const result = await fetch(`https://api.seatgeek.com/2/${endpoint}?per_page=25&postal_code=${zipcode}&client_id=${clientId}&client_secret=${clientSecret}`);
    const data = await result.json()

    console.log(data)
    
    res.render("results", data);
    
    // res.json({ data: data });
});



//How to search for different types of events -- concert ** sports **monster_truck
// Taxonomy search by type of event
// router.get('/type/:type', async function (req, res) {
//     const clientId = "MjI2MjI4NTh8MTYyNjk3MDg5NS41Mzc3NTc";
//     const clientSecret = "41ea6b300379c4e9d39458d185e60c52b49d4768398589851fa2ecdd1bd7b30f";
//     const endpoint = "events";
//     const type = req.params.type;
//     console.log(req.params.type);

//     const result = await fetch(`https://api.seatgeek.com/2/${endpoint}?taxonomies.name=${type}&postal_code=90210&per_page=25&client_id=${clientId}&client_secret=${clientSecret}`);
//     const data = await result.json()

//     console.log(data);

//     res.json({ data: data });
// });


// // City Search
// router.get('/city/:city', async function (req, res) {
//     const clientId = "MjI2MjI4NTh8MTYyNjk3MDg5NS41Mzc3NTc";
//     const clientSecret = "41ea6b300379c4e9d39458d185e60c52b49d4768398589851fa2ecdd1bd7b30f";
//     const endpoint = "events";
//     const city = req.params.city;
//     console.log(req.params.city);

//     const result = await fetch(`https://api.seatgeek.com/2/${endpoint}?city=${city}&per_page=25&client_id=${clientId}&client_secret=${clientSecret}`);
//     const data = await result.json()

//     console.log(data);

//     res.json({ data: data });
// });

// // State Search
// router.get('/state/:state', async function (req, res) {
//     const clientId = "MjI2MjI4NTh8MTYyNjk3MDg5NS41Mzc3NTc";
//     const clientSecret = "41ea6b300379c4e9d39458d185e60c52b49d4768398589851fa2ecdd1bd7b30f";
//     const endpoint = "venues";
//     const state = req.params.state;
//     console.log(req.params.state);

//     const result = await fetch(`https://api.seatgeek.com/2/${endpoint}?per_page=25&state=${state}&client_id=${clientId}&client_secret=${clientSecret}`);
//     const data = await result.json()

//     console.log(data)

//     res.json({ data: data });
// }); 

module.exports = router;