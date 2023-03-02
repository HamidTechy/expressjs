//const express = require("express");
import express from "express";
const app = express();
const PORT = process.env.PORT || 4000;

// app.get("/", (req, resp)=>{
//     resp.send("app.get is used to print on ui in express js")
// })

// app.all("/kuchb", (req, resp)=>{
//     resp.send("it app.all will get anything mean get post put delet everything")
// })
// app.all("*", (req, resp)=>{
//      resp.send("if user enter some anonymous we can print our message to that any page")
// })
// app.all("/filename/*", (req, resp)=>{
//     resp.send("with this /fileName/* we can print content of that /fileName ")
// })
// more then one call back function 
// app.get("/example", (req, resp, next)=>{
//     console.log("this is single call back function for console")
//     next();
// },(req, resp)=>{
//     console.log("this is more more than once call back function")
//     resp.send("this is more than one call back function which will be run on ui")
// })
// array of call back function
const abc = (req, resp, next)=>{
    console.log(`First call back functin`);
next()
}
const bcd =(req, resp, next)=>{
    console.log(`Second call back function `);
next()
}
const cde =(req, resp)=>{
    console.log(`third call back function`);
    resp.send("third call back function now it will be printed on ui ")
}

app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`);
})
app.get("/example", [abc, bcd, cde])