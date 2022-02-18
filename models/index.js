const { HasMany } = require('sequelize/types');
const User = require('./User');
const Words = require('./Words');
const Score = require('./Score');



Score.belongsTo (User,{
  foreignKey: 'user-id',
});

User.hasMany(Score, {
  foreignKey: 'user_id',
});

module.exports = { User, Words, Score };