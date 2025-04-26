const express = require("express")
const app = express();

let port = 8080;

app.get("/", (req,res)=>{
    res.send("You contacted to root path");
});

app.listen(port, ()=>{
    console.log(`App is running on ${port}`);
});
