const firebase = require('firebase-admin');
const serviceAccount = require('../config/firebase-admin.json');

const firebaseAdmin = firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://workshop-firebase-ab36f-default-rtdb.europe-west1.firebasedatabase.app/'
});

module.exports = firebaseAdmin;