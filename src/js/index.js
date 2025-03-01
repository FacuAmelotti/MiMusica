// Lista de canciones
const songs = [
    { 
        title: "Cognose", 
        author: "Fakito", 
        description: "#Tech", 
        nota: "5",
        image: "./src/img/cognosce.png", 
        audio: "./src/audio/cognosce.mp3", 
        color: "#58276a" 
    }, 
    { 
        title: "Tenebris", 
        author: "Fakito", 
        nota: "4",
        description: "#Electro", 
        image: "./src/img/tenebris.png", 
        audio: "./src/audio/tenebris.mp3", 
        color: "#323232" 
    },
    { 
        title: "Concussa", 
        author: "Fakito",
        nota: "5", 
        description: "#Dubs", 
        image: "./src/img/concussa.png", 
        audio: "./src/audio/concussa.mp3", 
        color: "#e741cb" 
    },
    { 
        title: "Inter Infinitum", 
        author: "Fakito", 
        description: "#Chill", 
        nota: "3",
        image: "./src/img/inter-infinitum.png", 
        audio: "./src/audio/inter-infinitum.mp3", 
        color: "#fc566b" 
    }, 
    { 
        title: "Lapsus", 
        author: "Fakito", 
        nota: "3",
        description: "#Experimental", 
        image: "./src/img/lapsus.jpg", 
        audio: "./src/audio/lapsus.mp3", 
        color: "#806894" 
    },
    { 
        title: "Bla Bla", 
        author: "Fakito", 
        description: "#Electro", 
        nota: "3",
        image: "./src/img/bla.png", 
        audio: "./src/audio/bla.mp3", 
        color: "#978286" 
    },  
    { 
        title: "Ignis", 
        author: "Fakito", 
        nota: "4",
        description: "#Tech", 
        image: "./src/img/ignis.jpg", 
        audio: "./src/audio/ignis.mp3", 
        color: "#97123c" 
    },
    { 
        title: "Damnare", 
        author: "Fakito",
        nota: "4", 
        description: "#Electro", 
        image: "./src/img/damnare.jpg", 
        audio: "./src/audio/damnare.mp3", 
        color: "#d38ebc" 
    },
    { 
        title: "Internumize", 
        author: "Fakito", 
        nota: "4",
        description: "#Electro", 
        image: "./src/img/Internumize.png", 
        audio: "./src/audio/internumize.mp3", 
        color: "#535353" 
    },
    { 
        title: "Amissa morale", 
        author: "Fakito", 
        description: "#Electro",
        nota: "3", 
        image: "./src/img/amissa-morale.png", 
        audio: "./src/audio/amissa-morale.mp3", 
        color: "#535353" 
    },
    { 
        title: "Victus", 
        author: "Fakito", 
        nota: "4",
        description: "#Electro", 
        image: "./src/img/victus.jpg", 
        audio: "./src/audio/victus.mp3", 
        color: "#5b1010" 
    },
    { 
        title: "Per Se", 
        author: "Fakito", 
        nota: "4",
        description: "#Dubs", 
        image: "./src/img/perse.png", 
        audio: "./src/audio/perse.mp3", 
        color: "#ceb087" 
    },
    { 
        title: "Occasus Solis", 
        author: "Fakito", 
        nota: "4",
        description: "#Electro", 
        image: "./src/img/occasus.png", 
        audio: "./src/audio/occasus-solis.mp3", 
        color: "#ceb087" 
    },
    { 
        title: "Cosmic Gate", 
        author: "Fakito", 
        description: "#Electro #Voice", 
        nota: "4",
        image: "./src/img/cosmic-gate.png", 
        audio: "./src/audio/cosmic-gate.mp3", 
        color: "#121212" 
    }, 
    { 
        title: "Damnum", 
        author: "Fakito", 
        nota: "1",
        description: "#Experimental", 
        image: "./src/img/damnum.png", 
        audio: "./src/audio/damnum.mp3", 
        color: "#212121" 
    },
    { 
        title: "Voluptas", 
        author: "Fakito",
        nota: "3", 
        description: "#GameSong #Tech", 
        image: "./src/img/voluptas.jpg", 
        audio: "./src/audio/voluptas.mp3", 
        color: "#1e1227" 
    },
    { 
        title: "Extraneus", 
        author: "Fakito", 
        nota: "4",
        description: "#GameSong", 
        image: "./src/img/extraneus.jpg", 
        audio: "./src/audio/extraneus.mp3", 
        color: "#1e1227" 
    },
    { 
        title: "Elegans", 
        author: "Fakito", 
        nota: "3",
        description: "#GameSong", 
        image: "./src/img/elegans.png", 
        audio: "./src/audio/elegans.mp3", 
        color: "#ab8646" 
    },
    { 
        title: "Inanis", 
        author: "Fakito",
        nota: "4", 
        description: "#GameSong #Deep", 
        image: "./src/img/inanis.png", 
        audio: "./src/audio/inanis.mp3", 
        color: "#121212" 
    },
    { 
        title: "Ignosce", 
        author: "Fakito", 
        nota: "3",
        description: "#Electro", 
        image: "./src/img/ignosce.jpg", 
        audio: "./src/audio/ignosce.mp3", 
        color: "#6a8f93" 
    },
    { 
        title: "Instrumenta", 
        author: "Fakito", 
        nota: "3",
        description: "#GameSong #Tech", 
        image: "./src/img/instrumenta.jpg", 
        audio: "./src/audio/instrumenta.mp3", 
        color: "#74286e" 
    },
    { 
        title: "Vetus Somnia", 
        author: "Fakito",
        nota: "2", 
        description: "#Electro", 
        image: "./src/img/vetus-somnia.png", 
        audio: "./src/audio/vetus-somnia.mp3", 
        color: "#6a87b6" 
    },
    { 
        title: "Facinorase", 
        author: "Fakito",
        nota: "1", 
        description: "#Experimental", 
        image: "./src/img/facinorase.jpg", 
        audio: "./src/audio/facinorase.mp3", 
        color: "#251901" 
    },
    { 
        title: "Caesar", 
        author: "Fakito",
        nota: "3", 
        description: "#Beat", 
        image: "./src/img/caesar.jpeg", 
        audio: "./src/audio/caesar.mp3", 
        color: "#716140" 
    },
    { 
        title: "Cold", 
        author: "Fakito", 
        nota: "4",
        description: "#Beat", 
        image: "./src/img/cold.png", 
        audio: "./src/audio/cold.mp3", 
        color: "#1d1f3b" 
    },
    { 
        title: "Dimissi", 
        author: "Fakito", 
        nota: "2",
        description: "#Beat", 
        image: "./src/img/dimissi.png", 
        audio: "./src/audio/dimissi.mp3", 
        color: "#894b2c" 
    },
    { 
        title: "Cassete", 
        author: "Fakito", 
        nota: "2",
        description: "#Beat", 
        image: "./src/img/cassete.png", 
        audio: "./src/audio/cassete.mp3", 
        color: "#827d7a" 
    },
    { 
        title: "Non Vident", 
        author: "Fakito", 
        nota: "4",
        description: "#Beat", 
        image: "./src/img/non-vident.png", 
        audio: "./src/audio/non-vident.mp3", 
        color: "#232323" 
    },
    { 
        title: "Vesperi", 
        author: "Fakito", 
        nota: "3",
        description: "#Beat", 
        image: "./src/img/vesperi.png", 
        audio: "./src/audio/vesperi.mp3", 
        color: "#170e0b" 
    },
    { 
        title: "Boulevard", 
        author: "Fakito", 
        nota: "4",
        description: "#Beat", 
        image: "./src/img/boulevard.png", 
        audio: "./src/audio/boulevard.mp3", 
        color: "#121212" 
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

// Crear elementos para el checkbox de autoplay
const autoplayContainer = document.createElement("div");
autoplayContainer.style.display = "flex";
autoplayContainer.style.alignItems = "center";
autoplayContainer.style.gap = "8px";
autoplayContainer.style.marginTop = "10px";

const autoplayCheckbox = document.createElement("input");
autoplayCheckbox.type = "checkbox";
autoplayCheckbox.id = "autoplay-checkbox";
autoplayCheckbox.checked = true; // Activado por defecto

const autoplayLabel = document.createElement("label");
autoplayLabel.htmlFor = "autoplay-checkbox";
autoplayLabel.textContent = "Autoplay";
autoplayLabel.style.color = "#fff";

autoplayContainer.appendChild(autoplayCheckbox);
autoplayContainer.appendChild(autoplayLabel);

// Agregar al panel de controles
document.querySelector(".controls-panel").appendChild(autoplayContainer);

// Función para actualizar la cantidad de nieve dependiendo de la canción
function updateSnowfall() {
    // Limpiar la nieve existente antes de agregar una nueva
    snowFall.snow(document.body, "clear"); // Limpiar nieve
    const flakesCount = currentSongIndex * 10 + 50; // Aumenta la cantidad de nieve según el índice de la canción
    snowFall.snow(document.body, {  
        flakeCount: flakesCount,  
        flakeColor: "#ffffff",  
        minSize: 2,  
        maxSize: 5,  
        minSpeed: 1,  
        maxSpeed: 3  
    });
}

// Al cargar la página o cuando se inicia la canción, actualiza el efecto de nieve
window.onload = function() {
    snowFall.snow(document.body, {  
        flakeCount: 50,  
        flakeColor: "#ffffff",  
        minSize: 2,  
        maxSize: 5,  
        minSpeed: 1,  
        maxSpeed: 3  
    });
};

document.addEventListener("DOMContentLoaded", function () {
    const panel = document.querySelector(".panel-inicial");
    const botonCerrar = document.querySelector(".cerrar-panel-inicial");

    botonCerrar.addEventListener("click", function () {
        panel.style.display = "none";
    });
});

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

    autoplayCheckbox.style.accentColor = song.color;
        
    songNote.textContent = song.note;

    // Agregar estrellas
    const noteValue = parseInt(song.nota, 10); // Convertir nota a número
    songNote.innerHTML = `Nota personal: `;

    for (let i = 0; i < noteValue; i++) {
        const starImg = document.createElement("img");
        starImg.src = "./src/img/star.png"; // Reemplaza con la ruta correcta de tu estrella
        starImg.alt = "⭐";
        starImg.style.width = "20px"; 
        starImg.style.height = "20px"; 
        starImg.style.marginRight = "3px";
        songNote.appendChild(starImg);
    }

    // Agregar " / 10" después de las estrellas
    const textNode = document.createTextNode(` / 10`);
    songNote.appendChild(textNode);

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

audioPlayer.addEventListener("ended", () => {
    if (autoplayCheckbox.checked) {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        audioPlayer.play();
        playPauseBtn.textContent = "||";
    }
});

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
    updateSnowfall(); // Actualiza la cantidad de nieve al cambiar la canción
});

prevBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.currentTime = 0;
    audioPlayer.pause();
    playPauseBtn.textContent = "▶";
    updateSnowfall(); // Actualiza la cantidad de nieve al cambiar la canción
});

rewindBtn.addEventListener("click", () => {
    audioPlayer.currentTime -= 5;
});

forwardBtn.addEventListener("click", () => {
    audioPlayer.currentTime += 5;
});

// Crear panel-tracks
const panelTracks = document.createElement("div");
panelTracks.classList.add("panel-tracks");

// Agregar título con el número total de canciones
const trackTitle = document.createElement("p");
trackTitle.textContent = `Canción: ${currentSongIndex + 1}/${songs.length}`;
panelTracks.appendChild(trackTitle);

// Crear lista de canciones
const trackList = document.createElement("ul");

songs.forEach((song, index) => {
    const trackItem = document.createElement("li");
    const trackLink = document.createElement("a");
    trackLink.href = "#"; // Evita que recargue la página
    trackLink.textContent = `${index + 1}. ${song.title} (${song.description})`;
   // trackLink.style.color = song.color;

    trackLink.addEventListener("click", (event) => {
        event.preventDefault(); // Evita la navegación predeterminada
        currentSongIndex = index; // Actualiza el índice actual
        loadSong(currentSongIndex); // Carga la canción seleccionada
        audioPlayer.currentTime = 0; // Reinicia el tiempo
        audioPlayer.play(); // Inicia la reproducción
        playPauseBtn.textContent = "||"; // Cambia el botón de pausa
        trackTitle.textContent = `Track: ${currentSongIndex + 1}/${songs.length}`; // Actualiza el título
        setupAudioAnalysis();
    });

    trackItem.appendChild(trackLink);
    trackList.appendChild(trackItem);
});

