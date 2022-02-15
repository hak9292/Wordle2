const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Words extends Model {
}

Words.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        word: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'words',
    });

module.exports = Words;
