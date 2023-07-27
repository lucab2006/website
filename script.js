var closeMenuBtn = document.querySelector('.close-menu');
      var menuToggle = document.querySelector('#menu-toggle');
      closeMenuBtn.addEventListener('click', function() {
        menuToggle.checked = false;
      });

      // slide show //

      var slideIndex = 1;
    showSlides(slideIndex);

    function PlusSlides1(n) {
        showSlides(slideIndex += n);
    }

    function currentslide1(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }
