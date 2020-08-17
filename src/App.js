import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import HomePage from './pages/homePage/homepage.component'
import ShopPage from './pages/shop/shopPage.component'
import Header from "./components/header/header.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import {auth,CreateUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component 
{
  constructor()
  {
    super();
    this.state={
      currentUser:null
    }  
  }

  unsubscribeFromAuth = null;

  componentDidMount()
  {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>
      {
        if (userAuth)
        {
          const userRef = CreateUserProfileDocument(userAuth);
         
          (await userRef).onSnapshot(snapShot=>
            {
             this.setState({
               currentUser: {
                id:snapShot.id,
                ...snapShot.data()
               }
             })
            })
        }
        else{
          this.setState({currentUser:userAuth})
        }
      })
  }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage}/>
            <Route exact path='/signin' component={SignInAndSignUpPage}/>
        </Switch>    
      </div>
  );
  }
}

export default App;
