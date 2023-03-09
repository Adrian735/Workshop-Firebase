//                    EXERCISE 4 - POST JOKE                    //

// import express
const { Router } = require('express');

// import all the firebase stuff
const firebaseAdmin = require('../services/firebase-admin');


const PostJoke = Router();

function postJoke(joke) {
    return firebaseAdmin.database().ref('YourJoke/Adri').set({
        joke: joke
    });
}


PostJoke.post('/joke', async (req, res) => {
    try {
        const { Joke } = req.body;
        // here you have to use the firebaseAdmin api to get data from the database
        // The data you is an object named "joke-1" in the "MyJokes" collection
        await postJoke(Joke);

        // And then return the joke
        res.status(200).json({ message: 'Joke posted' });
    } catch (error) {
        // Return error if something goes wrong
        res.status(401).json({ message: error.message });
    }
});

// And then return a success message
module.exports = PostJoke;