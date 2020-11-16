const express = require('express');
const contn = require('../Controler/Controler');
const app = express();

//Connect Database
app.get("/",async (req, res) => {

    // contn.connector(res);
    try {
        let valStore = await contn.connector();
        res.send(valStore);
    } catch (err) {
        res.send(err);
    }
});
app.get("/select", async (req, res) => {

    // contn.Selectdata(res);
    try {
        let valStore = await contn.Selectdata();
        res.send(valStore);
    } catch (err) {
        res.send(err);
    }


});
app.get("/insert", async (req, res) => {

    // contn.InsertData(5,"danish",res);
    try {
        let valStore = await contn.InsertData(3, "danish");
        res.send(valStore);
    } catch (err) {
        res.send(err);
    }

});
app.get("/update", async (req, res) => {

    //contn.UpdateData(1, res);
    try {
        let valStore = await contn.UpdateData(1);
        res.send(valStore);
    } catch (err) {
        res.send(err);
    }
});
app.get("/delete", async (req, res) => {

    // contn.DeleteData(3, res);
    try {
        let valStore = await contn.DeleteData(3);
        res.send(valStore);
    } catch (err) {
        res.send(err);
    }
});






module.exports = app;