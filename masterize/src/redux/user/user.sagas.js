import {takeLatest, put, call, all} from 'redux-saga/effects';
import UserActionsTypes from './user.types';
import {
    auth, 
    googleProvider, 
    createUserProfileDocument, 
    getCurrentUser} from '../../firebase/firebase.utils';
import { 
    signInSuccess, 
    signInFailure,
    signOutSuccess, 
    signOutFailure,
    signUpSuccess, 
    signUpFailure,
} from './users.actions';

export function* signIn(sightInWith){
    try{
        const {user} = yield sightInWith();
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    }catch(error){
        yield put(signInFailure(error));
    }
}

export function* signInWithGoogle(){
    yield signIn(() => auth.signInWithPopup(googleProvider));
}

export function* signInWithEmailAndPassword({payload: { email, password }}){
    yield signIn(() => auth.signInWithEmailAndPassword(email, password));
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionsTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart(){
    yield takeLatest(UserActionsTypes.EMAIL_SIGN_IN_START, signInWithEmailAndPassword);
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    }catch(error){
        yield put(signInFailure(error));
    }
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionsTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOut(){
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

export function* onUserSignOut(){
    yield takeLatest(UserActionsTypes.SIGN_OUT_START, signOut)
}

export function* signUp({payload: {displayName, email, password}}){
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({user, additionalData: {displayName}}));
    } catch (error) {
        yield put(signUpFailure(error));
    }
}

export function* onUserSignUp(){
    yield takeLatest(UserActionsTypes.SIGN_UP_START, signUp)
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart), 
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onUserSignOut),
        call(onUserSignUp)
    ]);
} 