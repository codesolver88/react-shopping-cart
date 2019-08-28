import React from 'react';
import './App.css';
import * as Routes from './component/navigation/constant';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Container from './container/Container';
import Navigation from './component/navigation/Navigation';
import Cart from './component/cart/Cart';
import Nopage from './component/nopage/Nopage';

import Home from './component/home/Home';
import Brand from './component/brand/Brand';
import Product from './component/product/Product';
import Details from './component/details/Details';
import {signin} from './component/login/signin';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path={Routes.HOME} component={Home}/>
          <Route path={Routes.PRODUCT} component={Product}/>
          <Route path={Routes.BRAND} component={Brand}/>
          <Route path={Routes.CART} component={Cart}/>
          <Route exact path={Routes.LANDING} component={Home}/>
          <Route path={Routes.LOGIN} component={signin}/>
          <Route path={Routes.DETAILS} component={Details}/>
          <Route component={Nopage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
