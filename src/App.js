import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


import Forcaste from './weathers/pages/forcaste.js';
import HomePage from './weathers/pages/HomePage';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {

  let routes;

    routes = (
      <Switch>
        <Route path="/" exact>
        <HomePage />
        </Route>
        <Route path="/Forecaste">
          <Forcaste />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  

  return (
    
      <Router>
        <MainNavigation />
        <main className='app' >{routes}</main>
      </Router>

  );
};
export default App;