import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    shop => (shop.collections) ? shop.collections : []
); 

export const selectShopDataLocal = createSelector(
    [selectShop],
    shop => (shop.collections_data) ? shop.collections_data : []
); 

export const selectCollectionsForPreview = createSelector(
    [selectShopDataLocal],
    collections_data => Object.keys(collections_data).map(key => collections_data[key])
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
); 

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
); 

export const selectShopDataCategory = (category) =>{
    return createSelector(
        [selectShopData],
        collections => typeof category != 'undefined' ? collections[category] : null
    )
};