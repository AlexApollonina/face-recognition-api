const express = require('express');
const app = express();
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const postgresDB = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : 5432,
    user : 'postgres',
    password : 'root',
    database : 'face_recognition'
  }
});



app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('success');
})

app.post('/signin', (req, res) =>{signin.handleSignin(req, res, postgresDB, bcrypt)})

app.post('/register', (req, res) =>{register.handleRegister(req, res, postgresDB, bcrypt)});

app.get('/profile/:id', (req, res) => {profile.handleProfile(req, res, postgresDB)});

app.put('/image', (req, res) => {image.handleImage(req, res, postgresDB)});
app.listen(3000, ()=> {
    console.log('app is running on 3000 port');
})