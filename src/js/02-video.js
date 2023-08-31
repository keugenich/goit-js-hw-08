import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const saveTime = throttle((time) => {
    localStorage.setItem('videoplayer-current-time', time);
}, 1000);

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
    player.setCurrentTime(savedTime).then(() => {
        player.play();
    });
}

player.on('timeupdate', function (event) {
    saveTime(event.seconds);
});
