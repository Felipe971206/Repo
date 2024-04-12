const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // Bearer token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).send('Unauthorized: Invalid token');
    }
};

module.exports = { generateToken, authMiddleware };