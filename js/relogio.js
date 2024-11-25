   // Função para atualizar o relógio
    function updateClock() {
        const clockContainer = document.getElementById('clock-container');
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockContainer.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Função para exibir o dia atual
    function displayCurrentDay() {
        const now = new Date();
        const dayName = now.toLocaleString('default', { weekday: 'long' });
        const dayNumber = now.getDate();
        const monthName = now.toLocaleString('default', { month: 'long' });
        const year = now.getFullYear();

        document.getElementById('day-name').textContent = dayName; // Exemplo: "Monday"
        document.getElementById('day-number').textContent = dayNumber; // Exemplo: "20"
        document.getElementById('month-year').textContent = `${monthName} ${year}`; // Exemplo: "November 2024"
    }

    // Inicializar relógio e dia atual
    document.addEventListener('DOMContentLoaded', () => {
        updateClock();
        setInterval(updateClock, 1000); // Atualiza o relógio a cada segundo
        displayCurrentDay();
    });
