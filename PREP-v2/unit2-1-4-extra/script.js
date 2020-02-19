'use strict';

// copy.n.pasted instructions from CodePen

// REVISIT...
// Goal 4

$(document).ready(function(){

  //WRITE YOUR CODE DIRECTLY INTO THIS FILE!!!

// This is a playground. Don't be afraid to break it!
// After each goal, write the related code. You can comment out each piece as you write it so you can see the effects of your next line of code. 

// DONT COPY AND PASTE! By typing everything out, each time, it will drill the syntax into your fingers.


// Practicing Selectors:

// Goal 1: Select the h1, and change the text to say "My jQuery Workout". You can write that like this  $('').text('My jQuery Workout'). You will need to change the selector $('') to target the h1.

$('h1').text('My jQuery Workout');


// Goal 2: Use the same text function to change the h2 to whatever you want.
  
$('h2').text('via Codepen exercises. Not sure what is causing the half-second latency for the dynamic changes...');


// Goal 3: The paragraph should be a little skinnier. Try using the width() function in the same way as the text function, passing in a number, i.e. $('').width(200)

$('p').width(250);


// ** REVISIT **
// Goal 4: There are a few list items. Try changing the text of all of them at the same time. 

// $('li').text('concept');
// ^^^^ problem: purges everything =/

// soooooooo
// used `.html()` method instead of `.text()` method
// with `.replace()` javascript method (not a jquery method)
// to keep the button and functionality. Not sure why I had to nest a $ within $.method

// problem, tho: the method duplicates first instance of #notButton button for each <li>
// $('li').html($('li').html().replace('item', 'concept'));


//  Goal 5: Now try changing each one individually, using the id to select the list item, and changing the text to something unique. 

$('li:nth-child(2)').text('concepto deux');
$('li#four').text('c4');


// Practicing Traversal:

// Goal 1: Start off by selecting the h1, then find all the siblings (use the sibling() function). You can wrap this code in console.log() to log the results. You will need to open the developer tools console to see this. 

console.log($('h1').siblings());


// Goal 2: Now, narrow down the siblings to just the h2 by passing a parameter to the siblings function, siblings('') , and change the text of the h2. 
  
$('h1').siblings('h2').text('sibling rivalries');
// don't see the point of ^^^^ when you can be more direct to avoid excessive specificity?
$('h2').text('sibling rivalries, revisited');


// Goal 3: starting from the h1, hide all the li with the class of text. This will require you to use siblings() and children() and hide(). 

// could just do this, but guess the want me to practice traversing
// $('li.text').hide();

$('h1').siblings('ul').children('.text').hide();


// Goal 4: start from the button, using the id to select it. From there, use the hide() function to hide the li with the class button. This goal will require the use of parent() as well as the methods you have used so far. 


$('button#notButton').parent('.button').hide(); // specific button via id
$('button').parent('.button').hide();           // all buttons via class


});
console.log('Write your code directly into the JS window');