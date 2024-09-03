import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import GirlsHooHack2023 from './components/GirlsHooHack2023/GirlsHooHack';
import GirlsHooHack2024 from './components/GirlsHooHack2024/GirlsHooHack';
import GirlsHooHack2022 from './components/GirlsHooHack2022/GirlsHooHack';
import GirlsHooHack2021 from './components/GirlsHooHack2021/GirlsHooHack';
import Branding from './components/Branding/Branding';
import CareerFair2022 from './components/CareerFair2022/CareerFair2022';
import CareerFair2023 from './components/CareerFair2023/CareerFair2023';
import CareerFair2024 from './components/CareerFair2024/CareerFair2024';
import Links from './components/Links/Links';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/branding">
          <Branding />
        </Route>
        <Route exact path="/hack">
          <GirlsHooHack2024 />
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
        <Route exact path="/careerfair2023">
          <CareerFair2023 />
        </Route>
        <Route exact path="/careerfair">
          <CareerFair2024 />
        </Route>
        <Route path="/hack2021">
          <GirlsHooHack2021 />
        </Route>
        <Route path="/hack2022">
          <GirlsHooHack2022 />
        </Route>
        <Route path="/hack2023">
          <GirlsHooHack2023 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
