import React from 'react';
import {gql} from 'apollo-boost';
import { useQuery, useMutation} from '@apollo/react-hooks';

import App from './App';

const SET_CURRENT_USER = gql`
    mutation SetCurrentUser($userAuth: UserAuth!){
        setCurrentUser(userAuth: $userAuth) @client
    }
`;

const GET_CURRENT_USER = gql`{
    currentUser @client
}`;

const AppContainer = () => {
    const [setCurrentUser] = useMutation(SET_CURRENT_USER);
    const { data:{currentUser} } = useQuery(GET_CURRENT_USER);
    
    return (
        <App 
            currentUser={currentUser} 
            setCurrentUser={userAuth => setCurrentUser({ variables: { userAuth } })}
        />
    );
};

export default AppContainer;