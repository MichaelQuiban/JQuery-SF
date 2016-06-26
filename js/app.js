$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-stand').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-stand').show();
  })
  .mousedown(function() {
    console.log('mousedown');
    // play hadouken sound
    // show hadouken and animate it to the right of the screen
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show();
  })
  .mouseup(function() {
    console.log('mouseup');
   $('.ryu-throwing').hide();
   $('.ryu-ready').show();
  });
});