const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

let mousedown = false;

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

const handleRangeUpdate = (e) => {
    video[e.target.name] = e.target.value;
}

const handleProgress = () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

const scrub = (e) => {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

[toggle, video].forEach(x => x.addEventListener('click', togglePlay));

video.addEventListener("play", changeIcon);
video.addEventListener("pause", changeIcon);
skipButtons.forEach(x => x.addEventListener("click", skip));
ranges.forEach(x => x.addEventListener('change', handleRangeUpdate));
video.addEventListener("timeupdate", handleProgress);
progress.addEventListener("click", scrub);

document.addEventListener("mousedown", () => mousedown = true);
document.addEventListener("mouseup", () => mousedown = false);

progress.addEventListener("mousemove", (e) => {mousedown && scrub()});