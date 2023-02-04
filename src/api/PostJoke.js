//                    EXERCISE 4 - POST JOKE                    //

// import express
const { Router } = require('express');

// import all the firebase stuff
const firebaseAdmin = require('../services/firebase-admin');


const PostJoke = Router();

// You have to create a /joke route (POST)
// This route will be used to post a joke in the database
// You have to use the firebase-admin api to post a joke in "YourJokes" collection
// Yours jokes has to be a good one !


// And then return a success message
module.exports = PostJoke;