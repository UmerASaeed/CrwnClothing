import React, { useEffect } from 'react';
import './App.css';
import {connect} from "react-redux"
import {Route, Switch ,Redirect} from 'react-router-dom'
import HomePage from './pages/homePage/homepage.component'
import ShopPage from './pages/shop/shopPage.component'
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import CheckoutPage from "./pages/checkout/checkout.component"
import Header from "./components/header/header.component"
import{checkUserSession} from "./redux/user/user.action"

const App = ({currentUser,checkUserSession}) =>
{
  useEffect(()=>
  {
    checkUserSession()
  },[checkUserSession])

  return (
    <div>
      <Header/>
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signin' render = {() => currentUser ? <Redirect to="/"/> : <SignInAndSignUpPage/>}/>
      </Switch>    
    </div>
  );
}

const mapStateToProps = state =>
({
  currentUser:state.user.currentUser,
})

const mapDispatchToProps = dispatch =>
{
  return{
    checkUserSession:()=>dispatch(checkUserSession())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);



