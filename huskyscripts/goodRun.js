const consoleJpeg = require('console-png');

const image = require('fs').readFileSync(`${__dirname}/buuuena.png`);

consoleJpeg.attachTo(console);
console.png(image);
setTimeout(() => {
    process.exit(0);
}, 500);
