//                    EXERCISE 2 - LOGIN                    //

// import express
const { Router } = require('express');

// import all the firebase stuff
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const firebase = require('../services/firebase');

const Login = Router();

// You have to create a /login route (POST)
// This route will be used to login a user with email and password
// You have to use the firebase api to login a user (not firebase-admin)
// And then return the access token of the user

module.exports = Login;