import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyB_nIjphG-NVdFerbMNXeX_zB-yWI0GdP8",
  
    authDomain: "camaraderie-d0721.firebaseapp.com",
  
    projectId: "camaraderie-d0721",
  
    storageBucket: "camaraderie-d0721.appspot.com",
  
    messagingSenderId: "1060080959426",
  
    appId: "1:1060080959426:web:b5e375dcbc9678042c205b",
  
    measurementId: "G-7R4S4FCM9W"
  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const database = firebaseApp.firestore();

  export default database;