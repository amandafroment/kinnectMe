const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

require("dotenv").config();
require("./config/database");
const port = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));
app.use(express.json());
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));
app.use(require("./config/checkToken"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/events", require("./routes/api/events"));

const ensureLoggedIn = require("./config/ensureLoggedIn");

app.get("/*", function (req, res) {
  // currentdirectory/build/index.html
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
