"use strict";

const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

//settings
const port = 3000;
app.set("port", process.env.PORT || port);
app.set("json spaces", 2);
//middlewares
app.use(morgan("dev"));
app.use(cors());
//For forms data
app.use(express.urlencoded({ extended: false }));
//For json data
app.use(express.json());

//routes
app.use(require("./routes/index"));

//Starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
