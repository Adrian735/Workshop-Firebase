//                    EXERCISE 2 - LOGIN                    //

// import express
const { Router } = require('express');

// import all the firebase stuff
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const firebase = require('../services/firebase');

const Login = Router();

Login.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;

      // Sign in user with Firebase Auth
      const user = await signInWithEmailAndPassword(getAuth(firebase), email, password);
      res.status(200).json(user);

    } catch (error) {
      // Return error
      res.status(401).json({ message: error.message });
    }
});

module.exports = Login;