import React from 'react';
import { Mutation } from 'react-apollo';
import {gql} from 'apollo-boost';

import CollectionItem from './collection-item.component';

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!){
    mut_addItemToCart(item: $item) @client
  }
`;

const CollectionItemContainer = props =>(
  <Mutation mutation={ADD_ITEM_TO_CART}>
  {
    mut_addItemToCart => (
      <CollectionItem 
        {...props} 
        addItem={item => mut_addItemToCart({ variables: { item } })}
      />
    ) 
  }
  </Mutation>
);
    
export default CollectionItemContainer;