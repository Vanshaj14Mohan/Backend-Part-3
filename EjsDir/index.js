const express = require("express");
const app = express();

const port = 8080;

//Now how to use Ejs
app.set("view engine", "ejs"); //view => templates
//ejs is also a package but by default it is included in express internally, so we don't need to require it
//Through ejs we don't send responses, we render them. render means to send files, and we send an ejs file that not a normal file.

app.get("/", (req,res)=>{
    // res.send("This is root page");
    res.render("home.ejs"); //it can even be home, as express will directly look for home.ejs in views folder.
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});

//By default whenever we use view engine in ecpress, it expects that all our views/templates that would become our ejs templates should
//be in a folder named views inside our project folder. So we need to create a folder named views. And we aren not gonna change the name.