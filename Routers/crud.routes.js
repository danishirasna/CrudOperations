const express = require('express');
const contn = require('../Controler/Controler');
const app = express();

app.get("/", (req, res) => {

    contn.connector(res);
});
app.get("/select", (req, res) => {

    contn.Selectdata(res);
});
app.get("/insert", (req, res) => {

    contn.InsertData(5,"danish",res);
});
app.get("/update", (req, res) => {

    contn.UpdateData(1,res);
});
app.get("/delete", (req, res) => {

    contn.DeleteData(3,res);
});




module.exports = app;