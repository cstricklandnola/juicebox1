const express = require("express");
const usersRouter = express.Router();
const { getAllTags } = require("../db");

usersRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");

  next();
});

usersRouter.get("/", async (req, res) => {
  const users = await getAllTags();

  res.send({
    tags,
  });
});

module.exports = usersRouter;
