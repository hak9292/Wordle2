const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.JAWS_DB ? process.env.JAWS_DB : process.env.MYSQL_URL
  //[scheme://][user[:[password]]@]host[:port][/schema]
);

module.exports = sequelize;