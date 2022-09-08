import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/make-991f6/us-central1/api'
});

export default instance;



//  function index.js


// const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");

// const stripe = require("stripe")
// ("sk_test_51La1gUSDcCLOLGYSuFTOi21xtNdPenfTSEr6xjhdqx6ph0qZigam4pHF6PSAimHVQBYogxBX72RSv1Qm5tfsPKmV00v3QK1Uqg")


// // API

// // API config
// const app = express();
// // Middlewares
// app.use(cors({origin: true}));
// app.use(express.json());

// // API routes
// app.get('/', (request, response) =>  response.status(200). send('hello world'))

// // app.get('/pankaj', (request, response) =>  response.status(200). send('hello Sir'))

// app.post('/payments/create', async (request, response) => {
//     const total = request.query.total;

//     console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total)

//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: total,
//         currency: "INR",
//     });

//     response.status(201).send({
//         clientSecret: paymentIntent.client_secret,
//     });

// });

// // Listen command

// exports.api = functions.https.onRequest(app)