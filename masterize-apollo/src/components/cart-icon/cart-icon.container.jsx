import React from 'react';
import {Query, Mutation, graphql } from 'react-apollo';
import {gql} from 'apollo-boost';
import { flowRight } from 'lodash';

import CartIcon from './cart-icon.component';

const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
        toggleCartHidden @client
    }
`;

const GET_ITEM_COUNT = gql`{
    itemCount @client
}`;

// const cartIconContainer = () => (
//     <Mutation mutation={TOGGLE_CART_HIDDEN}>
//         {
//             toggleCartHidden => {
//                 return <Query query={GET_ITEM_COUNT}>
//                 {
//                     ({data: {itemCount}}) => (
//                         <CartIcon 
//                             toggleCartHidden={toggleCartHidden} 
//                             itemCount={itemCount}
//                         />
//                     )
//                 }
//                 </Query>
//             }
//         }
//     </Mutation>
// );

const cartIconContainer = ({toggleCartHidden, data: {itemCount}} ) => (
    <CartIcon 
        toggleCartHidden={toggleCartHidden} 
        itemCount={itemCount}
    />
);

export default flowRight(
    graphql(GET_ITEM_COUNT),
    graphql(TOGGLE_CART_HIDDEN, {name: 'toggleCartHidden'})
)(cartIconContainer);