const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const _saveLocalTime = function _locTime(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
  console.log(e.seconds);
};

player.on('timeupdate', throttle(_saveLocalTime, 2000));
let currentTime = localStorage.getItem('videoplayer-current-time', 0);
startValueTime();

player.setCurrentTime(currentTime).then(function () {
  localStorage.setItem('videoplayer-current-time', 0);
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
function startValueTime() {
  localStorage.setItem('videoplayer-current-time', 0);
}
