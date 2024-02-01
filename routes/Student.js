const express = require('express');
const router = express.Router()
const Student = require('../models/student');
const School = require('../models/school');


// Get All Student
router.get('/list', async (req, res) => {
    try {
        const teachers = await Student.findAll();

        res.json(teachers);
    } catch (error) {
        console.error('Error fetching student:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/add', async (req, res) => {
    try {
        const { nationalID, name, surname, dateOfBirth, studentNumber } = req.body;

        // Create Student record in the database
        const newStudent = await Student.create({
            nationalID,
            name,
            surname,
            dateOfBirth,
            studentNumber,
        });
        await School.create({
            NationalID: nationalID,
            name: name,
            Number:studentNumber,
            category: 'Student'
        });

        res.status(201).json(newStudent);
    } catch (error) {
        // Check if the error is a SequelizeUniqueConstraintError
        if (error.name === 'SequelizeUniqueConstraintError') {
            // Extract the error message from the first error in the "errors" array
            const errorMessage = error.errors[0].message;
            return res.status(400).json({ error: errorMessage });
        }

        console.error('Error creating Student:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router