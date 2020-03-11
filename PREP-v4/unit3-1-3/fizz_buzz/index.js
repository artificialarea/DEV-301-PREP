'use strict';

function handleFizzBuzz() {

  $('#number-chooser').on('submit', event => {
    // prevent `form` from posting submission, resulting in error
    event.preventDefault(); 
    // get value submitted
    const num = $(event.currentTarget).find('#number-choice').val();
    // declare an array in anticipation of storing individual DOM elements for each number counted
    const results = [];
    // counting (and storing/pushing)
    for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        results.push('<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>');
        // ????
        // NOTE: in repl.it solution they wrapped the items pushed in an additional jquery function results.push( $('...') );
        // Dunno why. E.g. 
        // results.push($(
        //       '<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>'));
        // ???? 
      } else if (i % 3 === 0) {
        results.push('<div class="fizz-buzz-item fizz"><span>fizz</span></div>');
      } else if (i % 5 === 0) {
        results.push('<div class="fizz-buzz-item buzz"><span>buzz</span></div>');
      } else {
        results.push(`<div class="fizz-buzz-item"><span>${i}</span></div>`);
      }
    }
    
    // in case there are already results displayed
    $('.js-results').empty();
    // attach our results to the <div> element in the DOM
    $('.js-results').append(results);
  });
}

$(handleFizzBuzz);