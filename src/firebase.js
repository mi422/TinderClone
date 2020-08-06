import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCFdr2_WjKjeGjyfPJlTnbLVXGHqg6WurA",
    authDomain: "tinder-clone-7e543.firebaseapp.com",
    databaseURL: "https://tinder-clone-7e543.firebaseio.com",
    projectId: "tinder-clone-7e543",
    storageBucket: "tinder-clone-7e543.appspot.com",
    messagingSenderId: "262792672367",
    appId: "1:262792672367:web:5995a7749fb706b068899a",
    measurementId: "G-RDKJ7VZ76P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;