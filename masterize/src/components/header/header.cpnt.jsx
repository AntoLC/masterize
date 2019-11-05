import React, {useContext, useState} from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.cpnt';
import CartDropDown from '../cart-dropdown/cart-dropdown.cpnt';

import CurrentUserContext from '../../contexts/current-users/current-user.context';
import {CartContext} from '../../providers/cart/cart.provider'; 
import { auth } from '../../firebase/firebase.utils';

import { 
    HeaderContainer, 
    LogoContainer, 
    OptionLink, 
    OptionsContainer } from './header.styles';

const Header = ({signOut}) => {
    const currentUser = useContext(CurrentUserContext);
    const {hidden} = useContext(CartContext);

    return (
    <HeaderContainer>
        <LogoContainer to='/'><Logo className='logo'/></LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink>
            {
                currentUser ?
                    <OptionLink to='' as='div' onClick={ () => auth.signOut() }>SIGN OUT</OptionLink>
                : 
                    <OptionLink to='/sign'>SIGN IN</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {(!hidden) ? <CartDropDown/> : ""}
    </HeaderContainer>
)}

export default Header;