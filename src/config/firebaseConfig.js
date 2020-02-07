import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMrNSUI4o0XUWBJWBaHJFRPOSL4NKkWUE",
  authDomain: "whatchutalkinabout.firebaseapp.com",
  databaseURL: "https://whatchutalkinabout.firebaseio.com",
  projectId: "whatchutalkinabout",
  storageBucket: "whatchutalkinabout.appspot.com",
  messagingSenderId: "803868392150",
  appId: "1:803868392150:web:e54adec32a710cfdc12777",
  measurementId: "G-EFFL33WKHW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
