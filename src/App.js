import React, {useRef, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ImagePage from "./ImagePage"
import Landing from "./LandingPage"

function App() { 

  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Landing} />

      <Route exact path="/image" component={ImagePage} />
      </Switch>
  </Router>

  );
}

export default App;
