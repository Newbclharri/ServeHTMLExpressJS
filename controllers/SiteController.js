//////////////////////
// Dependencies
/////////////////////
require("dotenv").config();
const express = require("express");
const path = require("path");
const { nextTick } = require("process");

//////////////////
// Create router application
//////////////////
const router = express.Router();

module.exports = router;

//////////////////
// ROUTES
//////////////////

//root:
router.get("/", (req, res)=>{
    const options = {
        root: path.join(__dirname, "../views")
    };

    const fileName = "index.html";
    res.sendFile(fileName, options, (err)=>{
        if(err) {
            console.log(err);
        }else{
            console.log('Sent: ', fileName);
        }
    });
});

//user
router.get("/user", (req, res)=>{
    const options = {
        root: path.join(__dirname, "../views")
    };

    const fileName = "forms.html"
    res.sendFile(fileName, options, (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Sent: ", fileName);
        }
    });
});

router.post("/user/form", (req, res) =>{
    console.log(req.body);
    res.send("Sent");
})
