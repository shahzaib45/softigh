$('.logo-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplayspeed: 2000,
        infinite: true,
        loop: true,
        responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
        arrows: false,
      }
    }
  ]
    });
        var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

$(document).ready(function(){
  $("#close").click(function(){
    $("#queto").hide();
    $("#empty").hide();
  });
});
$(document).ready(function(){
  $("#icon").click(function(){
    $("#queto_mobile").toggle("slide", { 200,"swing");
    
  });
});
            $(window).on("scroll", function() {
            var wScroll = $(this).scrollTop();
            if (wScroll < 50) {
                $('.layer-1').css({'transform' : 'translate(0px, -'+ wScroll +'px)'})
                $('.layer-2').css({'transform' : 'translate(0px, -'+ wScroll +'px)'})
                $('.layer-3').css({'transform' : 'translate(0px, -'+ wScroll +'px)'})
                $('.layer-4').css({'transform' : 'translate(0px, -'+ wScroll +'px)'})
            }
            else {
                $('.layer-1').css({'transform' : 'translate(0px, -'+ 50/1 +'px)'})
                $('.layer-2').css({'transform' : 'translate(0px, -'+ 50/1 +'px)'})
                $('.layer-3').css({'transform' : 'translate(0px, -'+ 50/1 +'px)'})
                $('.layer-4').css({'transform' : 'translate(0px, -'+ 50/1 +'px)'})
     }
        });