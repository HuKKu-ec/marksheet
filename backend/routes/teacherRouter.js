var express = require('express');
const { getTeacher } = require('../controller/teacherController');
const router = express.Router();

router.post('/login', getTeacher);

module.exports = router;
