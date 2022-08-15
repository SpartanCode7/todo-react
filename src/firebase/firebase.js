import firebase from 'firebase';

const firebaseConfig = {
	// Your Credentials
};
	
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;



// firebase init

// firebase deploy