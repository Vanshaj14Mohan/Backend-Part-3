const express = require("express");
const app = express();

const port = 8080;

//Now how to use Ejs
app.set("view engine", "ejs"); //view => templates
//ejs is also a package but by default it is included in express internally, so we don't need to require it
//Through ejs we don't send responses, we render them. render means to send files, and we send an ejs file that not a normal file.

app.get("/", (req,res)=>{
    res.send("This is root page");
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});