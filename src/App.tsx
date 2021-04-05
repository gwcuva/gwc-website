import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import GirlsHooHack from './components/GirlsHooHack/GirlsHooHack';
import Branding from './components/Branding/Branding';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/branding">
          <Branding />
        </Route>
        <Route path="/hack">
          <GirlsHooHack />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
