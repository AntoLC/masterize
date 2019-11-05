import React, {useContext} from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item-cpnt';

import { withRouter } from 'react-router-dom';
import {CartContext} from '../../providers/cart/cart.provider'; 

const CartDropDown = ({history}) => {
    const {toggleHidden, cartItems} = useContext(CartContext);
    
    return(
        <div className="cart-dropdown">
            <div className='cart-items'>
            { 
                cartItems.length 
                    ? cartItems.map((item) => <CartItem key={item.id} item={item}/>) 
                    : <span className="empty-message">Your cart is empty</span>
            }
            </div>
            <CustomButton 
                onClick={() => {
                    history.push('/checkout');
                    toggleHidden();
                }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default withRouter(CartDropDown);