const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const name = req.query;
  res.send(`List all students: ${name}`);
});

router.get("/:id", (req, res) => {
  const studentId = req.params.id;
  const name = req.query.name;
  res.send(`Student ID: ${studentId}, Name: ${name}`);
});

module.exports = router;
