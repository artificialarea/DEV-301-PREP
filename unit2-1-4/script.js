'use strict';

// vvvvv see footer re: $(document).ready...

function init() {
  $('#important-events h1').addClass('js-important');

}






















// FOOTER
// to make sure that you don't execute any script before the document is fully loaded, start with a document ready function — which tells the code to wait to execute until the document is ready to load — and wraps all of our code inside it

$(document).ready(function() {
  console.log("javascript ready!");
  init();
});