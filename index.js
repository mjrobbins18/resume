#! /user/bin/env node

const fs = require('fs')

fs.readFile(__dirname + '/info.json', 'utf8', function(err, data) {
    err ? console.log(err) : console.log(data); return data;
})