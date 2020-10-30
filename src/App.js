import React from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Apod from "./components/Apod";
import Mars from "./components/Mars";
import Index from "./components/Index";
import Error from "./components/Error"
import './mine.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
      <Route exact path="/"> <Index/></Route>
      <Route path="/apod"> <Apod/></Route>
      <Route path="/mars"> <Mars/></Route>
      <Route path="*"> <Error/></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
