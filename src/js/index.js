// Lista de canciones
const songs = [
    { 
        title: "Cognose", 
        author: "Fakito", 
        description: "#Electro", 
        image: "./src/img/cognosce.png", 
        audio: "./src/audio/cognosce.mp3", 
        color: "#58276a" 
    },
    { 
        title: "Bla Bla", 
        author: "Fakito", 
        description: "#Electro", 
        image: "./src/img/bla.png", 
        audio: "./src/audio/bla.mp3", 
        color: "#878286" 
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
        image: "./src/img/internumize.png", 
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
        title: "Ignis", 
        author: "Fakito", 
        description: "#Electro", 
        image: "./src/img/ignis.png", 
        audio: "./src/audio/ignis.mp3", 
        color: "#484848" 
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

// Configuración de la Web Audio API
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let analyser, source;

function handleUserInteraction() {
    if (audioContext.state === "suspended") {
        audioContext.resume().then(() => {
            console.log("AudioContext activado");
        });
    }
}

function setupAudioAnalysis() {
    // Crea un nodo fuente para el audio
    source = audioContext.createMediaElementSource(audioPlayer);

    // Crea un nodo analizador
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    // Conecta el nodo fuente al analizador y el analizador al destino
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    // Función para actualizar la opacidad del panel de fondo
    function updateBackgroundOpacity() {
        requestAnimationFrame(updateBackgroundOpacity);
        analyser.getByteFrequencyData(dataArray);
    
        const average = dataArray.reduce((sum, value) => sum + value, 0) / bufferLength;
    
        // Hacer la opacidad más extrema (0.1 - 1.0 en lugar de 0.2 - 0.6)
        const opacity = Math.max(0.1, Math.min(1.0, (average / 128))); 
    
        // Aplicar opacidad con una transición rápida
        backgroundPanel.style.transition = "opacity 0.1s ease-in-out"; 
        backgroundPanel.style.opacity = opacity.toFixed(1);
    }
    

    updateBackgroundOpacity();
}

// Función para cargar una canción
function loadSong(index) {
    const song = songs[index];
    audioPlayer.src = song.audio;
    songImage.src = song.image;
    songTitle.textContent = song.title;
    songAuthor.textContent = song.author;
    songDescription.textContent = song.description;
    document.body.style.backgroundColor = song.color;

    const buttons = document.querySelectorAll(".controls-panel button");
    buttons.forEach(button => {
        button.style.backgroundColor = song.color;
    });
}

// Cargar la primera canción al iniciar
loadSong(currentSongIndex);

// Reproducir/Pausar
playPauseBtn.addEventListener("click", async () => {
    handleUserInteraction();
    if (audioPlayer.paused) {
        try {
            await audioPlayer.play();
            playPauseBtn.textContent = "Pausa";
            setupAudioAnalysis();
        } catch (error) {
            console.error("Error al reproducir el audio:", error);
        }
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = "▶";
    }
});


// Cambiar a la siguiente canción
nextBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.currentTime = 0; // Reinicia el tiempo de reproducción
    audioPlayer.pause(); // Pausa la canción
    playPauseBtn.textContent = "▶"; // Actualiza el botón de Play/Pausa
});

// Cambiar a la canción anterior
prevBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.currentTime = 0; // Reinicia el tiempo de reproducción
    audioPlayer.pause(); // Pausa la canción
    playPauseBtn.textContent = "▶"; // Actualiza el botón de Play/Pausa
});

// Retroceder 5 segundos
rewindBtn.addEventListener("click", () => {
    audioPlayer.currentTime -= 5;
});

// Avanzar 5 segundos
forwardBtn.addEventListener("click", () => {
    audioPlayer.currentTime += 5;
});

// Control de volumen
volumeSlider.addEventListener("input", () => {
    audioPlayer.volume = volumeSlider.value;
});