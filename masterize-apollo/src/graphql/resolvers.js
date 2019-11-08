import {gql} from 'apollo-boost';
import {
    addItemToCart, 
    getCartItemCount, 
    clearItemFromCart, 
    removeItemFromCart, 
    selectCartTotal} from './cart.utils';

export const typeDefs = gql`
    extend type Item {
        quantity: Int
    }

    extend type Mutation{
        ToggleCartHidden: Boolean!
        AddItemToCart(item: Item!): [Item]!
        ClearItemFromCart(item: Item!): [Item]!
        RemoveItemFromCart(item: Item!): [Item]!
        SetCurrentUser(userAuth: UserAuth!): UserAuth
    }
`;

const GET_CART_HIDDEN = gql`{
    cartHidden @client
}`;
const GET_ITEM_COUNT = gql`{
    itemCount @client
}`;
const GET_CART_ITEMS = gql`{
    cartItems @client
}`;
const GET_TOTAL_CART_PRICE = gql`{
    totalCartPrice @client
}`;
const GET_CURRENT_USER = gql`{
    currentUser @client
}`;

export const resolvers = {
    Mutation: {

        setCurrentUser: (_root, {userAuth}, {cache}) => {
            cache.writeQuery({
                query: GET_CURRENT_USER,
                data: {currentUser: userAuth}
            });

            return userAuth;
        },

        toggleCartHidden: (_root, _args, {cache}, _info) => {
            const {cartHidden} = cache.readQuery({query: GET_CART_HIDDEN});

            cache.writeQuery({
                query: GET_CART_HIDDEN,
                data: {cartHidden: !cartHidden}
            });

            return !cartHidden;
        },

        clearItemFromCart: (_root, {item}, {cache}) => {
            const {cartItems} = cache.readQuery({query: GET_CART_ITEMS});
            const newCartItems = clearItemFromCart(cartItems, item);
            return rewriteCartItem(cache, newCartItems);
        },

        removeItemFromCart: (_root, {item}, {cache}) => {
            const {cartItems} = cache.readQuery({query: GET_CART_ITEMS});
            const newCartItems = removeItemFromCart(cartItems, item);
            return rewriteCartItem(cache, newCartItems);
        },

        mut_addItemToCart: (_root, {item}, {cache}) => {
            const {cartItems} = cache.readQuery({query: GET_CART_ITEMS});
            const newCartItems = addItemToCart(cartItems, item);
            return rewriteCartItem(cache, newCartItems);
        }
    }
};

const rewriteCartItem = (cache, newCartItems) => {
    cache.writeQuery({
        query: GET_TOTAL_CART_PRICE,
        data: {totalCartPrice: selectCartTotal(newCartItems)}
    });

    cache.writeQuery({
        query: GET_ITEM_COUNT,
        data: {itemCount: getCartItemCount(newCartItems)}
    });
    
    cache.writeQuery({
        query: GET_CART_ITEMS,
        data: {cartItems: newCartItems}
    });
    return newCartItems;
}