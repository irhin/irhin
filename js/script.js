$(document).ready(function() {


// STRIZH-BRANDING: DRAGGABLE STICKERS
$(function() {
  $('#fbprint-web').draggable();
  $('#fbprint-brand').draggable();
  $('.tool-0-c').draggable();
  $('.tool-1-c').draggable();
  $('.tool-2-c').draggable();
  $('.tool-3-c').draggable();
  $('.tool-4-c').draggable();
  $('.tool-5-c').draggable();
  $('.tool-5-c').draggable();
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


// INDEX: HOVER VIDEO PLAY
$('.video-container').hover(
  function() {
    $(this).children('.the-video').get(0).play();
    }, function() {
      $(this).children('.the-video').get(0).pause();
});


// STRIZH-BRANDING: CLOSE BUTTONS
$('.kids-info-button').click(function() {
  $('.kids-strizh-info').css('visibility', 'visible');
});

$('.teens-info-button').click(function() {
  $('.teens-strizh-info').css('visibility', 'visible');
});

$('.close-button').click(function() {
  $('.strizh-info').css('visibility', 'hidden');
});


// IMAGE CHANGER
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


// STRIZH-BRANDING: WINDOWS SCROLL STICKER PUMP
$(window).scroll(function(event) {
  
  scrollPosition = $(this).scrollTop();
  documentHeight = $(window).height();
  documentHeightFull = $(document).height() - $(window).height();

  // scrollKids = $('#strizh-kids').offset().top;
  // heightKids = $('#strizk-kids').outerHeight();

  scrollPercentage = parseInt((scrollPosition*100)/documentHeightFull);

  if (scrollPosition > 30) {
    $('.tool-0').addClass('pump-sticker');
  };
  if (scrollPosition > 50) {
    $('.tool-2').addClass('pump-sticker');
  };
  if (scrollPosition > 100) {
    $('.tool-1').addClass('pump-sticker');
  };
  if (scrollPosition > 200) {
    $('.tool-4').addClass('pump-sticker');
  };
  if (scrollPosition > 300) {
    $('.tool-3').addClass('pump-sticker');
  };
  if (scrollPosition > 400) {
    $('.tool-5').addClass('pump-sticker');
  };

  // if (scrollPosition > (scrollKids + heightKids - documentHeight)) {
  //   $('.tool-6').addClass('pump-sticker');
  // };

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

  // console.log('Scroll percentage is on:' + scrollPercentage + ', scroll position is:' + scrollPosition);

  // $('#odesa-map').zoom();
  $('#exodus').zoom();
  $('#motor').zoom();

  $.fn.focusWithoutScrolling = function(){
  var x = window.scrollX, y = window.scrollY;
  this.focus();
  window.scrollTo(x, y);
  };

  $('#exodus').focusWithoutScrolling();

});

});
