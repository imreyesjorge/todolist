import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: 'AIzaSyCMyVQcVxMAXpeDw0vuvQOVqXolbtKp0DQ',
   authDomain: 'todolist-jr.firebaseapp.com',
   projectId: 'todolist-jr',
   storageBucket: 'todolist-jr.appspot.com',
   messagingSenderId: '970745306776',
   appId: '1:970745306776:web:fff20641cc3777e40efaed',
   measurementId: 'G-7RJLMX67DR',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
