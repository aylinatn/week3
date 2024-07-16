
function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("mystyle");
  }

  function showNotification() {
    alert("Don't Touch Me Pls");
}

var images = [
  'MP3-1.png',
  'MP3-2.png',
  'MP3-3.png',
  'MP3-4.jpg',
  'MP3-5.jpg',
];

var currentIndex = 0; 


var sliderLink = document.getElementById('slider-link');
var sliderContainer = document.getElementById('slider');
var sliderImage = document.getElementById('slider-image');
var leftArrow = document.getElementById('left-arrow');
var rightArrow = document.getElementById('right-arrow');

// JavaScript ile tıklama olayını yönetiyoruz
sliderLink.addEventListener('click', function() {
  // Slaytı göster
  sliderContainer.style.display = 'block';
});

// Slaytı kapatmak için tıklama olayını dinle
sliderContainer.addEventListener('click', function() {
  sliderContainer.style.display = 'none';
});

// Sol ok tıklama olayı
leftArrow.addEventListener('click', function(event) {
  event.stopPropagation(); // Ana div'e tıklama olayının yayılmasını engeller

  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1; // Dizinin başına dön
  }
  sliderImage.src = images[currentIndex];
});

// Sağ ok tıklama olayı
rightArrow.addEventListener('click', function(event) {
  event.stopPropagation(); // Ana div'e tıklama olayının yayılmasını engeller

  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0; // Dizinin sonuna gelindiğinde başa dön
  }
  sliderImage.src = images[currentIndex];
});


