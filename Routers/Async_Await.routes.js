const express = require('express');
const prom = require('../Promises-Asyn-Await-CallBack/Async_Await');
const app = express();

app.get("/", (req, res) => {

   prom.Find_Name(res,"Danish");
});
app.get("/danish", (req, res) => {

    prom.Find_Name(res,"Danish");
});
app.get("/fawad", (req, res) => {

    prom.Find_Name(res,"fawad");
});
app.get("/ali", (req, res) => {

    prom.Find_Name(res,"ali");
});
app.get("/fault", (req, res) => {

    prom.Find_Name(res,"error");
});





module.exports = app;