// Crear un contenedor para las canciones con scroll
const trackListContainer = document.createElement("div");
trackListContainer.classList.add("track-list-container");
trackListContainer.appendChild(trackList);
panelTracks.appendChild(trackListContainer);

// Establecer estilos CSS
const style = document.createElement("style");
style.textContent = `
    .track-list-container {
        max-height: 500px;  /* Establecer el alto máximo */
        overflow-y: auto;  /* Habilitar el desplazamiento vertical */        
    }
    .track-list-container ul {
        list-style-type: none;
        padding: 0;
    }
    .track-list-container li {
        padding: 5px;
    }

        /* Scroll personalizado */
    .track-list-container::-webkit-scrollbar {
        width: 8px;
    }
    .track-list-container::-webkit-scrollbar-thumb {
        background-color:rgb(223, 223, 223);  /* Color del pulgar del scroll */
        border-radius: 10px;  /* Bordes redondeados del pulgar */
        transition: background-color 0.3s ease;
    }
    .track-list-container::-webkit-scrollbar-thumb:hover {
        background-color:rgb(255, 255, 255);  /* Color del pulgar al pasar el mouse */
    }
    .track-list-container::-webkit-scrollbar-track {
        background-color: rgba(255, 255, 255, 0.1);  /* Color del fondo del scroll */
        border-radius: 10px;
    }
`;


document.head.appendChild(style);

// Agregar el panel al documento
document.body.appendChild(panelTracks); // Cámbialo si necesitas agregarlo en otro lugar

