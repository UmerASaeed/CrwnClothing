import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const Config = {
    apiKey: "AIzaSyCt-3pHeN6HpWyarJYcpmuT_YVuTuO_fSM",
    authDomain: "crwn-db-cd327.firebaseapp.com",
    databaseURL: "https://crwn-db-cd327.firebaseio.com",
    projectId: "crwn-db-cd327",
    storageBucket: "crwn-db-cd327.appspot.com",
    messagingSenderId: "10678362175",
    appId: "1:10678362175:web:88de318b9882ce1986188a",
    measurementId: "G-0R0378YWXB"
};


export const CreateUserProfileDocument= async (userAuth,additionData)=>
{
    if (!userAuth) return;
    
    const UserRef = firestore.doc(`users/${userAuth.uid}`);
    const SnapShot= await UserRef.get();    

    if(!SnapShot.exists)
    {
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            await UserRef.set({
                displayName,
                email,
                createdAt,
                ...additionData
            })
        }
        catch(err)
        {
            console.log("error creating user" ,err.message);
        }
    }

    return UserRef;
}

firebase.initializeApp(Config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;