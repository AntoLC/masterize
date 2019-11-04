import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item-cpnt';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropDown = ({dispatch, cart_items, history}) => {
    console.debug(cart_items);
    return(
        <div className="cart-dropdown">
            <div className='cart-items'>
            { 
                cart_items.length 
                    ? cart_items.map((item) => <CartItem key={item.id} item={item}/>) 
                    : <span className="empty-message">Your cart is empty</span>
            }
            </div>
            <CustomButton 
                onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cart_items: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropDown));