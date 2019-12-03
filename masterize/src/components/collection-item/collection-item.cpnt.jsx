import React from 'react';

import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button';
import {STYLE_INVERTED} from '../custom-button/custom-button.styles';

import { connect } from 'react-redux';
import { addCartItems } from '../../redux/cart/cart.actions';

import { gsap } from "gsap";
import { Power1 } from "gsap/all";


const CollectionItem = ({ addCartItems, item}) => {
    const cart_effect = (el) => {
        const parentDiv = el.target.parentElement;
        const imageEffect = parentDiv.querySelector('.collection-item-effect-cart');
        const topScreen = (document.documentElement.scrollTop) - (imageEffect.height / 2);
        const widthScreen = (window.screen.width-60) - (imageEffect.width / 2);

        gsap.timeline().to(imageEffect, {
            top: parentDiv.offsetTop,
            left: parentDiv.offsetLeft,
            display:'block', 
            duration: 0
        })
        .to(imageEffect, {
            opacity: 1, 
            duration: 0.1
        })
        .to(imageEffect, {
            css : {
                scale:.05, 
                rotationX:-360, 
                rotationY:360,
                top:topScreen, 
                left:widthScreen,
            },
            ease: Power1.easeIn,
            duration: 1
        })
        .to(imageEffect, {
            css : {
                scale:1,
                display:'none', 
                rotationX:0, 
                rotationY:0, 
            },
            duration: 0
        });
    }


    return (
        <div className='collection-item'>
            <img className='collection-item-effect-cart' src={item.imageUrl} alt="item-effect-cart"/>
            <div
                style={{backgroundImage: `url(${item.imageUrl})`}} 
                className='image'>
            </div>
            <div className="collection-footer">
                <span className="name">{item.name.toUpperCase()}</span>
                <span className="price">{item.price}$</span>
            </div>
            <CustomButton className="custom-button" typeStyle={STYLE_INVERTED} onClick={(el) => {cart_effect(el); addCartItems(item)}}>Add to cart</CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addCartItems: (item) => dispatch(addCartItems(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);