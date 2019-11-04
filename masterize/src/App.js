import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.cpnt';
import Sign from './pages/sign/sign.cpnt';
import CheckoutPage from './pages/checkout/checkout.cpnt';

import Header from './components/header/header.cpnt';
import CurrentUserContext from "./contexts/current-users/current-user.context";

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

//import { setCurrentUser } from './redux/user/user.actions';
//import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    //const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }});
        });
      }

      this.setState({currentUser: userAuth});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header/>
        </CurrentUserContext.Provider>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/sign'
            render={() =>
              this.state.currentUser ? (
                <Redirect to='/' />
              ) : (
                <Sign />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}


export default App;