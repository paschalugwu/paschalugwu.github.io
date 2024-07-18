//index.js

const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
    const hamIcon = this.querySelector('.hamburger-icon'); 
    const crossIcon = this.querySelector('.cross-icon'); 
    if (hamIcon.style.display === "none") { 
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    } 
    else { 
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    } 
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".links");

    links.forEach(link => {
        link.addEventListener("click", function() {
            const targetId = this.dataset.target;
            const sections = document.querySelectorAll("details");

            sections.forEach(section => {
                if (section.id === targetId) {
                    section.setAttribute("open", "true");
                } else {
                    section.removeAttribute("open");
                }
            });
        });
    });
});
