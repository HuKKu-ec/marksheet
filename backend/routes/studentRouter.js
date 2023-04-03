var express = require('express');
const {
  setStudents,
  getStudents,
  deleteStudent,
  checkOneStudent,
  getStudent,
} = require('../controller/studentController');
const router = express.Router();
router.delete('/:id', deleteStudent);
router.post('/', setStudents);
router.get('/', getStudents);
router.post('/check', checkOneStudent);
router.get('/one/:id', getStudent);

module.exports = router;
