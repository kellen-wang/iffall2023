document.addEventListener('DOMContentLoaded', function () {
    var openCurtainButton = document.getElementById('open-curtain-button');
    if (openCurtainButton) {
        openCurtainButton.addEventListener('click', function() {
            var curtainLeft = document.getElementById('curtain-left');
            var curtainRight = document.getElementById('curtain-right');
            if (curtainLeft && curtainRight) {
                curtainLeft.style.transform = 'translateX(-100%)';
                curtainRight.style.transform = 'translateX(100%)';
            }
            this.style.display = 'none';

            setTimeout(function() {
                var mainContent = document.getElementById('main-content');
                if (mainContent) {
                    mainContent.style.display = 'flex'; 
                }
                document.body.style.overflow = 'auto';
                document.documentElement.style.overflow = 'auto';
            }, 1000); 
        });
    }

    var hamburger = document.querySelector('.hamburger-menu');
    var navBar = document.querySelector('.nav-bar');
    if (hamburger && navBar) {
        hamburger.addEventListener('click', function () {
            navBar.classList.toggle('is-active');
        });
    }
    var navLinks = document.querySelectorAll('.nav-bar a');
    navLinks.forEach(function(link) {
        if (link.href === window.location.href) {
            link.classList.add('active-link');
        }
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
