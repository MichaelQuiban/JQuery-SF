$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-stand').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    alert('mouse left');
  });
});