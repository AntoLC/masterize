import React, {createContext, useState, useEffect} from 'react';
import {addItemToCart, updateQtyToCart} from './cart.utils';

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {},
    cartItems: [],
    removeItem: () => {},
    clearItemFromCart: () => {},
    cartItemsCount: 0,
});

const CartProvider = ({children}) => {
    // Hooks
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    
    // State Hidden
    const toggleHidden = () => setHidden(!hidden);

    // Total Price
    const cartTotal = cartItems.reduce((accumulator, item) => (accumulator + (item.qty * item.price)), 0);

    // Set CartItems
    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const updateQuantity = (item_id, qty) => setCartItems(updateQtyToCart(cartItems, item_id, qty));
    const removeItem = (item_id) => setCartItems(cartItems.filter((_item => _item.id !== item_id)));
    
    useEffect(()=>{
        setCartItemsCount(cartItems.reduce((accumulator, item) => (accumulator + item.qty), 0));
    }, [cartItems])

    return <CartContext.Provider
        value={{
            hidden, 
            toggleHidden,
            cartItems,
            addItem,
            cartItemsCount,
            cartTotal,
            updateQuantity,
            removeItem
        }}
    >{children}</CartContext.Provider>;
};

export default CartProvider;