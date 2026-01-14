// script.js - Audio and Button Transformation

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const button = document.querySelector('button');
    
    // Create audio element
    const audio = new Audio();
    audio.src = 'hello.mp3'; // You'll need to add a sound file named sound.mp3
    
    // Variable to track button state
    let isClicked = false;
    
    // Array of possible images (you can add more)
    const images = [
        'sup.jfif',
        
    ];
    
    // Button click event
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent any default behavior
        
        // Play the audio
        audio.play().catch(error => {
            console.log('Audio play failed:', error);
            // Fallback: If audio fails, just change the button
            changeButtonToImage();
        });
        
        // Change button to image if not already clicked
        if (!isClicked) {
            changeButtonToImage();
            isClicked = true;
        }
    });
    
    // Function to change button to an image
    function changeButtonToImage() {
        // Randomly select an image from the array
        const randomImage = images[Math.floor(Math.random() * images.length)];
        
        // Create image element
        const img = document.createElement('img');
        img.src = randomImage;
        img.alt = 'Fun Image';
        img.style.width = '200px';
        img.style.height = 'auto';
        img.style.borderRadius = '10px';
        img.style.objectFit = 'cover';
        img.style.cursor = 'pointer';
        
        // Replace button content with image
        button.innerHTML = '';
        button.appendChild(img);
        button.style.padding = '0';
        button.style.backgroundColor = 'transparent';
        button.style.border = 'none';
        
        // Add click event to image to change back to button
        img.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent button click event
            
            // Change back to original button
            button.innerHTML = 'Hey!!😜<br> Click here.';
            button.style.padding = '10px 30px';
            button.style.backgroundColor = '#f1f1f1';
            button.style.border = '1px solid #fafafa';
            button.style.borderStyle = 'solid';
            
            isClicked = false;
        });
    }
    
    // Optional: Add hover effect for the image
    button.addEventListener('mouseenter', function() {
        if (isClicked) {
            this.style.transform = 'scale(1.05)';
        }
    });
    
    button.addEventListener('mouseleave', function() {
        if (isClicked) {
            this.style.transform = 'scale(1)';
        }
    });
});
// Function to toggle the navigation menu
// Add to your script.js file
function toggleMenu() {
    const menu = document.querySelector('nav ul');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Close menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('nav ul');
        const hamburger = document.querySelector('.hamburger');
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const menu = document.querySelector('nav ul');
    const hamburger = document.querySelector('.hamburger');
    const isClickInside = event.target.closest('nav');
    
    if (!isClickInside && menu.classList.contains('active')) {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});