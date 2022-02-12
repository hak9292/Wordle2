//requiring User model from one level up 
const { User } = require('../models');

const userData = [
  {
    "username": "Sal",
    "email": "svulcano@hotmail.com",
    "password": "password12345"
  },
  {
    "username": "Murray",
    "email": "jmurray@gmail.com",
    "password": "password12345"
  },
  {
    "username": "Joe",
    "email": "jgatto@aol.com",
    "password": "password12345"
  },
  {
    "username": "Quinn",
    "email": "bquinn@msn.com",
    "password": "password12345"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
