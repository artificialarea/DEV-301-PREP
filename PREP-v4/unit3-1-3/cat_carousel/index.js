'use strict';

$('.js-thumbnail').on('click', e => {
  // save reference to selected cat image
  const targetCat = $(e.currentTarget);
  // and reference all the other images (for inactive toggle purposes)
  const otherCats = $('.js-thumbnail').not(targetCat);

  // store whether this image is aria-pressed.
  // because .attr() returns strings, we convert it
  // back to a boolean by making a strict operative comparison.
  const pressedBool = $(targetCat).attr('aria-pressed') === 'true';

  // remove 'selected-thumbnail' and uncheck cats that are not this one
  // note chained attributes of .removeClass() + .attr() 
  otherCats.removeClass('selected-thumbnail').attr('aria-pressed', false);

  // toggle the presence of 'selected-cat'
  // tpggle aria-pressed by inverting boolean (using the ! opertator)
  // conditional to ensure it doesn't toggle if already selected
  if (!pressedBool) { 
    targetCat.addClass('selected-thumbnail').attr('aria-pressed', !pressedBool);
  }

  // // let input = $('input:image').css( {border: '3px solid red'});
  // let input = $(e.currentTarget).css( {border: '3px solid red'});


});

// PSEUDOCODE

// when user selects one of the thumbnail images
// using a mouse 
// OR keyboard (TAB key to one of thumbnails, select with ENTER key)
// (Note to self: change html so ARIA-friendly, e.g. change <img> to <input type="image">, toggle with aria-selected=true/false attribute, image-on/image-off class, etc)


// [1] that image should be displayed in full-sized image container on the top

// [2] should update the `alt` attribute

