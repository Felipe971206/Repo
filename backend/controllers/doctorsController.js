const Doctor = require('../models/Doctor');

exports.createDoctor = async (req, res) => {
    try {
        const doctor = new Doctor(req.body);
        await doctor.save();
        res.status(201).json(doctor);
    } catch (error) {
        res.status(400).json({ message: 'Error creating doctor', error: error.message });
    }
};

exports.getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find({});
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching doctors', error: error.message });
    }
};

// Add more methods as needed