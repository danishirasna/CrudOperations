const con = require('../Connection/MySql');



var InsertData = (id,name,res) => {

    
        var sql = "INSERT INTO product (ProductId, ProductName) VALUES ('" + id + "', '"+name+"')";
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.send("1 record inserted");
        });
  

}
var Selectdata = (res) => {
    
        con.query("SELECT * FROM product", function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
   
}
var UpdateData = (id,res) => {
    
        var sql = "UPDATE product SET ProductName = 'Canyon 123' WHERE ProductId = '" + id + "'";
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.send(result.affectedRows + " record(s) updated");
        });
    
}
var DeleteData = (id,res) => {
   
        var sql = "DELETE FROM product WHERE ProductId = '" + id + "'";
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.send("Number of records deleted: " + result.affectedRows);
        });
   
}
var connector=(res)=>{
    con.connect(function(err) {
        if (err) throw err;
        res.send("Connected MySql ...!");
        console.log("Connected MySql ...!");
      });
}
 module.exports={InsertData,Selectdata,UpdateData,DeleteData,connector}