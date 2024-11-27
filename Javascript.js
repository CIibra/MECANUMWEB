// boutton language -----------------------------------------------------

// function changeLanguage() {
    // var language = document.getElementById("language").value;
    // if (language === "fr") {
        // window.location.href = "index.html";
    // } else if (language === "en") {
        // window.location.href = "index_fr.html";
    // } 
// }


let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlide(index) {
    // Ensure the index loops within the slide array bounds
    slideIndex = (index + slides.length) % slides.length;

    // Hide all slides and remove 'active' class
    for (let slide of slides) {
        slide.classList.remove("active");
    }

    // Show the current slide by adding 'active' class
    slides[slideIndex].classList.add("active"); 
}

function changeSlide(n) {
    showSlide(slideIndex + n);
}

// Auto-slide every 3 seconds
setInterval(() => {
    changeSlide(1);
}, 3000);

// Initialize the slideshow
// showSlide(slideIndex);


document.getElementById("menu-burger").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");

    // Si le menu est ouvert, on ferme après 3 secondes (par exemple)
    if (menu.classList.contains("show")) {
        setTimeout(function() {
            menu.classList.remove("show");
        }, 20000);  // Durée en millisecondes (ici 3000ms = 3 secondes)
    }
});

document.addEventListener('click', function(event) {
    const menu = document.getElementById("menu");
    const burger = document.getElementById("menu-burger");

    // Si le clic est en dehors du menu et du burger
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
        menu.classList.remove("show");
    }
});
