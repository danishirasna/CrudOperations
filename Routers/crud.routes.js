const express = require('express');
const contn = require('../Controler/Controler');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 

const seq_Contr=require('../Seq_Controler/controler');

app.use(express.static('public'));
app.use('/css',express.static(__dirname+'public/css'));
//Connect Database

app.get("/",(req, res) => {

    // contn.Selectdata(res);
    try {
        let valStore = seq_Contr.danish();//await contn.Selectdata();
        //res.send(valStore);
        res.render('layout1',{print:valStore});
      
            
        
    } catch (err) {
        res.send(err);
    }


});
app.post("/", async (req, res) => {

    // contn.InsertData(5,"danish",res);
    try {
        let valStore = await contn.InsertData(req.body.email1,req.body.password1 );
        res.render('Main',{value:valStore});
        //res.send(valStore);
    } catch (err) {
        res.render('Main',{value:err});
       // res.send(err);
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
app.get("/del", async (req, res) => {

    // contn.DeleteData(3, res);
    try {
        let valStore = await contn.DeleteData(0);
        res.send(valStore);
    } catch (err) {
        res.send(err);
    }
});






module.exports = app;