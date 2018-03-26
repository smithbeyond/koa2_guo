#!/usr/bin/env node

require("babel-core/register")({
    presets: ['es2015', 'stage-0']
});
require("babel-polyfill");
const app = require('../src/app');
const port = 4000
console.log("==>>> start to listen port: ", port)
app.listen(port)