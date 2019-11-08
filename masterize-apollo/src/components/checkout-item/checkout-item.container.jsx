import React from 'react';
import {gql} from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import CheckoutItem from './checkout-item.component';

const CLEAR_ITEM_CART = gql`
  mutation ClearItemFromCart($item: Item!){
    clearItemFromCart(item: $item) @client
  }
`;
const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!){
    mut_addItemToCart(item: $item) @client
  }
`;
const REMOVE_ITEM_TO_CART = gql`
  mutation RemoveItemFromCart($item: Item!){
    removeItemFromCart(item: $item) @client
  }
`;

const CheckoutItemContainer = (props) =>{
    const [clearItemFromCart] = useMutation(CLEAR_ITEM_CART);
    const [mut_addItemToCart] = useMutation(ADD_ITEM_TO_CART);
    const [removeItemFromCart] = useMutation(REMOVE_ITEM_TO_CART);
    
    return (
        <CheckoutItem {...props} 
            clearItem={item => clearItemFromCart({ variables: { item } })}
            addItem={item => mut_addItemToCart({ variables: { item } })}
            removeItem={item => removeItemFromCart({ variables: { item } })}
        />
    )
};

export default CheckoutItemContainer;