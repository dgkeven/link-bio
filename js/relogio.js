 function updateClock() {
        const clockContainer = document.getElementById('clock-container');
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        clockContainer.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Atualizar o relógio a cada segundo
    setInterval(updateClock, 1000);

    // Inicializar o relógio ao carregar a página
    document.addEventListener('DOMContentLoaded', updateClock);