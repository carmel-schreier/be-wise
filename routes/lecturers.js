var express = require('express');
var router = express.Router();
const fm = require('../controllers/lecturers');

router.get('/lecturers', fm.getLecturersDetails);


module.exports = router;