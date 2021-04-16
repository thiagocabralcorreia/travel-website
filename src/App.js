import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Destinations from './components/pages/Destinations';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
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
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
