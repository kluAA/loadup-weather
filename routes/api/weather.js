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
    // .error( err => console.log(err))
    // res.status(200).json({ msg: `you made it` });
})

router.get('/byzipcode', (req, res) => {
    const { zipcode, unit } = req.query;
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${weatherAPI}&units=${unit}`)
        .then(weatherData => {
            res.send(weatherData.data);
        })
})

module.exports = router;