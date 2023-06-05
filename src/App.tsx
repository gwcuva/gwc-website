import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import GirlsHooHack2022 from './components/GirlsHooHack2022/GirlsHooHack';
import GirlsHooHack2021 from './components/GirlsHooHack2021/GirlsHooHack';
import Branding from './components/Branding/Branding';
import CareerFair2022 from './components/CareerFair2022/CareerFair2022';
import CareerFair2023 from './components/CareerFair2023/CareerFair2023';
import Links from './components/Links/Links';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/branding">
          <Branding />
        </Route>
        <Route exact path="/hack">
          <GirlsHooHack2022 />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/links">
          <Links />
        </Route>
        <Route exact path="/careerfair2022">
          <CareerFair2022 />
        </Route>
        <Route exact path="/careerfair">
          <CareerFair2023 />
        </Route>
        <Route path="/hack2021">
          <GirlsHooHack2021 />
        </Route>
        <Route path="/hack2022">
          <GirlsHooHack2022 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
