const fs = require("fs");
const process2 = require('process');
const fileName = process2.argv[2];

const parse = require("./helpers/parse");
fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        process2.exit(1);
    }
    parse.parse(JSON.parse(data));
});