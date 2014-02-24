jQuery(function ($) {
  "use strict";

  var timer;

  $(document).ready(function () {
    // Toggle Source Code
    $('#share').click(function () {
      $('#embed-code').toggle();
      $('#supersized').toggleClass("faded").fadeIn(0);
      return false;
    });

    // Toggle Source Code
    $('#close').click(function () {
      $('#embed-code').hide();
      $('#supersized').removeClass("faded");
      return false;
    });


    // Hide overlays.
    function hideOverlays() {
      $('#title-bar, #controls-wrapper').addClass('hide').fadeOut();
    }

    // Show overlays.
    function displayOverlays() {
      $('#title-bar, #controls-wrapper').removeClass('hide').fadeIn(0);
    }

    // Hover on overlays.
    function cursorOut(timer) {
      clearInterval(timer);
      if ($('#title-bar').hasClass('hide') && $('#controls-wrapper').hasClass('hide')) {
        displayOverlays();
      }
    }

    // Out from overlay.
    function cursorOver() {
      timer = setInterval(hideOverlays, 1000);
    }

    // Hover.
    $('#hidden-center').hover(cursorOver, function () {
      cursorOut(timer);
    });

    // Full screen.
    $('#fullscreen').click(function () {
      if (BigScreen.enabled) {
        BigScreen.toggle();
      }
    });

    // Supersized.
    $.supersized({
      // Functionality
      slideshow: 1,            // Slideshow on/off
      autoplay: 0,             // Slideshow starts playing automatically
      start_slide: 1,          // Start slide (0 is random)
      stop_loop: 1,            // Pauses slideshow on last slide
      random: 0,               // Randomize slide order (Ignores start slide)
      slide_interval: 3000,    // Length between transitions
      transition: 1,           // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
      transition_speed: 100,   // Speed of transition
      new_window: 1,           // Image links open in new window/tab
      pause_hover: 0,          // Pause slideshow on hover
      keyboard_nav: 1,         // Keyboard navigation on/off
      performance: 1,          // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
      image_protect: 1,        // Disables image dragging and right click with Javascript

      // Size & Position
      min_width: 0,            // Min width allowed (in pixels)
      min_height: 0,           // Min height allowed (in pixels)
      vertical_center: 1,      // Vertically center background
      horizontal_center: 1,    // Horizontally center background
      fit_always: 0,           // Image will never exceed browser width or height (Ignores min. dimensions)
      fit_portrait: 1,         // Portrait images will not exceed browser height
      fit_landscape: 0,        // Landscape images will not exceed browser width

      // Components
      slide_links: false,      // Individual links for each slide (Options: false, 'num', 'name', 'blank')
      thumb_links: 0,          // Individual thumb links for each slide
      thumbnail_navigation: 0, // Thumbnail navigation
      slides: Walkthrough_slideshow,

      // Theme Options
      progress_bar: 0,            // Timer for each slide
      mouse_scrub: 0
    });
  });
});
