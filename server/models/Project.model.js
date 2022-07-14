const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// test schema --smaller than the real one
// const ProjectTestSchema = new Schema(
const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    stack: {
      type: String,
      required: false,
    },
    // languages: {
    //   type: String,
    //   required: true,
    // },
    numberOfSteps: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// full schema
// const ProjectSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//       minlength: 3,
//       maxlength: 255,
//       unique: true,
//     },
//     summary: {
//       type: String,
//       required: true,
//       minlength: 3,
//       maxlength: 50,
//     },
//     description: {
//       type: String,
//       required: true,
//       minlength: 100,
//       maxlength: 255,
//     },
//     link: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     numberOfStep: {
//       type: Number,
//       required: false,
//       minValue: 1,
//       maxValue: 10,
//     },
//     image: {
//       type: String,
//       required: true,
//     },
//     tags: { type: [String], required: true },
//   },
//   { required: true },
// //  { strict: false },
//   { timestamps: true }
// );

// reference to user_id, pathway_id,

// register as a model
// const project = mongoose.model("Project", ProjectTestSchema);
// module.exports = project;
const Project = mongoose.model("Projects", ProjectSchema);
module.exports = Project;
