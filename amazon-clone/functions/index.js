const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");

const stripe = require("stripe")(
  "sk_test_51HQyhqJHbiVrVxeAnWtIfiVZsWnQ8NBcAUVZD51CjXnF4kM2k0W6feoGjpDKQArGyevj0hOfauQmDgzrEA30awCy00A1jpSCwD"
);
//API

// App config
const app = express();

// Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

//API routes

app.get("/", (request, response) => response.status(200).send("hello word"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request received BOOM/1 ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
// http function initialized (http://localhost:5001/clone-16e68/us-central1/api).
