const express = require("express");
const { weatherAPI } = require("../../config/keys");
const axios = require('axios');
const router = express.Router();


router.get('/bycoords', (req, res) => {
    const { lat, lon } = req.query;
    console.log(lat, lon, weatherAPI)
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPI}&units=imperial`)
    .then(weatherData => {
        console.log(weatherData)
        res.send(weatherData.data);
    })
    // .error( err => console.log(err))
    // res.status(200).json({ msg: `you made it` });
})

module.exports = router;