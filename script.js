document.addEventListener('DOMContentLoaded', () => {
    const songList = document.getElementById('song-list');
    const audioPlayer = document.getElementById('audio-player');
    let audioContext;

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
        'song1.mp3',
        'song2.mp3',
        'song3.mp3'
    ];

    // Display songs in the list
    songs.forEach(song => {
        const songItem = document.createElement('div');
        songItem.classList.add('song-item');
        songItem.textContent = song;

        songItem.addEventListener('click', () => {
            initAudioContext();
            audioPlayer.src = `songs/${song}`;
            audioPlayer.play();
        });

        songList.appendChild(songItem);
    });

    // Background playback enable
    document.body.addEventListener('click', () => {
        if (audioContext && audioContext.state === 'suspended') {
            audioContext.resume();
        }
    });
});