import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAQfyqNSJPWODZKyTIna0t-MNSF1TD0JcE",
  authDomain: "khizar-mario-plan.firebaseapp.com",
  databaseURL: "https://khizar-mario-plan.firebaseio.com",
  projectId: "khizar-mario-plan",
  storageBucket: "",
  messagingSenderId: "239035086955",
  appId: "1:239035086955:web:ee262a6e0c68e1b2e2592e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;