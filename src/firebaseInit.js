import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDgIigNpWcUBq64xb5NjMYQunE5D9XxXrY',
  authDomain: 'vote-bab5e.firebaseapp.com',
  databaseURL: 'https://vote-bab5e.firebaseio.com',
  projectId: 'vote-bab5e',
  storageBucket: 'vote-bab5e.appspot.com',
  messagingSenderId: '949979190727',
  appId: '1:949979190727:web:79a0497615493c0c0275e2',
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
