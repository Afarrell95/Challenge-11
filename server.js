const express = require("express");
const path = require("path");
const dbRoutes = require("./Develop/controllers/dbRoutes");
const htmlRoutes = require("./Develop/controllers/htmlRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5500;

app.use("/db", dbRoutes);
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile("/index.html");
// });

app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
