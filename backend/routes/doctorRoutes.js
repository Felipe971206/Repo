const express = require('express');
const router = express.Router();
const { createDoctor, getDoctors } = require('../controllers/doctorsController');

router.post('/', createDoctor);
router.get('/', getDoctors);

module.exports = router;