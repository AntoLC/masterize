import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    console.log('StripeCheckoutButton', price);
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_OGnTzZJmriuCJSaeFVt7V8NU'; 
    const onToken = token => {
        //console.log('Payment Successful', token);
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            console.debug('payment sucessful', response);
        }).catch(error => {
            console.log('Payment error:', JSON.parse(error));
            alert("There was an issue with your payment. Please sure you use the provided credit cart.");
        });
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothong LTD.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}   
        />
    );
};

export default StripeCheckoutButton;