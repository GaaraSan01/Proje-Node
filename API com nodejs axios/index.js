const express = require('express')
const axios = require('axios')
const app = express()

app.listen('3000')

app.route('/').get((req,res) => {
    axios.get('https://api.github.com/users/GaaraSan01')
    .then((result) => {
        res.send(`<img src="${result.data.avatar_url}"/>`)
    }).catch((err) => {
        console.error(err)
    });
})