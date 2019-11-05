import React, {useContext} from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import CartContext from "../../contexts/cart/cart.context";

const CartIcon = ({nb_items}) => {
  const {toggleHidden} = useContext(CartContext);
  return(
    <div className="cart-icon" onClick={toggleHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{nb_items}</span>
    </div>
  )
}



const mapStateToProps = createStructuredSelector({
  nb_items: selectCartItemsCount,
});
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
