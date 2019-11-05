
import React from 'react';
import CollectionContainer from '../../components/collections-container/collections-container.cpnt';

const Shop = ({match}) => {
    const {category} = match.params;
    return(
        <div className='shop-page'>
            <CollectionContainer category={category}/>
        </div>
    )
}

export default Shop; 