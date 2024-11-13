//index.js

const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
    const hamIcon = this.querySelector('.hamburger-icon'); 
    const crossIcon = this.querySelector('.cross-icon'); 
    if (hamIcon.style.display === "none") { 
        hamIcon.style.display = "inline-block";
        menu.style.display = "none";
        crossIcon.style.display = "none";
    } else { 
        crossIcon.style.display = "inline-block";
        hamIcon.style.display = "none";
        menu.style.display = "block";
    } 
});

function scrollLeft() {
    document.querySelector('.services-content').scrollBy({
        top: 0,
        left: -300, // Adjust this value based on the width of the cards
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.querySelector('.services-content').scrollBy({
        top: 0,
        left: 300, // Adjust this value based on the width of the cards
        behavior: 'smooth'
    });
}
