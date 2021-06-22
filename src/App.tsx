import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import GirlsHooHack from './components/GirlsHooHack/GirlsHooHack';
import Branding from './components/Branding/Branding';
import NotFound from './components/NotFound';
import Links from './components/Links/Links';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/branding">
          <Branding />
        </Route>
        <Route exact path="/hack">
          <GirlsHooHack />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/links">
          <Links />
        </Route>
        <Route path="/">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
