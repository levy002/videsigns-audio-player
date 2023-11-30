class AudioPlayer {
  constructor() {
    this.audioPlayer = document.querySelector('[data-audio="player"]');
    this.playButton = document.querySelector('[data-audio="play"]');
    this.pauseButton = document.querySelector('[data-audio="pause"]');
    this.volumeControl = document.getElementById('volume-control');
    this.progressBar = document.querySelector('[data-audio="progress"]');
    this.currentTimeDisplay = document.querySelector('[data-audio="current-time"]');
    this.totalTimeDisplay = document.querySelector('[data-audio="total-time"]');
    this.muteButton = document.querySelector('[data-audio="mute"]');
    this.unMuteButton = document.querySelector('[data-audio="unmute"]');
    this.forwardButton = document.querySelector('[data-audio="forward"]');
    this.replayButton = document.querySelector('[data-audio="replay"]');
    this.audioName = document.querySelector('[data-audio="name"]');
    this.previousVolume = 1.0; 

    this.setupEventListeners();
  }

  setupEventListeners() {
    this.playButton.addEventListener('click', () => this.playAudio());
    this.pauseButton.addEventListener('click', () => this.pauseAudio());
    this.volumeControl.addEventListener('input', () => this.adjustVolume());
    this.muteButton.addEventListener('click', () => this.muteAudio());
    this.unMuteButton.addEventListener('click', () => this.unMuteAudio());
    this.audioPlayer.addEventListener('timeupdate', () => this.updateTimeDisplay());
    this.audioPlayer.addEventListener('error', () => this.handleAudioError());
    this.forwardButton.addEventListener('click', () => this.forwardAudio());
    this.replayButton.addEventListener('click', () => this.replayAudio());
    this.progressBar.addEventListener('click', (e) => this.handleProgressBarClick(e));
    this.progressBar.addEventListener('input', () => this.handleRangeInput());
  }

  playAudio() {
    this.audioPlayer.play();
  }

  pauseAudio() {
    this.audioPlayer.pause();
  }

  adjustVolume() {
   if(this.volumeControl.value > 0) {
    this.unMuteButton.style.display = 'none';
    this.muteButton.style.display = 'block';
   } else {
    this.unMuteButton.style.display = 'block';
    this.muteButton.style.display = 'none';
   }

    this.audioPlayer.volume = this.volumeControl.value;
  }

  updateProgressBar() {
    const progress = (this.audioPlayer.currentTime / this.audioPlayer.duration) * 100;
    this.progressBar.value = progress;
  }

  handleProgressBarClick(e) {
    const progressBarRect = this.progressBar.getBoundingClientRect();
    const clickX = e.clientX - progressBarRect.left;
    const progressBarWidth = progressBarRect.width;
    
    const seekPercentage = clickX / progressBarWidth;
    const seekTime = seekPercentage * this.audioPlayer.duration;
  
    this.audioPlayer.currentTime = seekTime;
    this.updateProgressBar();
  }

  handleRangeInput() {
    const seekTime = (this.progressBar.value / 100) * this.audioPlayer.duration;
    this.audioPlayer.currentTime = seekTime;
    this.updateTimeDisplay();
    this.updateProgressBar();
  }

  muteAudio() {
    this.previousVolume = this.audioPlayer.volume;
    this.audioPlayer.muted = true;
    this.volumeControl.value = 0;
    this.audioPlayer.volume = 0;
    this.unMuteButton.style.display = 'block';
    this.muteButton.style.display = 'none';
  }

  unMuteAudio() {
    this.audioPlayer.muted = false;
    this.audioPlayer.volume = this.previousVolume;
    this.volumeControl.value = this.previousVolume;
    this.unMuteButton.style.display = 'none';
    this.muteButton.style.display = 'block';
  }

  updateTimeDisplay() {
    const currentTime = this.formatTime(this.audioPlayer.currentTime);
    const totalDuration = this.formatTime(this.audioPlayer.duration);
    this.currentTimeDisplay.textContent = currentTime;
    this.totalTimeDisplay.textContent = totalDuration;

    const progressValue = (this.audioPlayer.currentTime / this.audioPlayer.duration) * 100;
    this.progressBar.value = progressValue;
  }

  formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  forwardAudio() {
    const forwardTime = this.audioPlayer.currentTime + 10;
    this.audioPlayer.currentTime = Math.min(forwardTime, this.audioPlayer.duration);
    this.updateProgressBar();
  }

  replayAudio() {
    const replayTime = this.audioPlayer.currentTime - 10;
    this.audioPlayer.currentTime = Math.max(replayTime, 0);
    this.updateProgressBar();
  }

  loadAudioFile(audio) {
    this.audioPlayer.src = audio.source;
    this.audioName.textContent = audio.name

    this.audioPlayer.addEventListener('loadedmetadata', () => {
      this.updateProgressBar();
      this.updateTimeDisplay();
    });

    this.audioPlayer.addEventListener('error', (e) => this.handleAudioError(e));
  }

  handleAudioError() {
    alert('Error loading audio file!');
  }
}

const audioPlayer = new AudioPlayer();

const audios = [{
  name: 'JS-Podcast',
  source: '../assets/JS-Podcast.mp3'
}];

let currentAudioIndex = 0;

window.onload = () => audioPlayer.loadAudioFile(audios[currentAudioIndex]);
