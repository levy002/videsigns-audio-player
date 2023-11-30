const functionalities = [
  {
    id: 1,
    functionality: "Play and Pause",
    explanation:
      "Click the play button to start your audio journey, and hit pause whenever you need a break. Easy control for seamless playback.",
  },
  {
    id: 2,
    functionality: "Volume Control",
    explanation:
      "Adjust the volume with a smooth slider. Turn it up to feel the beats or lower it for a subtle background melody. Your auditory preferences, your control.",
  },
  {
    id: 3,
    functionality: "Progress Bar",
    explanation:
      "Navigate through your audio effortlessly using the progress bar. Click anywhere on the bar to jump to a specific part or let it play through to see the progress visually.",
  },
  {
    id: 4,
    functionality: "Time Display",
    explanation:
      "Stay informed about the current time and total duration of your audio. Track how much is left and enjoy every moment.",
  },
  {
    id: 5,
    functionality: "Mute and Unmute",
    explanation:
      "Need a silent moment? Mute your audio instantly with a click. Unmute when you are ready to dive back into the sound",
  },
  {
    id: 6,
    functionality: "Forward and Replay",
    explanation:
      "Skip ahead by 10 seconds with the forward button or go back in time with the replay button. Fine-tune your listening experience with these convenient controls.",
  },
  {
    id: 7,
    functionality: "Dynamic Loading",
    explanation:
      "Load your favorite audio files dynamically. Simply provide the audio source during initialization for a personalized playlist.",
  },
  {
    id: 8,
    functionality: "Cross-Browser Compatibility",
    explanation:
      "Experience consistent performance across major browsers—Chrome, Firefox, Safari, and Edge. Your audio player is tailored for the latest versions of these browsers.",
  },
  {
    id: 9,
    functionality: "Error Handling",
    explanation:
      "In case of unexpected issues, the player alerts you with an error message. Ensuring a smooth experience even in challenging situations.",
  },
];

const functionalitiesList = document.getElementById("functionalities");

const loadFunctionalities = () => {
  functionalities.forEach((f) => {
    const functionality = document.createElement("li");
    functionality.classList.add("functionality");

    functionality.innerHTML = `
                <h3>${f.functionality}</h3>
                <p>${f.explanation}</p>
              `;

    functionalitiesList.appendChild(functionality);
  });
};

loadFunctionalities();
