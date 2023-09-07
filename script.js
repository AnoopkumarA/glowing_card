const card = document.getElementById('interactive-card');
const cardContainer = document.querySelector('.card-container');
const videoOverlay = document.querySelector('.video-overlay');



let isCardHovered = false;


cardContainer.addEventListener('mouseenter', () => {
    isCardHovered = true;
    card.style.transition = 'none';
    videoOverlay.style.opacity = 1;
    cursor.style.transform = 'scale(1.5)';
});

cardContainer.addEventListener('mouseleave', () => {
    isCardHovered = false;
    card.style.transition = 'transform 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    videoOverlay.style.opacity = 0;
    cursor.style.transform = 'scale(1)';
});
// Add this line to your JavaScript code to change the cursor background color


document.addEventListener('mousemove', (e) => {
    if (isCardHovered) {
        const xAxis = (window.innerWidth / 2 - e.clientX) / -24;
        const yAxis = (window.innerHeight / 3 - e.clientY) / -24;
    
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    
        // Update the cursor position
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Create the cursor element
const cursor = document.createElement('div');
cursor.classList.add('cursor');

// Create the fog element
const fog = document.createElement('div');
fog.classList.add('fog');

// Append the fog element to the cursor
cursor.appendChild(fog);

// Append the cursor to the body
document.body.appendChild(cursor);

