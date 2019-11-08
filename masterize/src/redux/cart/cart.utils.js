import * as cloneDeep from 'lodash/cloneDeep';

export const addItemToCart = (cart_items, item) => {
    
    const itemIndex = cart_items 
        ? cart_items.findIndex((_item => _item.id === item.id))
        : -1;
    if(itemIndex === -1){
        const new_cart = (cart_items) 
            ? [...cart_items, {...item, qty: 1}]
            : [{...item, qty: 1}];

        return new_cart;
    }

    cart_items[itemIndex].qty += 1;
    return [...cart_items];
}

export const updateQtyToCart = (cart_items, item_id, qty) => {
    const itemIndex = cart_items.findIndex((_item => _item.id === item_id));
    
    if(itemIndex !== -1)
        cart_items[itemIndex].qty = qty;

    return cloneDeep(cart_items);
}
