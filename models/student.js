const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const School = require('./school');


const Student = sequelize.define('Student', {
    nationalID: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
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
    studentNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});



module.exports = Student;
