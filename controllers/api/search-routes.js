const router = require('express').Router();
const fetch = require("node-fetch");


// Zip code search
router.get('/', async function (req, res) {

    const clientId = "MjI2MjI4NTh8MTYyNjk3MDg5NS41Mzc3NTc";
    const clientSecret = "41ea6b300379c4e9d39458d185e60c52b49d4768398589851fa2ecdd1bd7b30f";
    const endpoint = "events";
    const zipcode = zipInput.value;

    const result = await fetch(`https://api.seatgeek.com/2/${endpoint}?postal_code=${zipcode}&client_id=${clientId}&client_secret=${clientSecret}`);
    const data = await result.json()

    console.log(data)

    res.json({ data: data });
});

//Different route for what we get as a response







// // City Search
router.get('/city/:city', async function (req, res) {
    const clientId = "MjI2MjI4NTh8MTYyNjk3MDg5NS41Mzc3NTc";
    const clientSecret = "41ea6b300379c4e9d39458d185e60c52b49d4768398589851fa2ecdd1bd7b30f";
    const endpoint = "events";
    const city = req.params.city;
    console.log(req.params.city);

    const result = await fetch(`https://api.seatgeek.com/2/${endpoint}?postal_code=${city}&client_id=${clientId}&client_secret=${clientSecret}`);
    const data = await result.json()

    console.log(data)

    res.json({ data: data });
});

router.get('/zip/:zipcode', async function (req, res) {
    const clientId = "MjI2MjI4NTh8MTYyNjk3MDg5NS41Mzc3NTc";
    const clientSecret = "41ea6b300379c4e9d39458d185e60c52b49d4768398589851fa2ecdd1bd7b30f";
    const endpoint = "events";
    const zipcode = req.params.zipcode;
    console.log(req.params.zipcode);

    const result = await fetch(`https://api.seatgeek.com/2/${endpoint}?postal_code=${zipcode}&client_id=${clientId}&client_secret=${clientSecret}`);
    const data = await result.json()

    console.log(data)

    res.json({ data: data });
});

module.exports = router;