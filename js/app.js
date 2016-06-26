$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryu-stand').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-stand').show();
        $('.ryu-ready').hide();
    })
      .mousedown(function() {
    playHadouken();
    $('.ryu-action').hide();  
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
      .animate(
        {'left': '300px'},
        500,
        function() {
          $(this).stop();
          $(this).hide();
          $(this).css('left', '-212px');
        }
      );
  })
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });

});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}