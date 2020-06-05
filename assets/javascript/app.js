$(document).ready(function(){

  $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      };
    var delay = 500;
    $(".progress-bar").each(function(i) {
    $(this).delay(delay * i).animate({
    width: $(this).attr('aria-valuenow') + '%'
    }, delay);

    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()}, {
      duration: delay,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now) + '%');
        }
      });
    $(".progress-bar").addClass("notransition");
    $('.progress-bar').attr('style', "width: 0%");
    });
  });
  




















    
  });