const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI


// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('demo', 'root', '', {
  host: 'localhost',
  dialect:"mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
module.exports=sequelize;
