const audioPlayerContainer = document.getElementById('audio-player-container')

const createButton = (id, dataAudio, title, iconClass) => {
    const button = document.createElement('button');
    button.id = id;
    button.dataset.audio = dataAudio;
    button.title = title;
  
    const icon = document.createElement('i');
    icon.classList.add(iconClass);
  
    button.appendChild(icon);
  
    return button;
  }
  
  const createInput = (type, id, dataAudio, title, min, max, step, value) => {
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.dataset.audio = dataAudio;
    input.title = title;
    input.min = min;
    input.max = max;
    input.step = step;
    input.value = value;
  
    return input;
  }
  
  const audioElement = document.createElement('audio');
  audioElement.id = 'audio-player';
  audioElement.setAttribute('data-src', '');
  audioElement.setAttribute('data-audio', 'player');
  audioElement.title = 'Audio Player';
  audioElement.innerHTML = 'Your browser does not support the audio element.';
  
  const controlsContainer = document.createElement('div');
  controlsContainer.id = 'controls-container';
  
  const controlsDiv = document.createElement('div');
  controlsDiv.classList.add('controls');

  const allSubControlsDiv = document.createElement('div');
  
  const muteButton = createButton('mute-button', 'mute', 'Mute', 'ri-volume-up-fill');
  const unmuteButton = createButton('unmute-button', 'unmute', 'Unmute', 'ri-volume-mute-fill');
  const volumeControl = createInput('range', 'volume-control', 'volume', 'Volume', 0, 1, 0.1, 1);
  const replayButton = createButton('replay-button', 'replay', 'Replay 10 seconds', 'ri-replay-10-line');
  const playButton = createButton('play-button', 'play', 'Play', 'ri-play-fill');
  const pauseButton = createButton('pause-button', 'pause', 'Pause', 'ri-pause-fill');
  const forwardButton = createButton('forward-button', 'forward', 'Forward 10 seconds', 'ri-forward-10-line');
  const moreOptionsButton = createButton('more-options-button', 'more-options', 'More Options', 'ri-more-2-fill');
  const audioName = document.createElement('p');
  audioName.dataset.audio = 'name';
  
  allSubControlsDiv.appendChild(muteButton);
  allSubControlsDiv.appendChild(unmuteButton);
  allSubControlsDiv.appendChild(volumeControl);
  allSubControlsDiv.appendChild(replayButton);
  allSubControlsDiv.appendChild(playButton);
  allSubControlsDiv.appendChild(pauseButton);
  allSubControlsDiv.appendChild(forwardButton);
  allSubControlsDiv.appendChild(audioName)

  controlsDiv.appendChild(allSubControlsDiv)

  controlsDiv.appendChild(moreOptionsButton);

  controlsContainer.appendChild(controlsDiv);
  
  const audioProgressDiv = document.createElement('div');
  audioProgressDiv.classList.add('audio-progress');
  
  const currentTimeDisplay = document.createElement('span');
  currentTimeDisplay.id = 'current-time-display';
  currentTimeDisplay.dataset.audio = 'current-time';
  currentTimeDisplay.title = 'Current Time';
  currentTimeDisplay.textContent = '00:00';
  
  const progressBar = createInput('range', 'progress-bar', 'progress', 'Audio Progress', 0, 100, 1, 0);
  
  const totalTimeDisplay = document.createElement('span');
  totalTimeDisplay.id = 'total-time-display';
  totalTimeDisplay.dataset.audio = 'total-time';
  totalTimeDisplay.title = 'Total Time';
  totalTimeDisplay.textContent = '00:00';
  
  audioProgressDiv.appendChild(currentTimeDisplay);
  audioProgressDiv.appendChild(progressBar);
  audioProgressDiv.appendChild(totalTimeDisplay);

  controlsContainer.appendChild(audioProgressDiv);
  
  audioPlayerContainer.appendChild(audioElement);
  audioPlayerContainer.appendChild(controlsContainer);
  
  document.body.appendChild(audioPlayerContainer);
  