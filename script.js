document.addEventListener('DOMContentLoaded', () => {
    const songList = document.getElementById('song-list');
    const audioPlayer = document.getElementById('audio-player');
    let audioContext;
    let currentSongIndex = 0;

    // Function to initialize AudioContext
    function initAudioContext() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const source = audioContext.createMediaElementSource(audioPlayer);
            source.connect(audioContext.destination);
        }
    }

    // List of songs (from "songs" folder)
    const songs = [
        'Nadaaniyan Akshath 320 Kbps.mp3',
        'songs/Best of Arijit Singh Mashup 2024 ｜ AMEET Mashup ｜ Arijit Singh Love Songs ｜ Best of Love Songs 2024 2.mp3',
        'song3.mp3'
    ];

    // Display songs in the list
    songs.forEach((song, index) => {
        const songItem = document.createElement('div');
        songItem.classList.add('song-item');
        songItem.textContent = song;

        songItem.addEventListener('click', () => {
            playSong(index);
        });

        songList.appendChild(songItem);
    });

    // Function to play song based on index
    function playSong(index) {
        currentSongIndex = index;
        initAudioContext();
        audioPlayer.src = `songs/${songs[index]}`;
        audioPlayer.play();
    }

    // Automatically play next song when current one ends
    audioPlayer.addEventListener('ended', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        playSong(currentSongIndex);
    });

    // Background playback enable
    document.body.addEventListener('click', () => {
        if (audioContext && audioContext.state === 'suspended') {
            audioContext.resume();
        }
    });
});