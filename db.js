const { Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('sql8681254', 'sql8681254', 'DBmIwrCxVU', {
    dialect: 'mysql',
    host: 'sql8.freemysqlhosting.net',
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


