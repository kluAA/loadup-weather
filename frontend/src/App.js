import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from "./components/main/main";
// import WeatherContainer from "./components/weather/weather_container";


const App = () => (
  <div>
    <Switch>
        <Route path="/" component={Main} />
    </Switch>
  </div>
);

export default App;
