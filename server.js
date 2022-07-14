const express = require("express");
const httpError = require("http-errors");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

// --- OAuth Middleware --- //
// Middleware for OAuth here
// const session = require('express-session'); INSTALL
// const passport = require('passport'); INSTALL

// --- Parsers --- //
const cookieParser = require("cookie-parser");

const http = require("http");
const reload = require("reload");

// --- Load env vars --- //
require("dotenv").config({ path: "./server/config.env" });
console.log(process.env);

//--- Get driver connection --- //
require("./server/config/database");

//! IMPORTED ROUTES HERE EASY TO SPOT THEM IN THE CODE
// --- Declare imported routes --- //
// const projectRoutes = require("./server/routes/project.router");
// const studentRouter = require("./server/routes/student");
const projectRouter = require("./server/routes/project.router");

console.log("-------- server --------");

// --- Declare port --- //
const port = process.env.PORT || 8001;

// --- Create express app --- //
const app = express();
const server = http.createServer(app);

// --- view engine setup --- //
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 8080);

app.use(express.static(path.join(__dirname, "build")));
app.use(logger("dev"));
app.use(express.json);
app.use(cookieParser());

// --- Mount session middleware --- //
//// app.use(session({
////     secret: 'SEI Rocks!',
////     resave: false,
////     saveUninitialized: true
////   }));

////   app.use(passport.initialize());
////   app.use(passport.session());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// --- Catch-all - SPA's client-side routing --- //
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
  // res.sendFile(path.join(publicDir, "index.html"));
});

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});

// --- Mount Cors --- //
app.use(
  cors({
    origin: "*",
  })
);

// --- Mount routes --- //

app.use("/projects", projectRouter);
// app.use("/", projectRoutes);
// app.use("/api/projects', projectRoutes);");
// app.use("/api/user", userRoutes);
// app.use("/students", studentRouter);

// --- HTTP error handler --- //

// catch and forward 404 to error handler
app.use(function (req, res, next) {
  // res.status(404).send("Invalid Request");
  next(httpError(404));
});

// --- Error handler --- //
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// --- Reload function --- //
reload(app)
  .then(function (reloadReturned) {
    // reloadReturned is documented in the returns API in the README

    // Reload started, start web server
    server.listen(app.get("port"), function () {
      console.log("Web server listening on port " + app.get("port"));
    });
  })
  .catch(function (err) {
    console.error(
      "Reload could not start, could not start server/sample app",
      err
    );
  });

module.exports = app;
