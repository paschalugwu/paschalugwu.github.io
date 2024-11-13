//index.js

const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
    menu.classList.toggle('active');
    const hamIcon = this.querySelector('.hamburger-icon'); 
    const crossIcon = this.querySelector('.cross-icon'); 
    if (hamIcon.style.display === "none") { 
        hamIcon.style.display = "inline-block"
        crossIcon.style.display = "none"
    } 
    else { 
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
    }
});
