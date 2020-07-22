const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const postRoute = require('./routes/posts');

app.use(bodyParser.json());
app.use('/posts', postRoute);

app.get('/', (req, res) => {
    res.send('we are at home');
});


mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Connected to DB')
    );

app.listen(3000);