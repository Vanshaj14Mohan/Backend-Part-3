// Create a basic template for instagram page based on following route: /ig/:username
const express = require("express");
const app = express();

const path = require("path");

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req,res)=>{
    res.send("Connected Sucessfully");
});

app.get("/ig/:username", (req,res)=>{
    const followers = ["Adam", "Bob", "Jack", "Rose", "Henry"];
    let {username} = req.params;
    // console.log(username);
    res.render("insta.ejs", {username, followers});
});

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});




