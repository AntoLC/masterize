import React, { createContext } from 'react';
import {selectShopData} from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SHOP_DATA from './shop.data';



const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;