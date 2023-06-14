import Player from '@vimeo/player'
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
const onPlay = function(data) {
    
};

player.on('play', onPlay);

player.on('timeupdate', throttle((data) => {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000)
);

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time"))).then(function(seconds) {
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});