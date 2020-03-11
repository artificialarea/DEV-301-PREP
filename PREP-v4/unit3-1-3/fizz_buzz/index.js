'use strict';

// so VSCode Console nodeJS doesn't have 
// ReferenceError: $ is not defined
// window.$ = window.jQuery;

function handleFizzBuzz() {

  $('#number-chooser').on('submit', event => {
    // prevent `form` submission behavior, resulting in error
    event.preventDefault(); 
    
    

    $('.js-results').html(function() {
      // purging submission from texfield
      const numChoice = $(event.currentTarget).find('#number-choice');
      const num = numChoice.val();
      let result;

      console.log(event.target);
      console.log(num);
      

      for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          result = 'fizzbuzz';
          return `<div class='fizz-buzz-item ${result}'><span>${result}</span></div>`;
        } else if (i % 3 === 0) {
          result = 'fizz';
          return `<div class='fizz-buzz-item ${result}'><span>${result}</span></div>`;
        } else if (i % 5 === 0) {
          result = 'buzz';
          return `<div class='fizz-buzz-item ${result}'><span>${result}</span></div>`;
        } else {
          result = i;
          return `<div class='fizz-buzz-item'><span>${result}</span></div>`;
        }
        console.log(result);
      }

      // if just wanted a *single* result
      /*
      if (result !== num) {
        return `<div class='fizz-buzz-item ${result}'><span>${result}</span></div>`;
      } else {
        return `<div class='fizz-buzz-item'><span>${result}</span></div>`;
      }
      */
    });
  });
}

$(handleFizzBuzz);