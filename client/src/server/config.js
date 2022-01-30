import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const dbconfig = {
    apiKey: "AIzaSyBI-M_nO4qiuEOJduOMAKUtDdxAM8HWMjM",
    authDomain: "kitchen-tech-users.firebaseapp.com",
    projectId: "kitchen-tech-users",
    storageBucket: "kitchen-tech-users.appspot.com",
    messagingSenderId: "1037106395290",
    appId: "1:1037106395290:web:e243171b3a251fee144723",
    measurementId: "G-P81T7XM6ZB"
  };

const start = firebase.initializeApp(dbconfig);
const db = start.firestore();
const auth = start.auth();

export default { auth, db };