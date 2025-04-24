const express = require("express");
const app = express();
const path = require("path"); //requiring the path module

const port = 8080;

//Now how to use Ejs
app.set("view engine", "ejs"); //view => templates.
//ejs is also a package but by default it is included in express internally, so we don't need to require it.
//Through ejs we don't send responses, we render them. render means to send files, and we send an ejs file that not a normal file.
app.set("views", path.join(__dirname, "views")); //views => templates folder, setting views to this path and search it from here only.

app.get("/", (req,res)=>{
    // res.send("This is root page");
    res.render("home.ejs"); //it can even be home, as express will directly look for home.ejs in views folder.
});

//Check in rolldice.ejs in views folder
app.get("/rolldice", (req,res)=>{
    let diceVal = Math.floor(Math.random() * 6) + 1; //creating data in the backend suppose and assigning it in a variable.
    res.render("rolldice.ejs", {diceVal}); //accessing it through a key value pair but generally we use single value.
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
//By default whenever we use view engine in ecpress, it expects that all our views/templates that would become our ejs templates should
//be in a folder named views inside our project folder. So we need to create a folder named views. And we aren not gonna change the name.