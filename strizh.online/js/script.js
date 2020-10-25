$(document).ready(function($) {

$(window).scroll(function(event) {
  
  scrollPosition = $(this).scrollTop();
  documentHeight = $(window).height();
  documentHeightFull = $(document).height() - $(window).height();

  scrollKids = $('#strizh-kids').offset().top;
  heightKids = $('#strizk-kids').outerHeight();

  scrollPercentage = parseInt((scrollPosition*100)/documentHeightFull);

  if (scrollPosition > 100) {
    $('.carousel-image').attr('src', 'img/strizh-tools-1.svg');
  }
  if (scrollPosition > 200) {
    $('.carousel-image').attr('src', 'img/strizh-tools-2.svg');
  }
  if (scrollPosition > 300) {
    $('.carousel-image').attr('src', 'img/strizh-tools-3.svg');
  }
  if (scrollPosition > 400) {
    $('.carousel-image').attr('src', 'img/strizh-tools-4.svg');
  }
  if (scrollPosition > 500) {
    $('.carousel-image').attr('src', 'img/strizh-tools.svg');
  }
  if (scrollPosition > 600) {
    $('.carousel-image').attr('src', 'img/strizh-tools-1.svg');
  }
  if (scrollPosition > 700) {
    $('.carousel-image').attr('src', 'img/strizh-tools-2.svg');
  }
  if (scrollPosition > 800) {
    $('.carousel-image').attr('src', 'img/strizh-tools-3.svg');
  }
  if (scrollPosition > 900) {
    $('.carousel-image').attr('src', 'img/strizh-tools-4.svg');
  }
  if (scrollPosition > 1000) {
    $('.carousel-image').attr('src', 'img/strizh-tools.svg');
  }
  if (scrollPosition > 1100) {
    $('.carousel-image').attr('src', 'img/strizh-tools-1.svg');
  }
  if (scrollPosition > 1200) {
    $('.carousel-image').attr('src', 'img/strizh-tools-2.svg');
  }
  if (scrollPosition > 1300) {
    $('.carousel-image').attr('src', 'img/strizh-tools-3.svg');
  }

  if (scrollPosition > 50) {
    $('.tool-2').addClass('pump-sticker');
  }
  if (scrollPosition > 150) {
    $('.tool-1').addClass('pump-sticker');
  };
  if (scrollPosition > 250) {
    $('.tool-4').addClass('pump-sticker');
  };
  if (scrollPosition > 350) {
    $('.tool-3').addClass('pump-sticker');
  };
  if (scrollPosition > 450) {
    $('.tool-5').addClass('pump-sticker');
  };

  if (scrollPosition > (scrollKids + heightKids - documentHeight)) {
    $('.tool-6').addClass('pump-sticker');
  };

  if (scrollPercentage >= 53) {
    $('.top-strizh-logo').css('z-index', '1');
  };
  // if (scrollPercentage >= 48) {
  //   $('.egg-3').addClass('pump-sticker');
  // };
  if (scrollPercentage >= 89) {
    $('.box-1').addClass('pump-sticker');
  };
  if (scrollPercentage >= 90) {
    $('.box-2').addClass('pump-sticker');
  };
  if (scrollPercentage >= 93) {
    $('.box-3').addClass('pump-sticker');
  };  

  console.log('Scroll percentage is on:' + scrollPercentage);

});

$(function() {
  $('.tool-0-c').draggable();
  $('.tool-1-c').draggable();
  $('.tool-2-c').draggable();
  $('.tool-3-c').draggable();
  $('.tool-4-c').draggable();
  $('.tool-5-c').draggable();
  $('.tool-5-c').draggable();
  $('#strizh-title').draggable();
  $('.eggs-1-c').draggable();
  $('.eggs-2-c').draggable();
  $('.eggs-3-c').draggable();  
  $('#box-image').draggable();
  $('.box-1-c').draggable();
  $('.box-2-c').draggable();
  $('.box-3-c').draggable();
  $('.box-4').draggable();
  // $('#strizh-kids').draggable();
});

$('.kids-info-button').click(function() {
  $('.kids-strizh-info').css('visibility', 'visible');
});

$('.teens-info-button').click(function() {
  $('.teens-strizh-info').css('visibility', 'visible');
});

// $('.box-info-button').click(function() {
//   $('.box-strizh-info').css('visibility', 'visible');
// });

$('.close-button').click(function() {
  $('.strizh-info').css('visibility', 'hidden');
});

$('.pointer-area').mousemove(function(event) {
  // var dataCount = 2;
  var dataCount = $(this).data('count');
  var namePrefix = $(this).attr('data-prefix');
  // var selectName = $(this).attr('data-selector');
  var dataContainer = $('.pointer-area');
  var x = event.clientX;
  var offSet = dataContainer.offset().left;
  var cursorPosition = x - offSet;
  var wrapperWidth = dataContainer.width();
  var num = parseInt(cursorPosition / wrapperWidth * dataCount);
  // $("span:first").text('pageX:'+cursorPosition+'wrapperWidth:'+wrapperWidth);
  // $("span:last").text(num);
  $(this).next().attr('src', 'img/'+namePrefix+num+'.jpg');
  // $('.slider-indicator-item').removeClass('slider-indicator-active');
  // $('#item-'+num).addClass('slider-indicator-active');
});

})
