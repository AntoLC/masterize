import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-cart.svg';

import { connect } from 'react-redux';
import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({toggleCartHidden, nb_items}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
      <i className="fas fa-shopping-cart shopping-icon"></i>
      <span className='item-count'>{nb_items}</span>
  </div>
)

const mapStateToProps = createStructuredSelector({
  nb_items: selectCartItemsCount,
});
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
