'use strict';


'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
//Set express variable
app.use(cors({orgin: '*'}));
const port = process.env.PORT || 3000;
const server = app.listen(port);
console.log(`Running at Port ${port}`);
server.timeout = 1000 * 60 * 2; // 2 minutes



// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// test route
app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to ContactDB!" });
});

// add customer routes
require("./customer/api.js")(app);
