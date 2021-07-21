const express = require('express')
const functions = require("firebase-functions");
const app = express()

const test = require('./')

app.get('/', (req, res)=>{
    res.status(200).send({ 'data': 'ok'})
})

app.use(test)

exports.app = functions.https.onRequest(app)
