"use strict";

const express = require("express");
const app = express();
const http = require("http");
const cp = require("child_process");
app.use("/c", (req,res)=>{
    res.set("Access-Control-Allow-Origin", "*");
    res.end(cp.execSync("xclip -sel clip -o"));
});
app.use("/p", (req,res)=>{
    res.set("Access-Control-Allow-Origin", "*");
    res.end(cp.execSync("xclip -sel primary -o"));
});
app.use("/s", (req,res)=>{
    res.set("Access-Control-Allow-Origin", "*");
    res.end(cp.execSync("xclip -sel secondary -o"));
});
app.use((req,res)=>{
    res.set("Access-Control-Allow-Origin", "*");
    res.end(cp.execSync("xclip -sel clip -o"));
});
let server = http.createServer(app);

server.listen(80);
