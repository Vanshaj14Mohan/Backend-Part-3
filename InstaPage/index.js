//An insta Activity.
const express = require("express")
const app = express();

let port = 8080;

const path = require("path");

app.use(express.static("public")); //including CSS JS type of files, ie-> Static Files
//by default all our static files takes express from public folder. So create a public folder. 

const instaData = require("./data.json"); //requring data.json file, instaData -> JavaScript Object here.

app.set("view engine", "views");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req,res)=>{
    res.send("You contacted to root path");
});

app.get("/ig/:username", (req,res)=>{
    let {username} = req.params; //deconstructiong object;
    const data = instaData[username];
    if (data){
        res.render("insta.ejs", {data});
    }
    else{
        res.render("error.ejs");
    };
    // res.render("insta.ejs", {data});
    // console.log(instaData);
    console.log(data);
});
// app.get("/intro", (req,res)=>{
//     res.render("page.ejs");
// });

app.listen(port, ()=>{
    console.log(`App is running on ${port}`);
});
