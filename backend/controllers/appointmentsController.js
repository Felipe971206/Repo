const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        await appointment.save();
        res.status(201).json(appointment);
    } catch (error) {
        res.status(400).json({ message: 'Error creating appointment', error: error.message });
    }
};

exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({});
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching appointments', error: error.message });
    }
};

// Add more methods as needed