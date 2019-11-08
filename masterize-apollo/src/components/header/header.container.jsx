import React from 'react';
import {gql} from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import Header from './header.component';

const GET_CART_HIDDEN = gql`{
    cartHidden @client
}`;
const GET_CURRENT_USER = gql`{
    currentUser @client
}`;

const HeaderContainer = () => {
    const { data:{currentUser} } = useQuery(GET_CURRENT_USER);
    const { data:{cartHidden} } = useQuery(GET_CART_HIDDEN);
    return(<Header hidden={cartHidden} currentUser={currentUser}/>);
}

export default HeaderContainer;