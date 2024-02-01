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
        validate: {
            isDate: true,
            isOldEnough(value) {
                const minDate = new Date();
                minDate.setFullYear(minDate.getFullYear() - 21);
                if (new Date(value) > minDate) {
                    throw new Error('Teacher must be at least 21 years old.');
                }
            }
        }
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
