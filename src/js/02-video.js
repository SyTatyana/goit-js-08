const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const _saveLocalTime = function _locTime(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
  console.log(e.seconds);
};

player.on('timeupdate', throttle(_saveLocalTime, 2000));
let currentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTime);
