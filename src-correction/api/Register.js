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

        const user = await firebaseAdmin.auth().createUser({
            email,
            password
        });
    
        // Return success
        res.status(200).json({ message: 'User registered successfully'});
        
    } catch (error) {
        // Return error if something goes wrong
        res.status(401).json({ message: error.message });
    }
});

module.exports = Register;