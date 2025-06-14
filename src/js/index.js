// Lista de canciones
const songs = [
    { 
        title: "Cognose", 
        author: "Fakito", 
        description: "#Tech ", 
        nota: "5",
        image: "./src/img/cognosce.png", 
        audio: "./src/audio/cognosce.mp3", 
        color: "#361158" 
    }, 
    { 
        title: "Bla Bla", 
        author: "Fakito", 
        description: "#Electro", 
        nota: "3",
        image: "./src/img/bla.png", 
        audio: "./src/audio/bla.mp3", 
        color: "#1a1a1a" 
    }, 
    { 
        title: "Toxic", 
        author: "Fakito", 
        nota: "5",
        description: "#Electro", 
        image: "./src/img/toxic.png", 
        audio: "./src/audio/toxic.mp3", 
        color: "#27441e" 
    },
    { 
        title: "Tenebris", 
        author: "Fakito", 
        nota: "4",
        description: "#Electro", 
        image: "./src/img/tenebris.png", 
        audio: "./src/audio/tenebris.mp3", 
        color: "#7a7660" 
    },
    { 
        title: "Concussa", 
        author: "Fakito",
        nota: "5", 
        description: "#Dubs", 
        image: "./src/img/concussa.png", 
        audio: "./src/audio/concussa.mp3", 
        color: "#2b2b2b" 
    },
    { 
        title: "Inter Infinitum", 
        author: "Fakito", 
        description: "#Chill", 
        nota: "3",
        image: "./src/img/inter-infinitum.png", 
        audio: "./src/audio/inter-infinitum.mp3", 
        color: "#77345b" 
    }, 
    { 
        title: "Lapsus", 
        author: "Fakito", 
        nota: "3",
        description: "#Experimental", 
        image: "./src/img/lapsus.jpg", 
        audio: "./src/audio/lapsus.mp3", 
        color: "#542d7d" 
    }, 
    { 
        title: "Ignis", 
        author: "Fakito", 
        nota: "4",
        description: "#Tech", 
        image: "./src/img/ignis.png", 
        audio: "./src/audio/ignis.mp3", 
        color: "#975a1e" 
    },
    { 
        title: "Damnare", 
        author: "Fakito",
        nota: "4", 
        description: "#Electro", 
        image: "./src/img/damnare.jpg", 
        audio: "./src/audio/damnare.mp3", 
        color: "#a35984" 
    },
    { 
        title: "Internumize", 
        author: "Fakito", 
        nota: "4",
        description: "#Electro", 
        image: "./src/img/Internumize.jpg", 
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
        color: "#355773" 
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
        color: "#2c4a56" 
    },
    { 
        title: "Occasus Solis", 
        author: "Fakito", 
        nota: "4",
        description: "#Electro", 
        image: "./src/img/occasus.jpeg", 
        audio: "./src/audio/occasus-solis.mp3", 
        color: "#1a1a1a" 
    },
    { 
        title: "Speculum", 
        author: "Fakito", 
        description: "#Electro #Voice", 
        nota: "4",
        image: "./src/img/speculum.png", 
        audio: "./src/audio/speculum.mp3", 
        color: "#442e1e" 
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
        color: "#1b3271" 
    },
    { 
        title: "Voluptas", 
        author: "Fakito",
        nota: "3", 
        description: "#GameSong #Tech", 
        image: "./src/img/voluptas.jpg", 
        audio: "./src/audio/voluptas.mp3", 
        color: "#392f56" 
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
        color: "#a07934" 
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
        color: "#733660" 
    },
    { 
        title: "Vetus Somnia", 
        author: "Fakito",
        nota: "2", 
        description: "#Electro", 
        image: "./src/img/vetus-somnia.jpg", 
        audio: "./src/audio/vetus-somnia.mp3", 
        color: "#cb5276" 
    },
    { 
        title: "Facinorase", 
        author: "Fakito",
        nota: "1", 
        description: "#Experimental", 
        image: "./src/img/facinorase.png", 
        audio: "./src/audio/facinorase.mp3", 
        color: "#714f2e" 
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
        image: "./src/img/cassete.jpeg", 
        audio: "./src/audio/cassete.mp3", 
        color: "#133f55" 
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
        color: "#214261" 
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
const songNote = document.getElementById("song-note");
const playPauseBtn = document.getElementById("play-pause-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const rewindBtn = document.getElementById("rewind-btn");
const forwardBtn = document.getElementById("forward-btn");
const volumeSlider = document.getElementById("volume-slider");
const backgroundPanel = document.querySelector(".background-panel");
const listBtn = document.querySelector(".button-panel-inicial");

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
autoplayCheckbox.checked = true;

const autoplayLabel = document.createElement("label");
autoplayLabel.htmlFor = "autoplay-checkbox";
autoplayLabel.textContent = "Autoplay";
autoplayLabel.style.color = "var(--text-primary)";
autoplayLabel.style.fontSize = "0.9rem";
autoplayLabel.style.fontWeight = "300";
autoplayLabel.style.textTransform = "uppercase";
autoplayLabel.style.letterSpacing = "1px";

autoplayContainer.appendChild(autoplayCheckbox);
autoplayContainer.appendChild(autoplayLabel);

// Agregar al panel de controles
const controlsPanel = document.querySelector(".controls-panel");
if (controlsPanel) {
    controlsPanel.appendChild(autoplayContainer);
}

// Función para actualizar la cantidad de nieve dependiendo de la canción
function updateSnowfall() {
    if (typeof snowFall !== 'undefined') {
        snowFall.snow(document.body, "clear");
        const flakesCount = currentSongIndex * 10 + 50;
        snowFall.snow(document.body, {  
            flakeCount: flakesCount,  
            flakeColor: "#ffffff",  
            minSize: 2,  
            maxSize: 5,  
            minSpeed: 1,  
            maxSpeed: 3  
        });
    }
}

// Al cargar la página
window.onload = function() {
    if (typeof snowFall !== 'undefined') {
        snowFall.snow(document.body, {  
            flakeCount: 50,  
            flakeColor: "#ffffff",  
            minSize: 2,  
            maxSize: 5,  
            minSpeed: 1,  
            maxSpeed: 3  
        });
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const panel = document.querySelector(".panel-inicial");
    const botonCerrar = document.querySelector(".cerrar-panel-inicial");

    if (botonCerrar) {
        botonCerrar.addEventListener("click", function () {
            panel.style.display = "none";
        });
    }
});

// Configuración del control de volumen
if (volumeSlider) {
    volumeSlider.addEventListener("input", function () {
        const percentage = (this.value - this.min) / (this.max - this.min) * 100;
        this.style.background = `linear-gradient(to right, var(--accent-gold) ${percentage}%, rgba(212, 175, 55, 0.2) ${percentage}%)`;
        audioPlayer.volume = volumeSlider.value;
    });
}

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

let currentScale = 1;

function updateBackgroundOpacity() {
    requestAnimationFrame(updateBackgroundOpacity);
    if (!analyser) return;

    analyser.getByteFrequencyData(dataArray);
    const average = dataArray.reduce((sum, value) => sum + value, 0) / bufferLength;

    const targetScale = 1 + (average / 512);
    currentScale = currentScale + (targetScale - currentScale) * 0.45;

    const dynamicBg = document.querySelector(".dynamic-background");
    if (dynamicBg) {
        dynamicBg.style.transform = `scale(${currentScale})`;
    }

    if (backgroundPanel) {
        backgroundPanel.style.opacity = Math.max(0.1, Math.min(1.0, average / 128)).toFixed(1);
    }
}

function createActionButtons(song) {
    // Eliminar botones anteriores
    const oldBtnContainer = document.querySelector('.button-container');
    if (oldBtnContainer) oldBtnContainer.remove();

    // Crear botón de descarga
    const downloadBtn = document.createElement('button');
    downloadBtn.innerHTML = '⬇️ Descargar';
    downloadBtn.className = 'download-btn';
    downloadBtn.style.cssText = `
        background: linear-gradient(145deg, ${song.color || 'var(--accent-gold)'}, ${song.color ? song.color + '99' : '#b8860b'});
        border: 1px solid rgba(212, 175, 55, 0.3);
        color: var(--primary-black);
        padding: 12px 24px;
        font-size: 0.9rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        border-radius: 2px;
        margin: 0 8px;
        white-space: nowrap;
    `;

    // Crear botón de donación
    const paypalBtn = document.createElement('button');
    paypalBtn.innerHTML = '💳 Donar';
    paypalBtn.className = 'paypal-btn';
    paypalBtn.style.cssText = `
        background: linear-gradient(145deg, var(--secondary-black), var(--primary-black));
        border: 1px solid rgba(212, 175, 55, 0.3);
        color: var(--text-primary);
        padding: 12px 24px;
        font-size: 0.9rem;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 1px;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        border-radius: 2px;
        margin: 0 8px;
        white-space: nowrap;
    `;

    // Efectos hover para ambos botones
    [downloadBtn, paypalBtn].forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.3)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Funcionalidad del botón de descarga
    downloadBtn.addEventListener('click', () => {
        try {
            const link = document.createElement('a');
            link.href = song.audio;
            link.download = `${song.title.replace(/[/\\?%*:|"<>]/g, '')} - ${song.author.replace(/[/\\?%*:|"<>]/g, '')}.mp3`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Feedback visual
            downloadBtn.innerHTML = '✅ Descargando...';
            setTimeout(() => {
                downloadBtn.innerHTML = '⬇️ Descargar';
            }, 2000);
        } catch (error) {
            console.error('Error al descargar:', error);
            downloadBtn.innerHTML = '❌ Error';
            setTimeout(() => {
                downloadBtn.innerHTML = 'Descargar';
            }, 2000);
        }
    });

    // Funcionalidad del botón de donación
    paypalBtn.addEventListener('click', () => {
        window.open('https://paypal.me/FacundoAmelotti', '_blank');
        
        // Feedback visual
        paypalBtn.innerHTML = '✨ ¡Gracias!';
        setTimeout(() => {
            paypalBtn.innerHTML = '💳 Donar';
        }, 2000);
    });

    // Crear contenedor para los botones
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    buttonContainer.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0;
        margin: 24px 0;
        padding: 20px 0;
        border-top: 1px solid rgba(212, 175, 55, 0.2);
        flex-wrap: wrap;
    `;

    buttonContainer.appendChild(downloadBtn);
    buttonContainer.appendChild(paypalBtn);

    return buttonContainer;
}

function loadSong(index) {
    if (!songs || !songs[index]) return;
    
    const song = songs[index];
    audioPlayer.src = song.audio;
    
    if (songImage) songImage.src = song.image;
    if (songTitle) songTitle.textContent = song.title;
    if (songAuthor) songAuthor.textContent = song.author;
    if (songDescription) songDescription.textContent = song.description;
    
    // Aplicar colores del tema
    document.documentElement.style.setProperty('--current-song-color', song.color || 'var(--accent-gold)');
    
    if (listBtn) {
        listBtn.style.backgroundColor = song.color || 'var(--accent-gold)';
    }
    
    if (autoplayCheckbox) {
        autoplayCheckbox.style.accentColor = song.color || 'var(--accent-gold)';
    }
    
    // Manejar la nota de la canción
    if (songNote) {
        songNote.innerHTML = '';
        
        if (song.nota) {
            const noteValue = parseInt(song.nota, 10);
            const noteLabel = document.createElement('span');
            noteLabel.textContent = 'Nota personal: ';
            noteLabel.style.cssText = `
                color: var(--text-secondary);
                font-size: 0.9rem;
                text-transform: uppercase;
                letter-spacing: 1px;
            `;
            songNote.appendChild(noteLabel);

            for (let i = 0; i < noteValue; i++) {
                const starImg = document.createElement("img");
                starImg.src = "./src/img/star.png";
                starImg.alt = "⭐";
                starImg.style.cssText = `
                    width: 18px;
                    height: 18px;
                    margin-right: 3px;
                    filter: brightness(1.2) contrast(1.1);
                `;
                songNote.appendChild(starImg);
            }

            const ratingText = document.createTextNode(` / 10`);
            songNote.appendChild(ratingText);
        }
    }

    // Crear y agregar los botones de acción
    const buttonContainer = createActionButtons(song);
    
    // Encontrar el lugar correcto para insertar los botones
    let insertLocation = songNote;
    if (!insertLocation) insertLocation = songDescription;
    if (!insertLocation) insertLocation = songAuthor;
    if (!insertLocation) insertLocation = songTitle;
    
    if (insertLocation && insertLocation.parentNode) {
        // Insertar después del elemento de referencia
        if (insertLocation.nextSibling) {
            insertLocation.parentNode.insertBefore(buttonContainer, insertLocation.nextSibling);
        } else {
            insertLocation.parentNode.appendChild(buttonContainer);
        }
    } else {
        // Fallback: agregar al final del body
        document.body.appendChild(buttonContainer);
    }

    // Actualizar fondo dinámico
    const dynamicBg = document.querySelector(".dynamic-background");
    if (dynamicBg && song.image) {
        dynamicBg.style.backgroundImage = `url(${song.image})`;
        dynamicBg.style.backgroundSize = "cover";
        dynamicBg.style.backgroundPosition = "center center";
        dynamicBg.style.backgroundRepeat = "no-repeat";
        dynamicBg.style.backgroundAttachment = "fixed";
        dynamicBg.style.backgroundColor = "black";
    }

    // Actualizar título del panel de tracks
    updateTrackTitle();
}

function updateTrackTitle() {
    const trackTitle = document.querySelector('.panel-tracks p');
    if (trackTitle && songs) {
        trackTitle.textContent = `Track ${currentSongIndex + 1}/${songs.length}`;
    }
}

// Event listeners
if (audioPlayer) {
    audioPlayer.addEventListener("ended", () => {
        if (autoplayCheckbox && autoplayCheckbox.checked) {
            currentSongIndex = (currentSongIndex + 1) % songs.length;
            loadSong(currentSongIndex);
            audioPlayer.play();
            if (playPauseBtn) playPauseBtn.textContent = "||";
            updateSnowfall();
        }
    });
}

// Cargar la primera canción al iniciar
if (typeof songs !== 'undefined' && songs.length > 0) {
    loadSong(currentSongIndex);
}

if (playPauseBtn) {
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
}

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        audioPlayer.currentTime = 0;
        audioPlayer.pause();
        if (playPauseBtn) playPauseBtn.textContent = "▶";
        updateSnowfall();
    });
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        audioPlayer.currentTime = 0;
        audioPlayer.pause();
        if (playPauseBtn) playPauseBtn.textContent = "▶";
        updateSnowfall();
    });
}

if (rewindBtn) {
    rewindBtn.addEventListener("click", () => {
        audioPlayer.currentTime -= 5;
    });
}

if (forwardBtn) {
    forwardBtn.addEventListener("click", () => {
        audioPlayer.currentTime += 5;
    });
}

// Crear panel de tracks con estilo profesional
const panelTracks = document.createElement("div");
panelTracks.classList.add("panel-tracks");
panelTracks.style.display = "none";

// Título del panel
const trackTitle = document.createElement("p");
trackTitle.textContent = `Track 1/${songs ? songs.length : 0}`;
panelTracks.appendChild(trackTitle);

// Lista de canciones
const trackList = document.createElement("ul");

if (typeof songs !== 'undefined') {
    songs.forEach((song, index) => {
        const trackItem = document.createElement("li");
        const trackLink = document.createElement("a");
        trackLink.href = "#";
        trackLink.textContent = `${index + 1}. ${song.title} - ${song.author}`;

        trackLink.addEventListener("click", (event) => {
            event.preventDefault();
            currentSongIndex = index;
            loadSong(currentSongIndex);
            audioPlayer.currentTime = 0;
            audioPlayer.play();
            if (playPauseBtn) playPauseBtn.textContent = "||";
            setupAudioAnalysis();
            updateSnowfall();
            
            // Cerrar panel en móvil
            if (window.innerWidth <= 1200) {
                panelTracks.style.display = "none";
            }
        });

        trackItem.appendChild(trackLink);
        trackList.appendChild(trackItem);
    });
}

panelTracks.appendChild(trackList);

// Event listener para el botón de lista
if (listBtn) {
    listBtn.addEventListener("click", (event) => {
        event.preventDefault();
        if (panelTracks.style.display === "block") {
            panelTracks.style.display = "none";
        } else {
            panelTracks.style.display = "block";
        }
    });
}

// Agregar el panel al documento
document.body.appendChild(panelTracks);

// Crear botón para cerrar el panel de tracks (solo en responsive)
const closeTrackPanelBtn = document.createElement("button");
closeTrackPanelBtn.textContent = "✕ Cerrar";
closeTrackPanelBtn.className = "close-track-panel-btn";
closeTrackPanelBtn.style.cssText = `
    display: none;
    position: absolute;
    top: 15px;
    right: 20px;
    background: transparent;
    color: var(--text-primary);
    font-size: 1rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    z-index: 1002;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

closeTrackPanelBtn.addEventListener("click", () => {
    panelTracks.style.display = "none";
});

// Mostrar el botón solo si el panel está visible y en móvil
const handleResponsiveCloseBtn = () => {
    if (window.innerWidth <= 1200 && panelTracks.style.display === "block") {
        closeTrackPanelBtn.style.display = "block";
    } else {
        closeTrackPanelBtn.style.display = "none";
    }
};

window.addEventListener("resize", handleResponsiveCloseBtn);
new MutationObserver(handleResponsiveCloseBtn).observe(panelTracks, {
    attributes: true,
    attributeFilter: ["style"],
});

// Agregar el botón al panel
panelTracks.appendChild(closeTrackPanelBtn);

// Responsive behavior
window.addEventListener('resize', () => {
    if (window.innerWidth <= 1200 && panelTracks.style.display === "block") {
        panelTracks.style.display = "none";
    }
});