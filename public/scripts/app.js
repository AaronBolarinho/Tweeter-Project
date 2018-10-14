/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 function createTweetElement (tweet) {

  let date = moment(tweet.created_at).fromNow()

  return $(`<article class="tweet">
            <header class="tweet-header">
            <img src=${tweet.user.avatars.small}>
              <span class="tweeter-name"> ${tweet.user.name}</span>
              <span class="tweeter-handle"> ${tweet.user.handle}</span>
             </header>
            <p>${escape(tweet.content.text)}</p>
            <footer>
              <span class="last-tweeted">${date}</span>
            </footer>
            </article>`);
};

function renderTweets(tweets) {

  $('.tweet-container').empty();

  tweets.forEach(function(tweet){

    let $tweet = createTweetElement(tweet);

    $('.tweet-container').append($tweet);

  })
};

function loadTweets(tweets) {

  $.ajax('/tweets', { method: 'GET' }).done(function(data) {
    renderTweets(data.reverse());
    $('#tweeterText').val("");
  })
}

  function escape(str) {

    var div = document.createElement('div');

    div.appendChild(document.createTextNode(str));

    return div.innerHTML;
  }

$(document).ready(function() {

 loadTweets();

  $("#composeTweet").click(function(){

    $(".new-tweet").slideToggle(50.5);

  });

  $("#composeTweet").click(function() {

    $( "#tweeterText" ).select();

  });

 $("#tweetErrorOverfill").hide();

 $("#tweetErrorUnderfill").hide();
});