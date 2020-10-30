import React from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Apod from "./components/Apod";
import Mars from "./components/Mars";
import Index from "./components/Index";
import Error from "./components/Error"



function App() {
  
  return (
    <>
    
      <Router>
        <Switch>
      <Route exact path="/"> <Index/></Route>
      <Route path="/apod"> <Apod/></Route>
      <Route path="/mars"> <Mars/></Route>
      <Route path="*"> <Error/></Route>
      </Switch>
      </Router>
    
    </>
  );
}

export default App;
