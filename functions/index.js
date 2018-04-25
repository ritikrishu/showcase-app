const functions = require('firebase-functions');
const express = require('express')

const app = express()
app.get('/api/timestamp', (req, res) => {
    res.send(`${Date.now()}`)
})

app.get('/api/cached-timestamp', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.send(`${Date.now()}`)
})

exports.app = functions.https.onRequest(app);
