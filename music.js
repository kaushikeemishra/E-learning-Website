// Sample playlist array (you can dynamically load this if needed)
const playlist = [
    { title: 'Song One', src: 'path/to/song1.mp3' },
    { title: 'Song Two', src: 'path/to/song2.mp3' },
    { title: 'Song Three', src: 'path/to/song3.mp3' }
  ];
  
  const audioPlayer = document.getElementById('audio-player');
  const recentlyPlayedDisplay = document.getElementById('recently-played');
  const shuffleBtn = document.getElementById('shuffle-btn');
  
  // Array to hold recently played songs
  let recentlyPlayed = [];
  
  // Function to update the "Recently Played" display
  function updateRecentlyPlayedDisplay() {
    if (recentlyPlayed.length === 0) {
      recentlyPlayedDisplay.textContent = "Recently Played: None";
    } else {
      // Show the last played song (or you can show a list)
      recentlyPlayedDisplay.textContent = "Recently Played: " + recentlyPlayed[recentlyPlayed.length - 1].title;
    }
  }
  
  // Function to shuffle the playlist and play a random song
  function shuffleAndPlay() {
    const randomIndex = Math.floor(Math.random() * playlist.length);
    const selectedSong = playlist[randomIndex];
    
    // Set the audio source to the selected song and play it
    audioPlayer.src = selectedSong.src;
    audioPlayer.play();
    
    // Update the recently played list
    recentlyPlayed.push(selectedSong);
    // Optionally, you can limit the history length:
    if (recentlyPlayed.length > 5) {
      recentlyPlayed.shift(); // remove the oldest
    }
    
    updateRecentlyPlayedDisplay();
  }
  
  // Attach event listener to shuffle button
  shuffleBtn.addEventListener('click', shuffleAndPlay);
  
  // Optional: Update recently played when the song ends and auto-play next random track
  audioPlayer.addEventListener('ended', shuffleAndPlay);
  