////////////////////
// Dependencies
///////////////////
require("dotenv").config()
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const SiteRouter = require("./controllers/SiteController");

/////////////////////
// Server Application
/////////////////////
const app = express();
const PORT =process.env.PORT

//parse html form bodies into req.body
app.use(express.urlencoded({extended: true}));

//serve files statically
app.use("/static", express.static("static"));

//override request methods for form submissions
app.use(methodOverride("_method"));

//log every request to server
app.use(morgan("dev"));

//use imported express router module from controllers
app.use(SiteRouter);

/////////////
// app listener
/////////////
app.listen(PORT, ()=> console.log(`Site is listening on port ${PORT}`));
