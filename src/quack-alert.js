'use strict';

let audio = document.createElement('audio');
let oldAlert = window.alert;

function quackAlert(...args) {
  audio && audio.play && audio.play();
  oldAlert(args);
}

audio.src = '%quack.mp3%';
window.alert = quackAlert;