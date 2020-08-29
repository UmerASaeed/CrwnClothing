import ShopActionTypes from "./shop.types"
import {firestore,convertCollectionSnapshotToMap} from '../../firebase/firebase.utils'


export const FetchStart = () =>
{
    return{
        type:ShopActionTypes.FETCH_START_ASYNC,
    }
}

export const FetchSuccessfull = (collection) =>
{
    return{
        type:ShopActionTypes.FETCH_SUCCESSFULL_ASYNC,
        payload:collection
    }
}

export const FetchFailed = (errorMessage) =>
{
    return{
        type:ShopActionTypes.FETCH_FAILED_ASYNC,
        payload:errorMessage
    }
}


export const FetchStartAsync = () =>
{
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(FetchStart())

        collectionRef.get()
        .then( snapShot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapShot)
            dispatch(FetchSuccessfull(collectionsMap))   
        })
        .catch(err=>{
            dispatch(FetchFailed(err.message))
        })
    }
}