'use strict';

// vvvvv see footer re: $(document).ready...

function init() {
  
  // hides by embedding in HTML => style="display:none;"
  $('#unimportant-events').hide();

  // add class to HTML element, styling handled by style.css
  $('#important-events h1').addClass('js-important');

  // note .css method, embeds css style directly into HTML
  $('li:even').css('background-color', 'yellow');
  $('li:first-child').css('background-color', 'red');

  // add properties to numbers e.g. <p><span>9</span>
  // note object syntax to allow for multiple properties to be defined
  $('p span').css({
    'background-color': 'orange',
    'color': 'red',
    'font-size': '100px'
  });

}



// FOOTER
// to make sure that you don't execute any script before the document is fully loaded, start with a document ready function — which tells the code to wait to execute until the document is ready to load — and wraps all of our code inside it

$(document).ready(function() {
  console.log("javascript ready!");
  init();
});