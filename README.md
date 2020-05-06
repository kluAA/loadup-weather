# loadup-weather
## Description
LoadUp Weather is a weather application that utilizes the Geolocation API to grab the user's location coordinates and OpenWeather API to grab the latest weather data based on the location. The concept of this app is to help customers that use [LoadUp's](http://goloadup.com) junk removal service to predict potential service fee increases and service disruptions caused by hazardous weather.

[Live Site](https://loadup-weather.herokuapp.com)

<img src="https://user-images.githubusercontent.com/55899911/80827165-7b295500-8bb1-11ea-902e-c659784b9c36.png" height="400"><img src="https://user-images.githubusercontent.com/55899911/80830895-cd6d7480-8bb7-11ea-89af-0a829685ba0a.png" height="400"><img src="https://user-images.githubusercontent.com/55899911/80827178-7f557280-8bb1-11ea-9780-6f662b950979.png" height="400">
## Technologies Used
* React.js
* Redux state management
* Express
* Node.js
* Axios

## Installation
To run locally, install dependencies in root folder and front end folder with 'npm install'. Then run 'npm run dev' to open in localhost:3000.

## Features
1. Fetches current weather information with dynamic weather icon and displays in a mobile friendly way inspired by AccuWeather's app.
2. Loading spinner for API calls.
3. Status updates based on current weather conditions. [Details](https://openweathermap.org/weather-conditions)
4. Setting to convert from imperial to metric units.
5. Semiresponsive mobile design (media queries)
6. Optional api call to fetch weather data by zip code.
7. Error handling for disabled Geolocation and bad API calls.

## Challenges
### API Calls
A series of three API calls are used to grab the weather data. 
1. Geolocation's navigator.geolocation.getCurrentPosition() is used to grab the user's longitude and latitude coordinates. 
2. An AJAX get request is then sent to one of the Express routes with the coordinate data and type of units.
3. An axios get request is then sent to OpenWeather API to grab the current weather data for the location.

Google deprecated HTML5 Geolocation from Chrome in 2016 to only run in HTTPS. Upgrading Heroku was necessary to obtain the SSL certificate. Future updates should use Google's geolocation api instead. An Express route was used instead of directly accessing the OpenWeather API in order to protect the API key in the backend.

## Future Updates
* ~~Optional API call using zip code instead of gps location (in progress)~~
* ~~Error handling for disabled Geolocation and bad API calls~~
* Dynamic background and animation based on current weather status
* Fully mobile responsive design (currently semiresponsive)
