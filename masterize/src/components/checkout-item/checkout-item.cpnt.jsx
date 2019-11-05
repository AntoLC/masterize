import React, {useContext} from 'react';
import './checkout-item.styles.scss';

import {CartContext} from '../../providers/cart/cart.provider';

const CheckoutItem = ({item}) => {
    
    const {updateQuantity, removeItem} = useContext(CartContext);

    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={item.imageUrl}/>
            </div>
            <span className='name'>{item.name}</span>
            <span className='quantity'>
                {
                    item.qty > 1 
                    ? <span className='arrow update-quantity' onClick={() => updateQuantity(item.id, item.qty-1)}>&#10094;</span>
                    : ""
                }
                <span className='amount-quantity'>{item.qty}</span>
                <span className='arrow update-quantity' onClick={() => updateQuantity(item.id, item.qty+1)}>&#10095;</span>
            </span>
            <span className='price'>${item.price}</span>
            <span className='remove-button' onClick={() => removeItem(item.id)}>&#10005;</span>
        </div>
    );
};

export default CheckoutItem;