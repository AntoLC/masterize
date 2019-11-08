import React, {useEffect, lazy, Suspense} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import {GlobalStyle} from './global.styles';

import Header from './components/header/header.cpnt';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/users.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

const Homepage = lazy(() => import('./pages/homepage/homepage'));
const Shop = lazy(() => import('./pages/shop/shop.cpnt'));
const Sign = lazy(() => import('./pages/sign/sign.cpnt'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.cpnt'));
//const Header = lazy(() => import('./components/header/header.cpnt'));

const App = ({checkUserSession, currentUser}) => {
  useEffect(() => {
    checkUserSession();
  },[checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header/>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner/>}>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/shop' component={Shop}/>
            <Route path='/shop/:category' component={Shop}/>
            <Route exact path='/checkout' component={CheckoutPage}/>
            <Route exact path='/sign/' render={() => 
              currentUser ? (<Redirect to='/' />) : (<Sign />) 
            }/>
          </Suspense>
        </ErrorBoundary>
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
