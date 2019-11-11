import { CartActionTypes } from './cart.types';
import { addItemToCart, updateQtyToCart, removeItemToCart, clearCart, importCart} from './cart.utils';


const INITIAL_STATE = {
  hidden: false,
  cart_items: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cart_items: addItemToCart(state.cart_items, action.payload)
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cart_items: removeItemToCart(state.cart_items, action.item_id)
      }
    case CartActionTypes.UPDATE_QTY:
      return {
        ...state,
        cart_items: updateQtyToCart(state.cart_items, action.item_id, action.qty)
      }
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cart_items: clearCart()
      }
    case CartActionTypes.IMPORT_CART:
      return {
        ...state,
        cart_items: action.carts
      }
    default:
    return state;
  }
}

export default cartReducer;

