require("dotenv").config()

const express = require("express")
const app = express

app.requuest(express.json())

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

app.listen(3000)