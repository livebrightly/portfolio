const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 18,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Student", studentSchema);
