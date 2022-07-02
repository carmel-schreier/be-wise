var express = require('express');
var router = express.Router();
const fm = require('../controllers/faculty');

router.get('/faculty', fm.getFacultyDetails);


module.exports = router;