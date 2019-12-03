import React from 'react';
import "./checkout.styles.scss";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.cpnt'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.cpnt'

const CheckoutPage = ({cartItems, cartTotal}) => (
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
        { (cartItems.length) ? cartItems.map(item => <CheckoutItem key={item.id} item={item}/>) : "" }
        <div className='total'>TOTAL: ${ cartTotal }</div>
        <div className='test-warning'>
            * Please use the following test credit cart for payments *
            <br/>
            4242 4242 4242 4242 - Exp: 01/20 - CVV:123
        </div>
        <StripeCheckoutButton price={ cartTotal }/>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    cartTotal : selectCartTotal
});
export default connect(mapStateToProps)(CheckoutPage);