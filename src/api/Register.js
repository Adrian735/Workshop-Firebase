//                    EXERCISE 1 - REGISTER                    //

// import express
const { Router } = require('express');

// import all the firebase stuff
const firebaseAdmin = require('../services/firebase-admin');


const Register = Router();


Register.post('/register', async (req, res) => {
    try {
        // Get the email and password from the request body
        const { email, password } = req.body;

        // here you have to use the firebaseAdmin api to create a new user
        
        // And then return a success message
        res.status(200).json({ message: '' });
    } catch (error) {
        // Return error if something goes wrong
        res.status(401).json({ message: error.message });
    }
});

module.exports = Register;