const jwt = require('jsonwebtoken');
require('dotenv').config();
const TeacherSchema = require('../model/teacherSchema');
const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ error: 'Not autharized' });
  } else {
    const token = authorization.split(' ')[1];
    const { id } = await jwt.verify(token, process.env.SECRET);
    try {
      req.user = await TeacherSchema.findOne({ _id: id }).select('_id');

      next();
    } catch (error) {
      res.status(401).json({ error: 'Not a valid autharized' });
    }
  }
};
module.exports = requireAuth;
