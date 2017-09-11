const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.redirect('/homework')
})

app.get('/homework', function(req, res) {
    res.send({
        "name": "陳奕瑾",
        "email": "yijin0907@gmail.com"
    })
})

app.listen(3000, function(req, res) {
    console.log('Example app listening on port 3000!')
})