import React from 'react';
import logo from './logo.svg';
import { createBrowserHistory as createHistory } from "history";
import './App.css';
import Navigation from './Components/Navbar'
import Home from './pages/Home/Home'
import Work from './pages/Work/Work'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation/>


      <Switch>
      <Route exact path="/Portfolio2" component={Home} />
      <Route exact path="/" component={Home} />
      <Route exact path="/Portfolio2/work" component={Work} />
      </Switch>
     
     
    </div>
    </Router>
  );
}

export default App;
