const express = require("express");
const bodyParser = require("body-parser");
const initMongoose = require("./initMongoose");

const app = express();
app.use(bodyParser());

const apiRouter = require("./routers/api");
const errorHandler = require("./middleware/errorHandler");
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.use("/api", apiRouter);

app.use(errorHandler);
initMongoose().then(() => {
  app.listen(4242, () => {
    console.log("all Wordks");
  });
});
