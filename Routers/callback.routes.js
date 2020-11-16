const express = require('express');
const prom = require('../CallBack/callback');
const app = express();

app.get("/", (req, res) => {

    function add(a, b) {
        res.send("Call Back Function Sum Is :" + (a + b));

    }

    prom.getInput(add)
});






module.exports = app;