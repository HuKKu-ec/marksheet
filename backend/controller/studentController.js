const { json } = require('body-parser');
const studentSchema = require('../model/studentSchema');
const mongoose = require('mongoose');
const setStudents = async (req, res) => {
  try {
    const {
      name,
      rollNo,
      department,
      dob,
      fName,
      mName,
      nameOfExam,
      semester,
      mark1,
      mark2,
      mark3,
      mark4,
      mark5,
      mark6,
    } = req.body;
    const student = await studentSchema.create({
      name,
      rollNo,
      department,
      dob,
      fName,
      mName,
      nameOfExam,
      semester,
      mark1,
      mark2,
      mark3,
      mark4,
      mark5,
      mark6,
    });

    res.status(200).json({ student });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getStudents = async (req, res) => {
  try {
    const student = await studentSchema.find();
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const deleteStudent = async (req, res) => {
  var id = new mongoose.Types.ObjectId(req.params.id);
  try {
    const student = await studentSchema.deleteOne(id);
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const checkOneStudent = async (req, res) => {
  try {
    const { rollNo, dob } = req.body;
    const student = await studentSchema.findOne({ rollNo, dob });
    if (student != null) res.status(200).json(student);
    else res.status(400).json({ error: 'no such student exist' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getStudent = async (req, res) => {
  try {
    var id = new mongoose.Types.ObjectId(req.params.id);
    const student = await studentSchema.findOne({ _id: id });
    if (student != null) res.status(200).json(student);
    else res.status(400).json({ error: 'no such student exist' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  setStudents,
  getStudents,
  deleteStudent,
  checkOneStudent,
  getStudent,
};
