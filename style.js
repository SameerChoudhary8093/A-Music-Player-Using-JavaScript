const playPauseButton = document.getElementById("play-pause");
const progressBar = document.getElementById("progress");

let isPlaying = false;

playPauseButton.addEventListener("click", () => {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});

function playMusic() {
  isPlaying = true;
  playPauseButton.textContent = "⏸";
  // Add functionality to play the music here
}

function pauseMusic() {
  isPlaying = false;
  playPauseButton.textContent = "▶";
  // Add functionality to pause the music here
}

// Update progress bar (mock example)
progressBar.addEventListener("input", () => {
  console.log(`Progress: ${progressBar.value}%`);
});
