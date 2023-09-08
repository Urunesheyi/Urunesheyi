// Color changing function
const myElement = document.getElementById('heading');


const colors = ['red', 'green', 'blue', 'orange', 'purple'];


let currentIndex = 0;


const colorInterval = setInterval(function() {
   
    myElement.style.color = colors[currentIndex];

  
    currentIndex++;

    
    if (currentIndex >= colors.length) {
        currentIndex = 0;
    }
}, 1000); 


// Function to open popup with a specific URL
function openPopup(url) {
  window.open(url, '_blank', 'width=500,height=300');
}


const openPopupButton = document.getElementById('openPopup');

openPopupButton.addEventListener('click', function() {
  openPopup('https://www.linkedin.com/in/urunesheyi-ejovwo-ottoh-27a502284');
});

