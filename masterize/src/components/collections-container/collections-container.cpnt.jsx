import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview.cpnt';
import CollectionOverview from '../collection-overview/collection-overview.cpnt';
import { connect } from 'react-redux';
import { selectShopData, selectShopDataCategory, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

import WithSpinner from '../with-spinner/with-spinner.cpnt';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPreviewWithSpinner = WithSpinner(CollectionPreview);

const CollectionContainer = ({category, isCollectionFetching, isCollectionLoaded, shop_data, shop_data_collection}) => {
    return (
        <>
        {   
            (category)
                ? <CollectionOverviewWithSpinner isLoading={!isCollectionLoaded} collection={shop_data_collection}/>
                : Object.keys(shop_data).map(key => 
                    <CollectionPreviewWithSpinner isLoading={!isCollectionLoaded} key={shop_data[key].id} category={shop_data[key]}/>)
        }
        </>
    )
};

const mapStateToProps = (state, ownProps) =>
    createStructuredSelector({
        isCollectionFetching: selectIsCollectionFetching,
        isCollectionLoaded: selectIsCollectionLoaded,
        shop_data: selectShopData,
        shop_data_collection: selectShopDataCategory(ownProps.category)
})
export default connect(mapStateToProps)(CollectionContainer);