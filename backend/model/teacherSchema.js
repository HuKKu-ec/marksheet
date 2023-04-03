const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;
const TeacherSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

//login validation

TeacherSchema.statics.login = async function (email, password) {
  const teacher = await this.findOne({ email });
  if (email == '' || password == '') {
    throw Error('The password and email must be filled');
  }
  if (!validator.isEmail(email)) {
    throw Error('Email is not in valid format');
  }
  if (!teacher) {
    throw Error('There is no account with this email id');
  }
  const match = await bcrypt.compare(password, teacher.password);
  if (!match) {
    throw Error('Password is incorrect');
  }
  return teacher;
};

module.exports = mongoose.model('Teacher', TeacherSchema);
