import {auth, firestore} from './firebase.utils';


export const addCartAndDocuments = async (collectionKey, cartToAdd) => {
    console.debug("addCartAndDocuments",cartToAdd);
    
    try {   // auth.currentUser.uid can be null
        cartToAdd.userID = auth.currentUser.uid;
        return firestore.collection(collectionKey).doc().set(cartToAdd);
    }
    catch{
    }
};

const getCartItemFromID = async (cartID) =>{
    const snapshotCartItem = await selectCart((query) => query.where('id', '==', cartID));

    if(! snapshotCartItem) return {data: {qty:0}};

    let cartItem = {};
    snapshotCartItem.forEach(doc => {
        cartItem.data = doc.data();
        cartItem.ID   = doc.id;
    });

    return cartItem;
}

export const updateQtyCart = async (cart, qty) => {
    const cartItem = await getCartItemFromID(cart.id);
    if(cartItem.length){
        cartItem.data.qty = qty;
        firestore.collection('carts').doc(cartItem.ID).set(cartItem.data);
    }
};

export const removeCart = async (cartID) => {
    const cartItem = await getCartItemFromID(cartID);
    if(cartItem.length)
        firestore.collection('carts').doc(cartItem.ID).delete();
};

export const removeAllCart = async () => {
    const snapshotCartItem = await selectCart();

    if(! snapshotCartItem) return {};

    snapshotCartItem.forEach(doc => {
        firestore.collection('carts').doc(doc.id).delete();
    });
};

/*
    otherRequest: Decorator - To be able to perform other request
*/
export const selectCart = async (otherRequest = (query) => query) => {
    try {   // auth.currentUser.uid can be null
        console.debug("selectCartFromUserID", auth.currentUser.uid);

        let query = firestore.collection('carts').where('userID', '==', auth.currentUser.uid);
        query = otherRequest(query);
        const snapshotCart = await query.get()
            .then(snapshot => {
                if (snapshot.empty) {
                    console.log('No matching documents.');
                    return;
                }  

                /*
                snapshot.forEach(doc => {
                    console.log(doc.id, '=>', doc.data());
                });*/

                return snapshot;
            })
            .catch(err => {
                console.log('Error getting documents', err);
            });

        return snapshotCart;
    }
    catch{
    }
};