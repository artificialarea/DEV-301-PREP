'use strict';

function handleFizzBuzz() {

  $('#number-chooser').on('submit', event => {
    // prevent `form` from posting submission, resulting in error
    event.preventDefault(); 
    
    const numChoice = $(event.currentTarget).find('#number-choice');
    const num = numChoice.val();
    let result;

    if (num % 3 === 0 && num % 5 === 0) {
      result = 'fizzbuzz';
    } else if (num % 3 === 0) {
      result = 'fizz';
    } else if (num % 5 === 0) {
      result = 'buzz';
    } else {
      result = num;
    }

    // console.log(event.target);
    // console.log(num);
    // console.log(result);

    $('.js-results').html(function() {
      if (result !== num) {
        return `<div class='fizz-buzz-item ${result}'><span>${result}</span></div>`;
      } else {
        return `<div class='fizz-buzz-item'><span>${result}</span></div>`;
      }
    });
  });
}

$(handleFizzBuzz);