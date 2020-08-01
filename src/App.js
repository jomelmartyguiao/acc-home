import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from './containers/HomeContainer';
import RegionContainer from './containers/RegionContainer';
import { Footer } from './components/Shared/Footer';
import './App.css';

function App() {
  return (
    <Switch>
      <HomeRoute path="/" exact component={HomeContainer} />
      <HomeRoute path="/home/" exact component={HomeContainer} />
      <HomeRoute path="/region/:id" exact component={RegionContainer} />
    </Switch>
  );
}

export default App;

const HomeRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => <>
      <Component {...props} />
      <Footer /></>
    }
  />
);
