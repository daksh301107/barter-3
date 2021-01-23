import firebase from 'firebase';
require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyBYpGH7ZCpFQ1iIlGr8uhwRfaWb9qd8oso",
    authDomain: "booksanta-c3093.firebaseapp.com",
    projectId: "booksanta-c3093",
    storageBucket: "booksanta-c3093.appspot.com",
    messagingSenderId: "327771611502",
    appId: "1:327771611502:web:79b08d0d28e5b178e8e17f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
  