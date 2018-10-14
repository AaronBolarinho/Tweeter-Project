$(document).ready(function() {

  var $form = $('#newTweetForm');

  $form.on("submit", function(event) {

    var count = $(this).children("#tweeterText").val().length

    var formContent = $(this).serialize();
    event.preventDefault();

     if(count === 0) {

      $("#tweetErrorUnderfill").slideToggle(0.2)

      setTimeout(function(){
        $("#tweetErrorUnderfill").slideToggle(0.2)
        }, 2500);

      return false;

     } else if(count > 140) {

       $("#tweetErrorOverfill").slideToggle(0.2)

       setTimeout(function(){
         $("#tweetErrorOverfill").slideToggle(0.2)
         }, 2500);

       return false;

     } else {

       $.post( "/tweets", formContent ).done(function() {
       console.log("Data Loaded: " + formContent);
       loadTweets();
       })
     }
  });
});