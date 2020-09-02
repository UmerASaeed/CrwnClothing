import { takeLatest,call,put,all} from 'redux-saga/effects';
import {googleSignInSuccess,googleSignInFailure,emailSignInSuccess,emailSignInFailure,signOutSuccess,signUpSuccess,signUpFailed} from './user.action'
import {UserActionTypes} from "./user.types"
import {auth,googleProvider,CreateUserProfileDocument,firestore,userPersistence} from "../../firebase/firebase.utils"
import {ClearCart} from "../cart/cart.actions"

export function* googleSignIn()
{
    try {
        const {user} = yield auth.signInWithPopup(googleProvider)
        const userRef =yield call(CreateUserProfileDocument,user)
        const userSnapshot = yield userRef.get()
        yield put(googleSignInSuccess({id:userSnapshot.id,...userSnapshot.data()}))
    } catch (error) {
        yield put(googleSignInFailure(error))
    }
}


export function* emailSignIn(emailAndPassword)
{
    const {email,password} = emailAndPassword.payload;
    try {
        const {user}=yield auth.signInWithEmailAndPassword(email,password); 
        const UserRef = firestore.doc(`users/${user.uid}`);
        const userSnapshot= yield UserRef.get();    
        yield put(emailSignInSuccess({id:userSnapshot.id,...userSnapshot.data()}))  
    } 
    catch (error) {
        yield put(emailSignInFailure(error))
    }
}

export function* isUserAuthenticated(){
    try {
        const user = yield userPersistence()
        const UserRef = firestore.doc(`users/${user.uid}`);
        const userSnapshot= yield UserRef.get();   
        yield put(emailSignInSuccess({id:userSnapshot.id,...userSnapshot.data()}))  

    } catch (error) {
        yield put(emailSignInFailure(error))
    }
}

export function* signOut()
{
    try {
        yield put(signOutSuccess())
        yield put(ClearCart())
    } catch (error) {
        yield put(emailSignInFailure(error))
    }
}

export function* signUp(UserData)
{
    const {displayName,email,password}=UserData.payload
    try {
        const userAuth = yield auth.createUserWithEmailAndPassword(email,password);
        userAuth.user.updateProfile({
            displayName:displayName
        })
        const {user}=userAuth
        const UserRef = yield CreateUserProfileDocument(user)
        const userSnapshot= yield UserRef.get();  
        console.log(userSnapshot.data())
        yield put(signUpSuccess({id:userSnapshot.id,...userSnapshot.data()})) 
    } catch (error) {
        yield put(signUpFailed(error))
    }
}

export function* googleSignInStart()
{
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,googleSignIn)
}

export function* EmailSignInStart()
{
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,emailSignIn)
}

export function* onCheckUserSession()
{
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}

export function* onSignOut()
{
    yield takeLatest(UserActionTypes.SIGN_OUT_START,signOut)
}

export function* onSignUp()
{
    yield takeLatest(UserActionTypes.SIGN_UP_START,signUp)
}

export function* userSagas(){
    yield all([call(googleSignInStart),call(EmailSignInStart),call(onCheckUserSession),call(onSignOut),call(onSignUp)])
}