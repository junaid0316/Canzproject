window.sr = ScrollReveal({ reset: true });
sr.reveal('.header a, .gallery_sec a, .contact span', {
  duration: 1000,
  origin: 'left',
  mobile: false,
}, 150);
sr.reveal('.video_intro_sec a, .cta a', {
  duration: 1000,
  origin: 'right',
  mobile: false,
}, 150);
sr.reveal('.blog-card .thumbnail', {
  duration: 700,
  origin: 'right',
  mobile: false,
}, 150);
sr.reveal('.sec_2 img, .wcu a', {
  duration: 1000,
  origin: 'bottom',
  mobile: false,
});
sr.reveal('.overlay a', {
  duration: 1000,
  origin: 'bottom',
  mobile: false,
}, 200);


// Add slideDown animation to Bootstrap dropdown when expanding.
$('.dropdown').on('show.bs.dropdown', function() {
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
});

// Add slideUp animation to Bootstrap dropdown when collapsing.
$('.dropdown').on('hide.bs.dropdown', function() {
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
});


// CLICK TO TOP BUTTON
$(document).ready(function() {
  $('.panel-clr').click(function() {
    $(this).toggleClass('on');
    if ($(this).hasClass('on')) {
      $(this).parents().css('border-color', '#4c535d')
    } else {
      $(this).parents().css('border-color', '#EEEEEE')
    }
  })
  //HEADER  
  $('.more').click(function() {
    $(this).hide();
    $('.header p').slideUp();
    $('.header a').css('display', 'block');
    $('.more-down').css('display', 'block');
  });
  $('.more-down').click(function() {
    $(this).hide();
    $('.header p').slideDown();
    $('.header a').css('display', 'none');
    $('.more').css('display', 'block');
  });

  function toggleIcon(e) {
    $(e.target)
      .prev('.panel-heading')
      .find(".more-less")
      .toggleClass('glyphicon-plus glyphicon-minus');
  }
  $('.panel-group').on('hidden.bs.collapse', toggleIcon);
  $('.panel-group').on('shown.bs.collapse', toggleIcon);
  //scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function() {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  $('#back-to-top').tooltip('show');

});