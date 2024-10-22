//importing all of the installed packages for server
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

//importing routers
const userRoute = require("./routes/userRoutes");

//importing dot environment into server site script
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRoute);

//server listning for the request and response

mongoose.connect(process.env.Connect).then(
  app.listen(process.env.PORT, () => {
    console.log("server is listinig to ", process.env.PORT);
  })
);
