require("dotenv").config()

const express = require("express")
const app = express()

app.use(express.json())
app.use(express.static(public))

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

const storeItens = new Map([
    [1, {priceInCents: 1000, name: "Basic Subscription"}],
    [2, {priceInCents: 1500, name: "Premimum Subscription"}]
])

app.listen(3000)