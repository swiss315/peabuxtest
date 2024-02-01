require('dotenv').config()

const express = require('express');
const TeacherRoutes = require('./routes/Teacher')
const StudentRoutes = require('./routes/Student')
const sequelize = require('./db');
const cors = require('cors');
const Teacher = require('./models/teacher');

const app = express();
app.use(express.json())
app.use(cors({
    origin: ['https://peabuxtest.netlify.app/', 'http://localhost:3000'] ,
    methods: ['GET', 'POST', 'PUT'],
    allowedHeaders: ['Authorization', 'Content-Type'],
    credentials: true
}));
app.use('/api/teacher', TeacherRoutes)
app.use('/api/student', StudentRoutes)

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