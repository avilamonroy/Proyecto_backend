document.getElementById('generar-btn').addEventListener('click', generarNombreGrupo);
document.getElementById('guardar-btn').addEventListener('click', guardarNombreGrupo);
document.getElementById('gen-cartel-btn').addEventListener('click', verCartel);
document.getElementById('ver-grupos-btn').addEventListener('click', verGruposGuardados);

const data = {
    palabras1: {
        'Electric': '🎸',
        'Mystic': '🎤',
        'Silent': '🎧',
        'Wild': '🎷',
        'Golden': '🎺',
        'Funky': '🎸',
        'Cheesy': '🧀',
        'Groovy': '🎤',
        'Spicy': '🌶️',
        'Bouncy': '🏀'
    },
    palabras2: {
        'Wolves': '🐺',
        'Stars': '⭐',
        'Echoes': '🌌',
        'Beats': '🥁',
        'Dreams': '💭',
        'Unicorns': '🦄',
        'Ninjas': '🥷',
        'Penguins': '🐧',
        'Monkeys': '🐒',
        'Llamas': '🦙',
        'Dragones': '🐉',
    },
    palabras3: {
        'Band': '🎵',
        'Crew': '👥',
        'Syndicate': '🎶',
        'Collective': '🎼',
        'Ensemble': '🎻',
        'Squad': '💥',
        'Gang': '🤘',
        'Posse': '👊',
        'Horde': '💀',
        'Clan': '🛡️',
        'Tribu': '🌴',
        'Comando': '🔫'
    }
};

function generarNombreGrupo() {
    const palabra1 = obtenerPalabraYEmoji(data.palabras1);
    const palabra2 = obtenerPalabraYEmoji(data.palabras2);
    const palabra3 = obtenerPalabraYEmoji(data.palabras3);

    document.getElementById('emoji1').textContent = palabra1.emoji;
    document.getElementById('emoji2').textContent = palabra2.emoji;
    document.getElementById('emoji3').textContent = palabra3.emoji;

    const nombreGrupo = `${palabra1.palabra} ${palabra2.palabra} ${palabra3.palabra}`;
    document.getElementById('nombre-grupo').textContent = nombreGrupo;
}

function obtenerPalabraYEmoji(obj) {
    const keys = Object.keys(obj);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return { palabra: randomKey, emoji: obj[randomKey] };
}

function guardarNombreGrupo() {
    const nombreGrupo = document.getElementById('nombre-grupo').textContent;
    if (nombreGrupo && nombreGrupo !== "🙄") {
        let nombresGuardados = JSON.parse(localStorage.getItem('nombresGuardados')) || [];
        if (!nombresGuardados.includes(nombreGrupo)) {
            nombresGuardados.push(nombreGrupo);
            localStorage.setItem('nombresGuardados', JSON.stringify(nombresGuardados));
            if (nombresGuardados.length >= 3) {
                document.getElementById('gen-cartel-btn').disabled = false;
            }
            actualizarRestantes(nombresGuardados.length);
        }
    }
}

function actualizarRestantes(nombresGuardados) {
    const restantes = 3 - nombresGuardados;
    document.getElementById('nombres-restantes').textContent = restantes;
    document.getElementById('total-guardados').textContent = nombresGuardados;
    if (restantes <= 0) {
        document.getElementById('alerta-restantes').style.display = 'none';
    }
}

function verCartel() {
    window.location.href = 'cartel.html';
}

function verGruposGuardados() {
    window.location.href = 'gruposGuardados.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const nombresGuardados = JSON.parse(localStorage.getItem('nombresGuardados')) || [];
    const noPermitirCartel = nombresGuardados.length < 3
    document.getElementById('gen-cartel-btn').disabled = noPermitirCartel;
    actualizarRestantes(nombresGuardados.length);
});
