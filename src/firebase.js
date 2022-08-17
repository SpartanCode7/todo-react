import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAerJmXfbwSGH_EXDLTlcfOOsoS9BFf08E",
	authDomain: "facebook-f5641.firebaseapp.com",
	databaseURL: "https://facebook-f5641-default-rtdb.firebaseio.com",
	projectId: "facebook-f5641",
	storageBucket: "facebook-f5641.appspot.com",
	messagingSenderId: "34156003516",
	appId: "1:34156003516:web:4be5fd2092ecf87b0dd0b9",
	measurementId: "G-NGXME3SN7R"
})
 
const db = firebaseApp.firestore(); 

export default db;

