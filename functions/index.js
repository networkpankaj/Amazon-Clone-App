const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('pk_test_51La1gUSDcCLOLGYStK8YDKUl5CaPfNUxQ2jMyg6v8vEsKrTVZjJg84UH47qEkhFTMCuOrzH9hFSPcO2AgAvqvPFy00Ei8PTJnH');

// API config
const app = express();
// Middlewares
app.use(cors({origin: true}));
app.use(express.json());
// API routes
app.get('/', (request, response) =>  response.status(200).send('hello world'))
// app.get('/', (request, response) =>  response.status(200). 
// send('hello world'))

exports.api = functions.https.onRequest(app)


// http://localhost:5001/make-991f6/us-central1/api
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
