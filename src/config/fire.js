import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAaHwjY-mZOTu5e6NPtdPzSu66_7qrB21U",
  authDomain: "cpf-storage.firebaseapp.com",
  databaseURL: "https://cpf-storage.firebaseio.com",
  projectId: "cpf-storage",
  storageBucket: "cpf-storage.appspot.com",
  messagingSenderId: "388628228484",
  appId: "1:388628228484:web:83546bebe1b78043"
};
//   // Initialize Firebase
var fire = firebase.initializeApp(config)

export default fire