const express = require("express");

// const bodyParser = require("body-parser");
const http = require("http");

const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const reload = require("reload");

console.log("------- server -----");

const port = process.env.PORT || 6001;
const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "build")));

app.listen(process.env.PORT || 3000);
app.set("port", process.env.PORT || 8080);

app.use(logger("dev"));
app.use(express.json);
// app.use(bodyParser.json()); // Parses json, multi-part (file), url-encoded

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// API routes

// app.get("/", function (req, res) {
//   res.sendFile(path.join(publicDir, "index.html"));
// });

app.post("/data", function (req, res) {
  console.log("We are hitting the post data endpoint");
  res.send({
    status: 200,
    data: "I have hit my post endpoint",
  });
});

app.get("/data", function (req, res) {
  res.send({
    status: 200,
    data: [
      { firstName: "Deo", lastName: "DeosLastName" },
      { firstName: "George", lastName: "Haddad" },
      { firstName: "Raj", lastName: "Shah" },
      { firstName: "Jessica", lastName: "Nguyen" },
    ],
  });
});

// Catch-all SPA's client-side routing
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});

// Reload code here
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
