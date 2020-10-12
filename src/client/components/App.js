import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import NotFound from './NotFound'
import Explore from './Explore'
import Details from './Details'

const App = (props) => {
  const [hide, setHide] = useState(false);
  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //     (async () => {
  //         const response = await fetch('http://localhost:4000/items');
  //         const newItems = await response.json();

  //         setItems(newItems);
  //     })();
  // }, []);

  const handleClick = () => {
    setHide(!hide);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/explore">Explore</NavLink>
          </li>
          <li>
            <NavLink to="/details">Details</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
      <Route
          exact
          path="/"
          // render={props => <Home name="Alligator.io" {...props} />}
          component={Explore}
        />
        <Route path="/explore" component={Explore} />
        <Route path="/details" component={Details} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

App.defaultProps = {
  items: [],
};

export default App;
