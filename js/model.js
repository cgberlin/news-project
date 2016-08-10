function animateLanding(){
  $('#landing-title').addClass('animated rollIn');
}

$('.landing-page-container').on('click', '#landing-title', function(){
  $('#landing-title').removeClass('animated rollIn').addClass('animated hinge').delay(2000).queue(function(next) {
    $('#landing-title').hide();
    $('#landing-credits').addClass('animated rollIn').show();
    next();
  });
});
