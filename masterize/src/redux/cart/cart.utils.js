import * as cloneDeep from 'lodash/cloneDeep';
import {
    addCartAndDocuments, 
    updateQtyCart, 
    removeCart, 
    removeAllCart, 
    selectCart} 
    from '../../firebase/firebase.cart';


export const addItemToCart = (cart_items, item) => {
    let itemIndex = -1;
    try {
        itemIndex = cart_items.findIndex((_item => _item.id === item.id));
    }
    catch{
    }

    if(itemIndex === -1){
        const newItem = {...item, qty: 1};

        const new_cart = (cart_items.length) 
            ? [...cart_items, newItem]
            : [newItem];

        addCartAndDocuments("carts", newItem); 
        return new_cart;
    }

    updateQtyCart(cart_items[itemIndex], cart_items[itemIndex].qty+1);

    cart_items[itemIndex].qty += 1;
    return [...cart_items];
}

export const updateQtyToCart = (cart_items, item_id, qty) => {
    const itemIndex = cart_items.findIndex((_item => _item.id === item_id));
    
    if(itemIndex !== -1){
        cart_items[itemIndex].qty = qty;
        updateQtyCart(cart_items[itemIndex], qty);
    }

    return cloneDeep(cart_items);
}

export const removeItemToCart = (cart_items, item_id) => {
    removeCart(item_id);
    return cart_items.filter((_item => _item.id !== item_id));
}

export const clearCart = () => {
    removeAllCart();
    return [];
}

export const importCart = async () => {
    const snapshotCartItem = await selectCart();
    if(! snapshotCartItem) return {};

    const arrayCart = [];
    snapshotCartItem.forEach(doc => {
        arrayCart.push(doc.data())
    });

    return arrayCart;
}