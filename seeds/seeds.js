const seedWords = require('./word-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  await seedWords();
  console.log('\n----- WORDS SEEDED -----\n');

  process.exit(0);
};

seedAll();