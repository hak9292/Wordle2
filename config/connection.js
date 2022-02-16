const Sequelize = require('sequelize');
require('dotenv').config();

// const sequelize = process.env.JAWS_DB 
//   ? new Sequelize (process.env.JAWS_DB)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {  //not sure if this is still needed 
//     host: 'localhost',
//     dialect: 'mysql',
//     dialectOptions: {
//       decimalNumbers: true,  //not sure if this is still needed 
//     },
//     logging: false,
//   });

//creating an instance of sequelize 
let sequelize;
  if (process.env.JAWSDB_URL) {
    
    sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PW,
      {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
      },
    );
  }

module.exports = sequelize;