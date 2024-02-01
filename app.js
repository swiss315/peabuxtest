require('dotenv').config()

const express = require('express');
const TeacherRoutes = require('./routes/Teacher')
const sequelize = require('./db');
const Teacher = require('./models/teacher');

const app = express();
app.use(express.json())
app.use('/api/teacher', TeacherRoutes)

// Sync models with the database
sequelize.sync()
    .then(() => {
        console.log('Database synced successfully');
    })
    .catch((error) => {
        console.error('Error syncing database:', error);
    });

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000????');
});