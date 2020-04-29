import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WeatherContainer from "./components/weather/weather_container";

const App = () => (
  <div>
    <Switch>
        <Route path="/" component={WeatherContainer} />
    </Switch>
  </div>
);

export default App;
