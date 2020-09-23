import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6rDwDVGHXT2KaYVdw0A4dROUkwV9TSeU",
  authDomain: "clone-16e68.firebaseapp.com",
  databaseURL: "https://clone-16e68.firebaseio.com",
  projectId: "clone-16e68",
  storageBucket: "clone-16e68.appspot.com",
  messagingSenderId: "800151928393",
  appId: "1:800151928393:web:a04e3a675e1fd494954998",
  measurementId: "G-CHT3Z92GMH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
