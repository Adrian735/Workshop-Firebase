const { initializeApp } = require("firebase/app");

const firebase = initializeApp({
    apiKey: "AIzaSyDk6wzI2JeTpkzlCNkWW7Imamx0x_NjoOI",
    authDomain: "localhost",
    databaseURL: "https://workshop-firebase-ab36f-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "workshop-firebase-ab36f",
    storageBucket: "gs://workshop-firebase-ab36f.appspot.com",
    messagingSenderId: ""
});


module.exports = firebase;
