const express = require("express");
const bodyParser  = require("body-parser");
const cors = require("cors");
const path = require("path");
const  moment = require('moment');
const router = express.Router();
var fs = require('fs');
var busboy = require('connect-busboy');
var multer = require('multer');

const knexConfig = require("./knexfile");           
const Knex = require("knex");
const { Model } = require("objection");
require('dotenv').config()
const knex = Knex(knexConfig[process.env.NODE_ENV || 'development']);
Model.knex(knex);

const app = express()
  .use(bodyParser.json())
  .use(router)
  .use(cors({
    credentials: true,
    origin: (origin, callback) => callback(null, true),
  })).use(busboy());
  //app; 

  const userRoutes = require("./src/routes/index");
  app.use("/RankInterest",userRoutes);


  const port = process.env.PORT || 8000;
  console.log("moment object : - ",moment());

// Express Server 
const server = app.listen(port, () => {
    console.log(`Server is running on\n base URL: http://localhost:${port}/RankInterest`);
  });
  