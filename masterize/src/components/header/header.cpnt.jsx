import React, {useContext, useState} from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.cpnt';
import CartDropDown from '../cart-dropdown/cart-dropdown.cpnt';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/users.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import CurrentUserContext from '../../contexts/current-users/current-user.context';
import CartContext from '../../contexts/cart/cart.context'; 

import { 
    HeaderContainer, 
    LogoContainer, 
    OptionLink, 
    OptionsContainer } from './header.styles';

const Header = ({signOut}) => {
    const currentUser = useContext(CurrentUserContext);
    const [hidden, setHidden] = useState(true);
    const toggleHidden = () => setHidden(!hidden);

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
            <CartContext.Provider value={{
                hidden,
                toggleHidden
            }}>
                <CartIcon/>
            </CartContext.Provider>
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