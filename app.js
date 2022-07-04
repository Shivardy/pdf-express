const express = require("express");
const fs = require("fs");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(cors());
app.get("/", (req, res) => {
  var file = fs.createReadStream("./sample.pdf");
  var stat = fs.statSync("./sample.pdf");
  res.setHeader("Content-Length", stat.size);
  res.setHeader("Content-Type", "application/pdf");
  // res.setHeader("Content-Disposition", "attachment; filename=sample.pdf");
  file.pipe(res);
});

app.listen(port, () => console.log(`app listening on port ${port}`));
