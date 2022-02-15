const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = process.env.JAWS_DB 
  ? new Sequelize (process.env.JAWS_DB)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
    logging: false,
  });

module.exports = sequelize;