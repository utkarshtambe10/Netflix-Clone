import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCL20yL9JbpIXFRLaDjh-dH5BTY7YdrXLw",
    authDomain: "netflix-clone-f58a7.firebaseapp.com",
    projectId: "netflix-clone-f58a7",
    storageBucket: "netflix-clone-f58a7.appspot.com",
    messagingSenderId: "1004053514057",
    appId: "1:1004053514057:web:83ba9acb3ddb1bbdb4fc98"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db  = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;