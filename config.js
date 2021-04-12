import firebase from 'firebase'
require ('@firebase/firestore')

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBa1W1S-es8p6xxnhoz5l2IMpAaHc-ia3c",
    authDomain: "storyhubapp-1a1ae.firebaseapp.com",
    projectId: "storyhubapp-1a1ae",
    storageBucket: "storyhubapp-1a1ae.appspot.com",
    messagingSenderId: "703042084637",
    appId: "1:703042084637:web:d17cadc25e50361298cbf4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore()
