const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(__dirname + "/dist/angular-tutorial/"));
app.get("/*", function (req, res) {
  console.log("req",__dirname);
  res.sendFile(path.join(__dirname, "/dist/angular-tutorial/", "index.html"));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => console.log("server running"));


