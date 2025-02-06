document.addEventListener("DOMContentLoaded", function () {
    startTimer("2024-05-05");
    showSlides();
});

function startTimer(startDate) {
    let startTime = new Date(startDate);

    function updateTimer() {
        let now = new Date();

        let years = now.getFullYear() - startTime.getFullYear();
        let months = now.getMonth() - startTime.getMonth();
        let days = now.getDate() - startTime.getDate();

        // Se os dias forem negativos, ajustar corretamente
        if (days < 0) {
            months--;
            let lastMonthDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
            days += lastMonthDays;
        }

        // Se os meses forem negativos, ajustar corretamente o ano
        if (months < 0) {
            years--;
            months += 12;
        }

        // Calcular horas, minutos e segundos
        let hours = now.getHours() - startTime.getHours();
        let minutes = now.getMinutes() - startTime.getMinutes();
        let seconds = now.getSeconds() - startTime.getSeconds();

        // Ajustar negativos para horas, minutos e segundos
        if (seconds < 0) {
            seconds += 60;
            minutes--;
        }
        if (minutes < 0) {
            minutes += 60;
            hours--;
        }
        if (hours < 0) {
            hours += 24;
            days--;
        }

        // Atualizar os valores na página
        document.getElementById("years").innerText = years;
        document.getElementById("months").innerText = months;
        document.getElementById("days").innerText = days;
        /*document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;*/
    }

    // Atualizar o contador a cada segundo
    setInterval(updateTimer, 1000);
}

let currentSlide = 0;

function showSlides() {
    let slides = document.querySelectorAll(".carousel-slides img");
    slides.forEach(slide => (slide.style.display = "none"));
    if (slides.length > 0) {
        slides[currentSlide].style.display = "block";
    }
}

function moveSlide(step) {
    let slides = document.querySelectorAll(".carousel-slides img");
    if (slides.length === 0) return;

    currentSlide += step;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlides();
}