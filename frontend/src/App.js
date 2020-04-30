import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from "./components/nav/navbar";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";


const App = () => (
  <div>
    <NavBar />
    <Switch>
        <Route path="/" component={Main} />
    </Switch>
    <Footer />
  </div>
);

export default App;
