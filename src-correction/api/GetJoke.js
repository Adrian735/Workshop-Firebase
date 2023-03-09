//                    EXERCISE 3 - GET JOKE                    //

// import express
const { Router } = require('express');

// import all the firebase stuff
const firebaseAdmin = require('../services/firebase-admin');


const GetJoke = Router();

function getJoke() {
    return firebaseAdmin.database().ref('/MyBestJoke/Joke-1').once('value').then(function (snapshot) {
        return snapshot.val();
    });
}


GetJoke.get('/joke', async (req, res) => {
    try {
        // here you have to use the firebaseAdmin api to get data from the database
        // The data you is an object named "joke-1" in the "MyJokes" collection
        const joke = await getJoke();

        // And then return the joke
        res.status(200).json({ message: joke });
    } catch (error) {
        // Return error if something goes wrong
        res.status(401).json({ message: error.message });
    }
});

module.exports = GetJoke;