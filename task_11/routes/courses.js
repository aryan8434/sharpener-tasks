const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const name = req.query;
  res.send(`List all courses: ${name}`);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const name = req.query.name;
  const description = req.query.description;
  res.send(`Course ID: ${id}, Name: ${name}, Description: ${description}`);
});

module.exports = router;
