import React from 'react';
import logo from './logo.svg';
import { createBrowserHistory as createHistory } from "history";
import './App.css';
import Navigation from './Components/Navbar'

import Home from './pages/Home/Home'
import Work from './pages/Work/Work'
import Contact from './Components/Contact/index'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <header className="App-header">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
      <Route path="/Portfolio2" exact component={Home} />
      <Route path="/" exact component={Home} />
      <Route path="/work" exact component={Work} />
      </Switch>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
