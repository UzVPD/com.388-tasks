const express = require('express')
const app = express()
const body = require('body-parser')

app.use(body.urlencoded({ extended: true }));

const port = 80;
app.set('view engine', 'pug')

app.get('/', (req, res) => {
     res.render('index', { title: 'Welcome', message: 'Hi, what is your name?' })
})

app.post('/enter', (req, res) => {
     var name = req.body.name
     res.render('enter', { title: `Welcome`, message: `Hello ${name}!` })
})

app.listen(port, function () {
     console.log(`App is listenning on port ${port}...`)
})