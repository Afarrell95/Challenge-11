const express = require("express");
const path = require("path");
const dbRoutes = require("./Develop/controllers/dbRoutes");
const htmlRoutes = require("./Develop/controllers/htmlRoute");
const fs = require("fs");
// const apiRoutes = require("./Develop/controllers/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5500;

app.use(express.static("public"));

//   res.sendFile("/index.html");
// });
app.use("/api", dbRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
