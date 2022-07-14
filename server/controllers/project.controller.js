const Project = require("../models/Project.model");

//! ...... TEST FUNCTIONS ...... //
// TODO replace test function
const getAllProjects = async (req, res) => {
  try {
    const allProjects = await Project.find({});

    res.send({
      status: 200,
      data: allProjects,
    });
  } catch (err) {
    res.status(500).send({
      status: 500,
      data: err,
    });
  }
};

// TODO replace test function
const addNewProject = async (req, res) => {
  try {
    await Project.add(req.body);

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
//! ...... END of TEST FUNCTIONS ...... //

module.exports = {
  getAllProjects,
  addNewProject,
};
