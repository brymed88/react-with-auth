const express = require('express');
const app = express();
const { log } = require("./src/config/logger");

const authRoute = require('./src/routes/auth.route');
const contactRoute = require('./src/routes/contact.route');
const userRoute = require('./src/routes/user.route');

require('dotenv').config();

const aport = process.env.PORT || process.env.expressPort;

app.listen(aport, () => { log.info("server - started on port " + aport); });

app.use(express.json());

/**
 * Enable cors and allow incoming connection from clientside
 */

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/', (req,res) => {
    res.json({"message":"Hello World"});
})

app.use('/api/auth', authRoute);
app.use('/api/contact', contactRoute);
app.use('/api/user', userRoute);