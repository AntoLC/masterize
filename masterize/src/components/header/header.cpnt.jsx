import React, {useRef, useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.cpnt';
import CartDropDown from '../cart-dropdown/cart-dropdown.cpnt';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/users.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import  { Link } from 'react-router-dom';

import { gsap } from "gsap";
import { TweenLite } from "gsap/all";

import './header.styles.scss';

gsap.registerPlugin(TweenLite);

function useDidUpdate (callback, deps) {
    const hasMount = useRef(false)
    
    useEffect(() => {
        if (hasMount.current) {
            callback()
        } else {
            hasMount.current = true
        }
    }, deps)
}

const Header = ({currentUser, hidden, signOut}) => {
    useDidUpdate(() => {
        /*TweenLite.to(".header", { duration: 2.5, ease: "elastic.out(1, 0.3)", top:"0px"});*/
    });

    useEffect(() => {
        (hidden)
            ? TweenLite.to(".cart-dropdown", { duration: 2.5, ease: "elastic.out(1, 0.3)", top:"56px"})
            : TweenLite.to(".cart-dropdown", { duration: 2.5, ease: "elastic.out(1, 0.3)", top:"-500px"});
    }, [hidden])

    return (
        <div className="header">
            <Link className="logo-container" to='/'><Logo className='logo'/></Link>
            <div id="header-options" className="options">
                <div className="container-option">
                    <Link className="option" to='/shop'>SHOP</Link>
                </div>
                <div className="container-option">
                    <Link className="option" to='/contact'>CONTACT</Link>
                </div>
                <div className="container-option">
                {
                    currentUser ?
                        <div className="option" onClick={ () => signOut() }>SIGN OUT</div>
                    : 
                        <Link className="option" to='/sign'>SIGN IN</Link>
                }
                </div>
                <CartIcon/>
            </div>
            {(hidden) ? <CartDropDown/> : ""}
            <CartDropDown/>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
});
const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutStart())
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);