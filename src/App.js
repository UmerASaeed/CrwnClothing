import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import HomePage from './pages/homePage/homepage.component'
import ShopPage from './pages/shop/shopPage.component'
import Header from "./components/header/header.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"

function App() {
  return (
    <div>
      <Header/>
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInAndSignUpPage}/>
      </Switch>    
    </div>
  );
}

export default App;
