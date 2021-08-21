import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyChpjna8gCdTpQvaD68l7VGl7K2hac0EoA',
	authDomain: 'whatsapp-2-358a0.firebaseapp.com',
	projectId: 'whatsapp-2-358a0',
	storageBucket: 'whatsapp-2-358a0.appspot.com',
	messagingSenderId: '1071012829688',
	appId: '1:1071012829688:web:096ef72c0f8f2fa11d1e0d',
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};
