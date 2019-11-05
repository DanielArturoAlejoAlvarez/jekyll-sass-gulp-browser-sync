/////////////////////////////////////FUNCTIONAL///////////////////////////////////////

$(function() {  
  smoothScroll(800);
  mobileNav();
});



function smoothScroll(timer) {
  $('a[href^="#"]').on("click", function(event) {
    var target = $($(this).attr("href"));
    if (target.length) {
      event.preventDefault();
      $("html,body").animate(
        {
          scrollTop: target.offset().top
        },
        timer
      );
    }
  });
}

function mobileNav() {
  $(".mobile-nav-toggle").on("click", function() {
    var status = $(this).hasClass("is-open");
    if (status) {
      $(".mobile-nav-toggle,.mobile-nav").removeClass("is-open");
    } else {
      $(".mobile-nav-toggle,.mobile-nav").addClass("is-open");
    }
  });
}



/////////////////////////////////SCROLL///////////////////////////////////////////

$(window).scroll(function() {
  
});


/////////////////////////////////////RESIZE////////////////////////////////////////


$(window).resize(function() {
  if ($(window).width() > 640) {
    mentoringWideStart();
  } else {
    mentoringNarrowStart();
  }
});
