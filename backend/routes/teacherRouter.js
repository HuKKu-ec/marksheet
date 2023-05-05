var express = require('express');
const { getTeacher } = require('../controller/teacherController');
const router = express.Router();
const requireAuth = require('../middleware/Authorization');
router.use(requireAuth);
router.post('/login', getTeacher);

module.exports = router;
