"use strict";

// Dependencies
const dirStatic = require("../index")
const express = require("express")

// Variables
const web = express()
const port = 8080

// Main
dirStatic.serve(web, express, { path: "/", directory: "./storage" })

web.listen(port, ()=>{
    console.log(`Server is running. Port: ${port}`)
})