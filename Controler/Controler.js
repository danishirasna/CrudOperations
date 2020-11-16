const conValueGet = require('../Connection/MySql');
var mysql = require('mysql');


let con = mysql.createConnection(conValueGet);//connection create here....

//insert Data In database
let InsertData = (id, name) => {
    var sql = "INSERT INTO product (ProductId, ProductName) VALUES ('" + id + "', '" + name + "')";
    return new Promise((res, rej) => {
        con.query(sql, function (err, result) {
            if (err) {
                rej(err);
            }
            else {
                res("1 record inserted");
            }
        });
    });
}
//Select Data In database
var Selectdata = () => {
    var sql = "SELECT * FROM product";
    return new Promise((res, rej) => {
        con.query(sql, function (err, result, fields) {
            if (err) {
                rej(err);
            }
            else {
                res(result);
            }
        });
    });  

}
//Update Data In database
var UpdateData = (id) => {

    var sql = "UPDATE product SET ProductName = 'Canyon 123' WHERE ProductId = '" + id + "'";
    return new Promise((res, rej) => {
        con.query(sql, function (err, result) {
            if (err) {
                rej(err);
            }
            else {
                res(result.affectedRows + " record(s) updated");
            }
        });
    });  

}
//Delete Data In database
var DeleteData = (id) => {

    var sql = "DELETE FROM product WHERE ProductId = '" + id + "'";
    return new Promise((res, rej) => {
        con.query(sql, function (err, result) {
            if (err) {
                rej(err);
            }
            else {
                res("Number of records deleted: " + result.affectedRows);
            }
        });
    });  
    
}
var connector = () => {
    return new Promise((res, rej) => {
        con.connect(function (err)  {
            if (err) {
                rej(err);
            }
            else {
                res("Connected MySql ...!");
            }
        });
    });  
   
}
module.exports = { InsertData, Selectdata, UpdateData, DeleteData, connector }