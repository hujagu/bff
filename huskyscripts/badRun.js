const consoleJpeg = require('console-png');

const image = require('fs').readFileSync(`${__dirname}/commiteaBien.png`);

consoleJpeg.attachTo(console);
console.png(image);

setTimeout(() => {
    process.exit(1);
}, 500);
