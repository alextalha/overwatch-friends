import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCRdeu2-cbSC9CXbb9evgZrqJZQkKTiqYg",
  authDomain: "overwatch-friends.firebaseapp.com",
  projectId: "overwatch-friends",
  storageBucket: "overwatch-friends.appspot.com",
  messagingSenderId: "610276308965",
  appId: "1:610276308965:web:e07b17edba0889d351610c"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);