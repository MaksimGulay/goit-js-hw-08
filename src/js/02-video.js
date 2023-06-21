
import Player from '@vimeo/player';
import throttle from 'lodash/throttle'

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(function(data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));

iframe.addEventListener('load', function() {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime) {
        const seekTime = parseFloat(savedTime);
        player.setCurrentTime(seekTime)
            .then(function(seconds) {
                // seconds = the actual time that the player seeked to
            })
            .catch(function(error) {
                switch (error.name) {
                    case 'RangeError':
                                    // the time was less than 0 or greater than the video’s duration
                        break;
                    default:
                        // some other error occurred
                        break;
                }
            });
    }
});

