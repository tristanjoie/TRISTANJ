// These functions open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display= "block";
}

function closeForm()    {
    document.getElementById("myForm").style.display= "none";
}

// this function displays the first image in the slideshow when the page loads
var slideIndex=1;
showSlides(slideIndex);

// THis function changes the slide when the left or right arrows are clicked
function plusSlides(n)  {
    showSlides(slideIndex += n);
}

// this function shanges the slide when the dots are clicked
function currentSlide(n)    {
    showSlides(slideIndex=n);
}

// This function determines what slide is being displayed depending on the next of button clicked to select it
function showSlides(n)  {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n> slides.length) {slideIndex=1};
    if (n<1) {slideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++)   {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex -1].className += " active";
}

// this will close the contact form when clicked off it.
document.addEventListener("click", function(event){
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )