// 1. Import firebase 
import firebase from 'firebase';

// 2. Copy & Paste your config object given in firebase
var config = {
  apiKey: "AIzaSyAyB0l5IzMThA0LlrBkE3jGxGR9wTTstkM",
  authDomain: "fir-react-auth-a50c3.firebaseapp.com",
  databaseURL: "https://fir-react-auth-a50c3.firebaseio.com",
  projectId: "fir-react-auth-a50c3",
  storageBucket: "fir-react-auth-a50c3.appspot.com",
  messagingSenderId: "8173353997"
};

// 3. Initialize firebase app
const fire = firebase.initializeApp(config);
export default fire;