
import React, {useEffect} from 'react';
import CollectionContainer from '../../components/collections-container/collections-container.cpnt';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const Shop = ({match, fetchCollectionsStart}) => {
    const {category} = match.params;

    useEffect(() => {
        fetchCollectionsStart();
    },[fetchCollectionsStart]);

    return(
        <div className='shop-page'>
            <CollectionContainer category={category}/>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()) 
});
export default connect(null, mapDispatchToProps)(Shop); 