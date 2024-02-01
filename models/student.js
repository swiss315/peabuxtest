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
        validate: {
            isDate: true,
            isOldEnough(value) {
                const minDate = new Date();
                minDate.setFullYear(minDate.getFullYear() - 22);
                if (new Date(value) > minDate) {
                    throw new Error('Teacher must be at least 21 years old.');
                }
            }
        }
    },
    studentNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});



module.exports = Student;
