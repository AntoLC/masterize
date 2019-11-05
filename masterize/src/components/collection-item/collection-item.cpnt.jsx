import React, {useContext} from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button';
import {STYLE_INVERTED} from '../custom-button/custom-button.styles';

import {CartContext} from '../../providers/cart/cart.provider'; 

const CollectionItem = ({ item }) => {
    const {addItem} = useContext(CartContext);

    return (
        <div className='collection-item'>
            <div
                style={{backgroundImage: `url(${item.imageUrl})`}} 
                className='image'>
            </div>
            <div className="collection-footer">
                <span className="name">{item.name.toUpperCase()}</span>
                <span className="price">{item.price}$</span>
            </div>
            <CustomButton className="custom-button" typeStyle={STYLE_INVERTED} onClick={() => addItem(item)}>Add to cart</CustomButton>
        </div>
    );
};

export default CollectionItem;