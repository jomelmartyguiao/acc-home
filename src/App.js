import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from './containers/HomeContainer';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomeContainer} />
      <Route path="/home/" exact component={HomeContainer} />
    </Switch>
  );
}

export default App;
