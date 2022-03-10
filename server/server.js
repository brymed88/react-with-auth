import express from 'express';

import { log } from "./src/config/logger.js";

import {authRoute} from './src/routes/auth.route.js';
import {contactRoute} from './src/routes/contact.route.js';
import {accountRoute} from './src/routes/account.route.js';

import {} from 'dotenv/config';
const config = process.env;

const aport = config.PORT || config.expressPort;

const app = express();
app.use(express.json());

app.listen(aport, () => { log.info("server - started on port " + aport); });

/*Connect the the MongoDB */
import db from './src/config/database.js';
db.connect();

/**
 * Enable cors and allow incoming connection from clientside
 */

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/', (req, res) => {
  res.json({ "message": "Hello World" });
})

app.use('/api/auth', authRoute);
app.use('/api/contact', contactRoute);
app.use('/api/account', accountRoute);