const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");

router.get("/", (req, res, thirdParam) => {
  studentController.getAllStudents(req, res);
});
router.post("/", function (req, res) {
  studentController.createNewStudent(req, res);
});

// router.get('/', studentController.getAllStudents)

module.exports = router;
