export const addItemToCart = (cartItems, cartItemToAdd) => {
  let existingCartItem = [];
  if(cartItems)
    existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return !cartItems 
    ? [{ ...cartItemToAdd, quantity: 1 }] 
    : [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const getCartItemCount = cartItems => {
  if(cartItems)
      return cartItems.reduce(
          (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0 );
  else 
      return 0;
}

export const clearItemFromCart = (cartItems, _cartItem) => 
  cartItems.filter(cartItem => cartItem.id !== _cartItem.id);

export const selectCartTotal = cartItems =>
  cartItems.reduce((accumalatedQuantity, cartItem) => 
    accumalatedQuantity + cartItem.quantity * cartItem.price, 0);