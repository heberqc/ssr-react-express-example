import React, { useState, useEffect } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import NotFound from './NotFound'
import Explore from './Explore'
import Details from './Details'
import Tabs from './Tabs';
import AppBar from './AppBar';
// import '../global.styl';
// import styles from '../global.css';

const App = (props) => {
  const [hide, setHide] = useState(false);

  const handleClick = () => {
    setHide(!hide);
  };

  return (
    <>
      <AppBar />
      <Switch>
      <Route
          exact
          path="/"
          render={props => <Explore {...props} />}
          // component={Explore}
        />
        <Route path="/explore" component={Explore} />
        <Route path="/details" component={Details} />
        <Route component={NotFound} />
      </Switch>
      <Tabs />
    </>
  );
};

App.defaultProps = {
  items: [],
};

export default App;
