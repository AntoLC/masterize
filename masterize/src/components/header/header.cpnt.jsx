import React, {useContext} from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.cpnt';
import CartDropDown from '../cart-dropdown/cart-dropdown.cpnt';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/users.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import CurrentUserContext from '../../contexts/current-users/current-user.context'; 

import { 
    HeaderContainer, 
    LogoContainer, 
    OptionLink, 
    OptionsContainer } from './header.styles';

const Header = ({hidden, signOut}) => {
    const currentUser = useContext(CurrentUserContext);
    return (
    <HeaderContainer>
        <LogoContainer to='/'><Logo className='logo'/></LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink>
            {
                currentUser ?
                    <OptionLink to='' as='div' onClick={ () => signOut() }>SIGN OUT</OptionLink>
                : 
                    <OptionLink to='/sign'>SIGN IN</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {(hidden) ? <CartDropDown/> : ""}
    </HeaderContainer>
)}

const mapStateToProps = createStructuredSelector({
    //currentUser : selectCurrentUser,
    hidden : selectCartHidden
});
const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutStart())
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);