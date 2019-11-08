import React from 'react';
import {gql} from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import CheckoutPage from './checkout.component';

const GET_CART_ITEMS = gql`{
    cartItems @client
}`;
const GET_TOTAL_CART_PRICE = gql`{
    totalCartPrice @client
}`;

const CheckoutContainer = () => {
    const { data:{cartItems} } = useQuery(GET_CART_ITEMS);
    const { data:{totalCartPrice} } = useQuery(GET_TOTAL_CART_PRICE);
    return(<CheckoutPage cartItems={cartItems} total={totalCartPrice}/>);
};

export default CheckoutContainer;