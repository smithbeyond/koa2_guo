#!/usr/bin/env node

/**
 * Module dependencies.
 */
require("babel-core/register")({
    presets: ['es2015', 'stage-0']
});
require("babel-polyfill");

const app = require('../src/app');
const http = require('http');
// var port = normalizePort(process.env.PORT || '4000');
const server = http.createServer(app.callback());
server.listen('4000');