const teacherSchema = require('../model/teacherSchema');
const jwt = require('jsonwebtoken');
//creating a json web token
const createToken = (id) => {
  const token = jwt.sign({ id }, process.env.SECRET, { expiresIn: '30000d' });
  return token;
};
const getTeacher = async (req, res) => {
  try {
    const { email, password } = req.body;
    const teacher = await teacherSchema.login(email, password);
    const token = createToken(teacher._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getTeacher };
