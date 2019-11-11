import { createSelector } from 'reselect'

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cart_items ? cart.cart_items : []
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cart_items => {
        try {
            return cart_items.reduce(
                (accumulator, item) => (accumulator + item.qty), 0)
        } catch (error) {
            return []
        }
    }
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cart_items => 
        cart_items.reduce(
            (accumulator, item) => (accumulator + (item.qty * item.price)), 0)
);