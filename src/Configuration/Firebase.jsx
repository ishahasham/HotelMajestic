// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPrlo2xML7tnUHGsvRb5ckiBpfNDXrD2I",
  authDomain: "minihackathon-700a7.firebaseapp.com",
  projectId: "minihackathon-700a7",
  storageBucket: "minihackathon-700a7.appspot.com",
  messagingSenderId: "719535931953",
  appId: "1:719535931953:web:f49bf386623743e1a28b10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export { auth, db};
