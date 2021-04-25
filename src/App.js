import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Destinations from './components/pages/Destinations';
import Services from './components/pages/Services';
import Stories from './components/pages/Stories';
import SignUp from './components/pages/SignUp';
import Adventure from './components/pages/Adventure';
import Romance from './components/pages/Romance';
import Family from './components/pages/Family';
import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/destinations" exact component={Destinations} />
          <Route path="/services" exact component={Services} />
          <Route path="/stories" exact component={Stories} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/adventure" exact component={Adventure} />
          <Route path="/romance" exact component={Romance} />
          <Route path="/family" exact component={Family} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
