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


firebase.initializeApp(Config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;