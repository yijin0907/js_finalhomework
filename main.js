const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', function(req, res) {
    res.send('Hello')
})

app.get('/homework', function(req, res) {
    res.send({
        "name": "陳奕瑾",
        "email": "yijin0907@gmail.com"
    })
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
