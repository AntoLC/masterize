import React, {useContext} from 'react';
import "./checkout.styles.scss";

import CheckoutItem from '../../components/checkout-item/checkout-item.cpnt';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.cpnt';

import {CartContext} from '../../providers/cart/cart.provider';

const CheckoutPage = () => {
    const {cartItems, cartTotal} = useContext(CartContext);

    return(
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            { cartItems.map(item => <CheckoutItem key={item.id} item={item}/>) }
            <div className='total'>TOTAL: ${ cartTotal }</div>
            <div className='test-warning'>
                * Please use the following test credit cart for payments *
                <br/>
                4242 4242 4242 4242 - Exp: 01/20 - CVV:123
            </div>
            <StripeCheckoutButton price={ cartTotal }/>
        </div>
    );
};

export default CheckoutPage;