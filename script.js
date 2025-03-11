const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Manually list the images in the img folder (make sure to update these with actual image file names)
let images = [
    
    "img/Z_FPS_1.png"
];
let currentIndex = 0;

// Image Slider Controls
prevBtn.addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

nextBtn.addEventListener("click", function() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

function updateSlider() {
    sliderImage.src = images[currentIndex];
}

// Initialize the slider with the first image
updateSlider();
