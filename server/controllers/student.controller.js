const Student = require("../models/Student.model");

const getAllStudents = async (req, res) => {
  try {
    const allStudents = await Student.find({});

    res.send({
      status: 200,
      data: allStudents,
    });
  } catch (err) {
    res.status(500).send({
      status: 500,
      data: err,
    });
  }
};

const createNewStudent = async (req, res) => {
  try {
    await Student.create(req.body);

    res.send({
      status: 200,
      data: "I have hit my post endpoint2",
    });
  } catch (err) {
    res.status(500).send({
      status: 500,
      data: err,
    });
  }
};

module.exports = {
  getAllStudents,
  createNewStudent,
};
