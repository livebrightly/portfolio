const express = require("express");
const router = express.Router();
const projectController = require("../controllers/project.controller");

// router.get("/", projectController.getAllProjects);
// router.post("/", projectController.createNewProject);
// router.put("/admin/edit:id", projectController.updateProject);
// router.delete("/admin/delete:id", projectController.deleteProject);

// module.exports = router;

router.get("/", (req, res, thirdParam) => {
  projectController.getAllProjects(req, res);
});
router.post("/", function (req, res) {
  projectController.createNewProject(req, res);
});

module.exports = router;
