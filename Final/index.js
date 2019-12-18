const express = require('express')
const app = express()
const fs = require('fs')


app.post('/welcome', (req, res) => {
     fs.readFileSync('index.html', 'utf-8')
})
