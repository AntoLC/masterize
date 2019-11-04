import React from 'react';
import { withRouter } from 'react-router-dom';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button';
import {STYLE_INVERTED} from '../custom-button/custom-button.styles';

import { connect } from 'react-redux';
import { addCartItems } from '../../redux/cart/cart.actions';


const CollectionItem = ({ addCartItems, item, history, match}) => {
    //console.debug(addCartItems)
    //onClick={() => history.push(`${match.url}${item.id}`)}
    return (
        <div className='collection-item'>
            <div
                style={{backgroundImage: `url(${item.imageUrl})`}} 
                className='image'>
            </div>
            <div className="collection-footer">
                <span className="name">{item.name.toUpperCase()}</span>
                <span className="price">{item.price}$</span>
            </div>
            <CustomButton className="custom-button" typeStyle={STYLE_INVERTED} onClick={() => addCartItems(item)}>Add to cart</CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addCartItems: (item) => dispatch(addCartItems(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);