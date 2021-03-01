const express = require("express");
const usersRouter = express.Router();
const { getAllPosts } = require("../db");

usersRouter.use((req, res, next) => {
  console.log("A request is being made to /posts");

  next(); 
});

usersRouter.get("/", async (req, res) => {
  const users = await getAllPosts();

  res.send({
    posts,
  });
});

module.exports = usersRouter;