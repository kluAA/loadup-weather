const express = require("express");
const { weatherAPI } = require("../../config/keys");
const axios = require('axios');
const router = express.Router();


router.get('/bycoords', (req, res) => {
    const { lat, lon, unit } = req.query;
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPI}&units=${unit}`)
    .then(weatherData => {
        res.send(weatherData.data);
    })
   .catch(err => {
       res.status(401).json({ msg: "Could not find data based on coords."})
   })
})

router.get('/byzipcode', (req, res) => {
    const { zipcode, unit } = req.query;
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${weatherAPI}&units=${unit}`)
        .then(weatherData => {
            res.send(weatherData.data);
        })
        .catch(err => {
            res.status(401).json({ msg: "Invalid US zip code!"})
        });
})

module.exports = router;