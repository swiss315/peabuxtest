const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const School = require('./school');


const Teacher = sequelize.define('Teacher', {
    nationalID: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    title: {
        type: DataTypes.ENUM('Mr', 'Mrs', 'Miss', 'Dr', 'Prof'),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    teacherNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    salary: {
        type: DataTypes.STRING,
        allowNull: true
        // allowNull defaults to true, making the field optional
    }
});



module.exports = Teacher;
