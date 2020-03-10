'use strict';

// PSEUDOCODE

// when user selects one of the thumbnail images
// using a mouse OR (ARIA-friendly) keyboard:
// [1] that image should be displayed in full-sized (hero) image container on the top and [2] should update the `alt` attribute.

// (Note to self: change html so ARIA-friendly, e.g. change <img> to <input type="image">, toggle with aria-selected=true/false attribute, image-on/image-off class, etc).

function handleCarousel() {

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
    // update hero image (an alt text) with selected thumbnail image 
    if (!pressedBool) { 
      targetCat.addClass('selected-thumbnail').attr('aria-pressed', !pressedBool);
      $('.js-hero img').attr('src', targetCat.attr('src'));
      $('.js-hero img').attr('alt', targetCat.attr('alt'));
    }
  });
}

$(handleCarousel);