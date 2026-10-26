const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello");
});

const studentRoutes = require("./routes/student");
app.use("/students", studentRoutes);

const courseRoutes = require("./routes/courses");
app.use("/courses", courseRoutes);

app.use((req, res) => {
  res.status(404).send("PAGE NOT FOUND");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
