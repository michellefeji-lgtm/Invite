const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const question = document.getElementById('question');
const subText = document.getElementById('sub-text');
const mainGif = document.getElementById('main-gif');

let yesScale = 1;

// Make the No button run away
noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    
    noButton.style.position = "fixed";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
    
    // Grow the Yes button to make it easier to click
    yesScale += 0.2;
    yesButton.style.transform = `scale(${yesScale})`;
});

// Celebration logic
yesButton.addEventListener('click', () => {
    question.innerHTML = "LETS GOOOO! 🥳";
    subText.innerHTML = "Tobi, check your messages for the location/time!";
    mainGif.src = "https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyNnJnOGlkNzY0N3gyYjJhaHh5b2J5NHh5cWVqeXo4Y2llZnZrMmVscSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IzXiddo2twMmdmU8Lv/giphy.gif"; // Success GIF
    
    noButton.style.display = 'none';
    question.style.animation = "bounce 0.4s infinite alternate";

    // Launch Confetti
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#27ae60', '#f1c40f']
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#27ae60', '#f1c40f']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
});
