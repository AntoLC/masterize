import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});
export const addCartItems = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});
export const removeCartItem = (item_id) => ({
    type: CartActionTypes.REMOVE_ITEM,
    item_id: item_id
});
export const updateQuantity = (item_id, qty) => ({
    type: CartActionTypes.UPDATE_QTY,
    item_id: item_id,
    qty: qty
});
export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART,
});
export const ActionImportCart = (carts) => ({
    type: CartActionTypes.IMPORT_CART,
    carts: carts
});