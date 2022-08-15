// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0iS_GFBVFD4dz6R06tH5XBe9RdqJUU4Q",
  authDomain: "todo-3ef17.firebaseapp.com",
  projectId: "todo-3ef17",
  storageBucket: "todo-3ef17.appspot.com",
  messagingSenderId: "219275383189",
  appId: "1:219275383189:web:b4317b22d615541fd9a69c",
  measurementId: "G-DSLS0KNYWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);