const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.render('main',{value:'hey danish this working'});
});








module.exports = app;