
// home page

const breakpoint = [
  {
    breakpoint: 1280,
    settings: {
      slidesToShow: 4
    }
  },
  {
    breakpoint: 1009,
    settings: {
      slidesToShow: 3
    }
  },
  {
    breakpoint: 720,
    settings: {
      slidesToShow: 2
    }
  },
  {
    breakpoint: 460,
    settings: {
      slidesToShow: 1
    }
  }
];



$(document).ready(function(){
    $('.slider-one').slick({
        autoplay: 'true',
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnFocus: false,
        pauseOnHover: false,
        dots: false,
        speed: 3000,
        prevArrow: ".slider-one-container .previous-icon",
        nextArrow: ".slider-one-container .next-icon"
    });
  });


  $(document).ready(function(){
    $('.slider-two').slick({
        autoplay: 'true',
        autoplaySpeed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        speed: 1000,
        prevArrow: ".slider-two-container .previous-icon",
        nextArrow: ".slider-two-container .next-icon",
        responsive: breakpoint
    });
  });



  
  $(document).ready(function(){
    $('.slider-three').slick({
        autoplay: false,
        autoplaySpeed: 100,
        infinite: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        speed: 1000,
        prevArrow: ".shop-by-style-title",
        nextArrow: ".shop-by-categories-title"
    });
  });

 

// 
$('.shop-by-style-title').click(()=>{
  $('.shop-by-style-title').addClass('underline');
  $('.shop-by-categories-title').removeClass('underline');

})

$('.shop-by-categories-title').click(()=>{
  $('.shop-by-style-title').removeClass('underline');
  $('.shop-by-categories-title').addClass('underline');

})














