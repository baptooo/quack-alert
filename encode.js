'use strict';

let fs = require('fs');

fs.readFile('src/quack.mp3', 'base64', function(mp3Err, mp3Data) {
  fs.readFile('dist/quack-alert.js', 'utf8', function(jsErr, jsData) {
    jsData = jsData.replace('%quack.mp3%', 'data:audio/mp3;base64,' + mp3Data);

    if(jsData) {
      fs.writeFile('dist/quack-alert.js', jsData);
    }
  });
});
