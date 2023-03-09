const express = require('express');
const bodyParser = require('body-parser');

const Register = require('./api/Register');
const Login = require('./api/Login');
const GetJoke = require('./api/GetJoke');
const PostJoke = require('./api/PostJoke');

const app = express();
app.use(bodyParser.json());

// ex 1
app.use('/', Register);
// ex 2
app.use('/', Login);
// ex 3
app.use('/', GetJoke);
// ex 4
app.use('/', PostJoke);

app.listen(8080, () => {
    console.log('Server started on port 8080');
});