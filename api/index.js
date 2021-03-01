const express = require("express");
const apiRouter = express.Router();


const usersRouter = require("./users");
apiRouter.use("/users", usersRouter);
apiRouter.use("/posts", usersRouter);
apiRouter.use("/tags", usersRouter);

module.exports = apiRouter;
