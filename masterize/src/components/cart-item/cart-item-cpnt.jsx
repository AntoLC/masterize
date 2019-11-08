import React from 'react';
import "./cart-item.styles.scss";

const CartItem = ({imageUrl, name, qty, price}) => {
    return(
        <div className="cart-item">
            <img src={imageUrl} />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{qty} X ${price}</span>
            </div>
        </div>
    );
}

export default React.memo(CartItem);