function characterCounter() {
    var count = $(this).val().length
    $(this).siblings('#charCounter').html(140 - count);
    if (count > 140) {
      console.log(count)
      $(this).siblings('#charCounter').addClass( "overfillCounter" );
    } else {
      $(this).siblings('#charCounter').removeClass( "overfillCounter" );
    }
}

$(document).ready(function() {
  $( "#tweeterText" ).on( "input", characterCounter)
});

// Add listener

