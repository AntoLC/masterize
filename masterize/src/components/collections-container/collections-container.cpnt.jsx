import React, {useContext} from 'react';
import CollectionPreview from '../collection-preview/collection-preview.cpnt';
import CollectionOverview from '../collection-overview/collection-overview.cpnt';

import WithSpinner from '../with-spinner/with-spinner.cpnt';

import {CollectionsContext} from '../../providers/collections/collections.provider';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPreviewWithSpinner = WithSpinner(CollectionPreview);

const CollectionContainer = ({category}) => {
    const {shop_data, shopDataCategory} = useContext(CollectionsContext);
    return (
        <>
        {   
            (category)
                ? <CollectionOverviewWithSpinner isLoading={false} collection={shopDataCategory(category)}/>
                : Object.keys(shop_data).map(key => 
                    <CollectionPreviewWithSpinner isLoading={false} key={shop_data[key].id} category={shop_data[key]}/>)
        }
        </>
    );
};

export default CollectionContainer;