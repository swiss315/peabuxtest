const { Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('sys', 'root', 'root', {
    dialect: 'mysql',
    host: '127.0.0.1',
});

module.exports = sequelize;
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        // Handle specific error types if needed
    }
}

testConnection();


