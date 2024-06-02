
// first thing i did is, I created a variable called "card".
// this will selects the first element with the class "card" using jQuery and stores it in the card variable.
var card = $('.card')[0];

// Here, i created a variable called "container" to selects all elements 
// with the class "container" using jQuery and stores them in the container variable.
var container = $('.container'); 


// And here. I created a mousemove event listener, so when the user pointed the cursor in the container, 
// the container will rotate in the x and y axis.
container.on('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; 
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20;
    card.style.transform  = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


// And lastly. using the mouseleave event listener, when the user leaves the container or the card. the container/card will
// return to its original position to rotate y and x in 0 value.
container.on('mouseleave', e => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});










