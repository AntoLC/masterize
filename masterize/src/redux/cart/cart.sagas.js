import {all, call, takeLatest, put} from 'redux-saga/effects';

import UserActionsTypes from '../user/user.types';
import {clearCart, ActionImportCart} from './cart.actions';
import { importCart } from './cart.utils';

export function* clearCartOnSignOut(){
    yield put(clearCart());
}

export function* importCartSignIn(){
    try{
        const arrayCart = yield importCart();
        yield put(ActionImportCart(arrayCart));
    }catch(error){
    }
}

export function* onSignOutSuccess(){
    yield takeLatest(UserActionsTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onSignInSuccess(){
    yield takeLatest(UserActionsTypes.SIGN_IN_SUCCESS, importCartSignIn);
}

export function* cartSagas(){
    yield all([call(onSignOutSuccess), call(onSignInSuccess)]);
}