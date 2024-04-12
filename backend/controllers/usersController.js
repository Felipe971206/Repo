const User = require('../models/User');

exports.registerUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user || !(await user.comparePassword(password))) {
            throw new Error('Authentication failed');
        }
        res.status(200).json({ message: 'User logged in successfully', user });
    } catch (error) {
        res.status(401).json({ message: 'Login failed', error: error.message });
    }
};

// Add more methods as needed