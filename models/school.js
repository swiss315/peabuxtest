// School.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class School extends Model {}

School.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    NationalID: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'School'
});

module.exports = School;
