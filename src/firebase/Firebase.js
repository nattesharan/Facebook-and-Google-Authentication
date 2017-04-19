import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBzTDeYAcxpUq5Sfia_r61FTjNNEd2H3nE",
    authDomain: "authentication-c8e98.firebaseapp.com",
    databaseURL: "https://authentication-c8e98.firebaseio.com",
    storageBucket: "authentication-c8e98.appspot.com",
  };
  
 const firebaseApp  = firebase.initializeApp(config);

export default firebaseApp;
