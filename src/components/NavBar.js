import React from 'react';
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/index.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import Gallery from './Gallery';
import Pricing from './Pricing';
import About from './About';

function NavBar() {
  return (
    <Router>
        <header className="navbar navbar-expand bg-dark">
            <Link to="/"><span className="bg-dark text-white nav-link">Home</span></Link>
            <Link to="/gallery"><span className="bg-dark text-white nav-link">Gallery</span></Link>
            <Link to="/pricing"><span className="bg-dark text-white nav-link">Pricing</span></Link>
            <Link to="/about"><span className="bg-dark text-white nav-link">About me</span></Link>
        </header>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/gallery">
              <Gallery />
          </Route>
          <Route path="/pricing">
              <Pricing />
          </Route>
          <Route path="/about">
              <About />
          </Route>
      </Switch>
    </Router>
  );
}

export default NavBar;
