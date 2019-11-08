import React, { createContext } from 'react';
import SHOP_DATA from './shop.data';

export const CollectionsContext = createContext({
    shop_data: SHOP_DATA,
    shopDataCategory: (category) => {return typeof category != 'undefined' ? SHOP_DATA[category] : null}
});