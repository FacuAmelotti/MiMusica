// Lista de canciones
const songs = [
    { 
        title: "Bla Bla", 
        author: "Fakito", 
        description: "#Electro", 
        image: "./src/img/bla.png", 
        audio: "./src/audio/bla.mp3", 
        color: "#878286" 
    },
    { 
        title: "Cognose", 
        author: "Fakito", 
        description: "#Electro", 
        image: "./src/img/cognosce.png", 
        audio: "./src/audio/cognosce.mp3", 
        color: "#58276a" 
    },
    { 
        title: "Inter Infinitum", 
        author: "Fakito", 
        description: "#Chill", 
        image: "./src/img/inter-infinitum.png", 
        audio: "./src/audio/inter-infinitum.mp3", 
        color: "#fc766b" 
    },
    { 
        title: "Per Se", 
        author: "Fakito", 
        description: "#Dubs", 
        image: "./src/img/perse.png", 
        audio: "./src/audio/perse.mp3", 
        color: "#bcb35e" 
    },
    { 
        title: "Concussa", 
        author: "Fakito", 
        description: "#Dubs", 
        image: "./src/img/concussa.png", 
        audio: "./src/audio/concussa.mp3", 
        color: "#e741cb" 
    },
    { 
        title: "Tenebris", 
        author: "Fakito", 
        description: "#Deep", 
        image: "./src/img/tenebris.png", 
        audio: "./src/audio/tenebris.mp3", 
        color: "#323232" 
    },
    { 
        title: "Victus", 
        author: "Fakito", 
        description: "#Dubs", 
        image: "./src/img/victus.png", 
        audio: "./src/audio/victus.mp3", 
        color: "#937d1b" 
    },
    { 
        title: "Ignis", 
        author: "Fakito", 
        description: "#Electro", 
        image: "./src/img/ignis.png", 
        audio: "./src/audio/ignis.mp3", 
        color: "#484848" 
    },
    { 
        title: "Amissa morale", 
        author: "Fakito", 
        description: "#Electro", 
        image: "./src/img/amissa-morale.png", 
        audio: "./src/audio/amissa-morale.mp3", 
        color: "#535353" 
    },
    { 
        title: "Internumize", 
        author: "Fakito", 
        description: "#Electro", 
        image: "./src/img/Internumize.png", 
        audio: "./src/audio/internumize.mp3", 
        color: "#535353" 
    },
    { 
        title: "Occasus Solis", 
        author: "Fakito", 
        description: "#Electro", 
        image: "./src/img/occasus.png", 
        audio: "./src/audio/occasus-solis.mp3", 
        color: "#766f4b" 
    },
    { 
        title: "Extraneus", 
        author: "Fakito", 
        description: "#GameSong", 
        image: "./src/img/extraneus.jpeg", 
        audio: "./src/audio/extraneus.mp3", 
        color: "#1e1227" 
    },
    { 
        title: "Cold", 
        author: "Fakito", 
        description: "#Beat", 
        image: "./src/img/cold.png", 
        audio: "./src/audio/cold.mp3", 
        color: "#296b7a" 
    },
    { 
        title: "Boulevard", 
        author: "Fakito", 
        description: "#Beat", 
        image: "./src/img/boulevard.png", 
        audio: "./src/audio/boulevard.mp3", 
        color: "#121212" 
    },
    { 
        title: "Caesar", 
        author: "Fakito", 
        description: "#Tech", 
        image: "./src/img/caesar.jpeg", 
        audio: "./src/audio/caesar.mp3", 
        color: "#8e7f4a" 
    }
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById("audio-player");
const songImage = document.getElementById("song-image");
const songTitle = document.getElementById("song-title");
const songAuthor = document.getElementById("song-author");
const songDescription = document.getElementById("song-description");
const playPauseBtn = document.getElementById("play-pause-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const rewindBtn = document.getElementById("rewind-btn");
const forwardBtn = document.getElementById("forward-btn");
const volumeSlider = document.getElementById("volume-slider");
const backgroundPanel = document.querySelector(".background-panel");

let audioContext;
let analyser;
let source;
let bufferLength;
let dataArray;

// Configuración del control de volumen
volumeSlider.addEventListener("input", function () {
    const percentage = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = `linear-gradient(to right, var(--song-color, #4caf50) ${percentage}%, rgba(0, 0, 0, 0.5) ${percentage}%)`;
    audioPlayer.volume = volumeSlider.value;
});

function initializeAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function setupAudioAnalysis() {
    if (!audioContext) initializeAudioContext();
    if (source) return;

    source = audioContext.createMediaElementSource(audioPlayer);
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);

    source.connect(analyser);
    analyser.connect(audioContext.destination);

    updateBackgroundOpacity();
}

function updateBackgroundOpacity() {
    requestAnimationFrame(updateBackgroundOpacity);
    if (!analyser) return;

    analyser.getByteFrequencyData(dataArray);
    const average = dataArray.reduce((sum, value) => sum + value, 0) / bufferLength;

    // Ajustar la opacidad
    const opacity = Math.max(0.1, Math.min(1.0, average / 128));
    backgroundPanel.style.opacity = opacity.toFixed(1);

    // Ajustar la escala de la imagen de fondo
    const scale = 1 + (average / 256); // Escala entre 1 y 1.5 (puedes ajustar estos valores)
    backgroundPanel.style.transform = `scale(${scale})`;
}

function loadSong(index) {
    const song = songs[index];
    audioPlayer.src = song.audio;
    songImage.src = song.image;
    songTitle.textContent = song.title;
    songAuthor.textContent = song.author;
    songDescription.textContent = song.description;
    document.body.style.backgroundColor = song.color;

    backgroundPanel.style.backgroundImage = `url(${song.image})`;
    backgroundPanel.style.backgroundSize = "cover";
    backgroundPanel.style.backgroundPosition = "center";
    backgroundPanel.style.backgroundRepeat = "no-repeat";
    backgroundPanel.style.width = "100vw";
    backgroundPanel.style.height= "100vh";
    backgroundPanel.style.filter = "blur(12px)";


    document.querySelectorAll(".controls-panel button").forEach(button => {
        button.style.backgroundColor = song.color;
    });

    volumeSlider.style.setProperty("--song-color", song.color);
    volumeSlider.dispatchEvent(new Event("input"));
}

// Cargar la primera canción al iniciar
loadSong(currentSongIndex);

playPauseBtn.addEventListener("click", async () => {
    initializeAudioContext();
    if (audioPlayer.paused) {
        try {
            await audioPlayer.play();
            playPauseBtn.textContent = "||";
            setupAudioAnalysis();
        } catch (error) {
            console.error("Error al reproducir el audio:", error);
        }
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = "▶";
    }
});

nextBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.currentTime = 0;
    audioPlayer.pause();
    playPauseBtn.textContent = "▶";
});

prevBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.currentTime = 0;
    audioPlayer.pause();
    playPauseBtn.textContent = "▶";
});

rewindBtn.addEventListener("click", () => {
    audioPlayer.currentTime -= 5;
});

forwardBtn.addEventListener("click", () => {
    audioPlayer.currentTime += 5;
});
