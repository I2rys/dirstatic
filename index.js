"use strict";

// Dependencies
const serveIndex = require("serve-index")

// Main
function serve(web, express, options = { path: "/", directory: "/" }){
    web.use(options.path, express.static(options.directory))
    web.use(options.path, serveIndex(options.directory, { icons: true }))
}

module.exports = {
    serve
}