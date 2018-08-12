const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelector('.player__slider');

const togglePlay = () => {
    video.paused ? video.play() : video.pause();
}

const changeIcon = (e) => {
    e.type === "play" ? toggle.innerHTML = "||" : toggle.innerHTML = "►";
}

const skip = (e) => {
    let seconds = Number(e.target.dataset.skip);
    video.currentTime += seconds;
}

[toggle, video].forEach(x => x.addEventListener('click', togglePlay));

video.addEventListener("play", changeIcon);
video.addEventListener("pause", changeIcon);
skipButtons.forEach(x => x.addEventListener("click", skip));