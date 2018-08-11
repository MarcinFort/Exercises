const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');

const togglePlay = () => {
    video.paused ? video.play() : video.pause();
}

[toggle, video].forEach(x => {
    x.addEventListener('click', togglePlay);
});