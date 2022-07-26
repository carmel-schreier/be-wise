var express = require('express');
var router = express.Router();
const fm = require('../controllers/courses');

router.get('/courses', fm.getCoursesDetails);
router.get('/courses/sorted', fm.getSortedCoursesDetails);
router.get('/courses/filtered', fm.getFilteredCourses);
router.get('/courses/categories', fm.getCategories);

router.get('/courses/export', fm.exportCourses);
router.get('/courses/export/filtered', fm.exportFilteredCourses);


module.exports = router;