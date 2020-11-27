const {DataTypes } = require('sequelize');
const db=require('../config/db_connnection')


const Product = db.define('Product', {
  // Model attributes are defined here
  ProductId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true
  },
  ProductName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
 tableName:"product",
 timestamps:false

});
module.exports=Product;