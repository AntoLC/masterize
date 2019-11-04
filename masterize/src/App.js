import React, {useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

// Pages
import Homepage from './pages/homepage/homepage';
import Shop from './pages/shop/shop.cpnt';
import Sign from './pages/sign/sign.cpnt';
import CheckoutPage from './pages/checkout/checkout.cpnt';
// Components
import Header from './components/header/header.cpnt';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/users.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

const App = ({checkUserSession, currentUser}) => {
  useEffect(() => {
    checkUserSession();
  },[checkUserSession]);

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={Shop}/>
        <Route path='/shop/:category' component={Shop}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route exact path='/sign/' render={() => 
          currentUser ? (<Redirect to='/' />) : (<Sign />) 
        }/>
      </Switch>
    </div>
  );
}
 
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser 
});
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(App);
