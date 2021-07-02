import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC52QcdouXdRxsXeVxsLcQ-qamcIx4suMM",
  authDomain: "proaa-f44e1.firebaseapp.com",
  projectId: "proaa-f44e1",
  storageBucket: "proaa-f44e1.appspot.com",
  messagingSenderId: "793138215677",
  appId: "1:793138215677:web:b196c05688cd86c7861c94",
  measurementId: "G-LMHLX0PEKV"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };