import { takeLatest,call,put } from 'redux-saga/effects';
import {firestore,convertCollectionSnapshotToMap} from '../../firebase/firebase.utils'
import {FetchSuccessfull,FetchFailed} from './shop.actions'
import ShopActionTypes from "./shop.types"

export function* fetchCollectionsAsync(){
   try{
       const collectionRef = firestore.collection('collections');
       const snapshot = yield collectionRef.get();
       const collectionsMap = yield call(convertCollectionSnapshotToMap,snapshot)
       yield put(FetchSuccessfull(collectionsMap)) 
    }catch(err){
        yield put(FetchFailed(err.message))
   }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_START_ASYNC,fetchCollectionsAsync)
}