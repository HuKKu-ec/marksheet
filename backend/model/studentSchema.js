const mongoose = require('mongoose');
const { Schema } = mongoose;
const studentSchema = new Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  rollNo: { type: String, required: true },
  dob: { type: String, required: true },
  semester: { type: String, required: true },
  fName: { type: String, required: true },
  mName: { type: String, required: true },
  nameOfExam: { type: String, required: true },
  mark1: { type: String, required: true },
  mark2: { type: String, required: true },
  mark3: { type: String, required: true },
  mark4: { type: String, required: true },
  mark5: { type: String, required: true },
  mark6: { type: String, required: true },
});
module.exports = mongoose.model('Student', studentSchema);
