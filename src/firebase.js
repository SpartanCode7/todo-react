import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAEloioqwpjdKtyy4apfXLVFKdvI-760DE",
	authDomain: "todo-app-cp-b6cc7.firebaseapp.com",
	projectId: "todo-app-cp-b6cc7",
	storageBucket: "todo-app-cp-b6cc7.appspot.com",
	messagingSenderId: "902115878052",
	appId: "1:902115878052:web:7351145cc23c0a62bb7231",
	measurementId: "G-9GYLTL11VY"
})
 
const db = firebaseApp.firestore(); 

export { db };

