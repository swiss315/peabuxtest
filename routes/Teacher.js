const express = require('express');
const router = express.Router()
const Teacher = require('../models/teacher');
const School = require('../models/school');


// Get All Teacher
router.get('/list', async (req, res) => {
    try {
        const teachers = await Teacher.findAll();

        res.json(teachers);
    } catch (error) {
        console.error('Error fetching teachers:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/add', async (req, res) => {
    try {
        const { nationalID, title, name, surname, dateOfBirth, teacherNumber, salary } = req.body;

        // Create teacher record in the database
        const newTeacher = await Teacher.create({
            nationalID,
            title,
            name,
            surname,
            dateOfBirth,
            teacherNumber,
            salary
        });
         await School.create({
             NationalID: nationalID,
            name: name,
             Number:teacherNumber,
            category: 'Teacher'
        });

        res.status(201).json(newTeacher);
    } catch (error) {
        // Check if the error is a SequelizeUniqueConstraintError
        if (error.name === 'SequelizeUniqueConstraintError') {
            // Extract the error message from the first error in the "errors" array
            const errorMessage = error.errors[0].message;
            return res.status(400).json({ error: errorMessage });
        }

        console.error('Error creating teacher:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router