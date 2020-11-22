import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyDLirQkS4PhzipMV8bskrhNxVNFR3wAqvk",
    authDomain: "practice-eccomerce.firebaseapp.com",
    databaseURL: "https://practice-eccomerce.firebaseio.com",
    projectId: "practice-eccomerce",
    storageBucket: "practice-eccomerce.appspot.com",
    messagingSenderId: "645554577837",
    appId: "1:645554577837:web:0442b6c9e83f4cad29c124",
    measurementId: "G-3Q5HM64ESK"
  };

  export const createUserProfile = async (userAuth, additionalData) => {

    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);


    const {displayName, email} = userAuth;
    const createdAt = new Date();


      try{

        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      }catch(error){
        console.log('error creating user', error.message);

      }
      return userRef;
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;