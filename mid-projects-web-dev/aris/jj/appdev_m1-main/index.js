// alert('Hello');

// 1st step - Movement animation to happen
const card = $('.card')[0];
const container = $('.container'); 

// 5th step - all items
const photo = $('.photo img');
const title = $('.title');
const social= $('.social');
const info= $('.info h4');
const profile= $('.profile');

// 2nd step - Moving animation event
container.on('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; //rotating the element into x axis
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20; //rotating the element into y axis
    card.style.transform  = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


// 4th step - Adding animation in
container.on('mouseenter', e => {
    card.style.transform = 'none';
    // Popout animation for all items
    photo.style.transform = 'translateZ(50px)';
    title.style.transform = 'translateZ(50px)';
    social.style.transform = 'translateZ(50px)';
    info.style.transform = 'translateZ(50px)';
    profile.style.transform = 'translateZ(50px)';
});

// 3rd step - Removing animation in
container.on('mouseleave', e => {
    card.style.transform = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});


/*My Explanation:

1. Selecting Elements: 
   The jQuery selections for the elements with classes "card" and "container" are assigned to the card and {container} variables, properly.

2. Movement Animation Event:
   A function that updates the card's rotation based on mouse position is triggered by the mousemove event on the container.

3. Removing Animation In:
   The card returns to its original rotation when the mouse exits the container.

4. Adding Animation In:
   The card's transformations are reset to ({none}) and the other elements will transform to ({translateZ(50px)}) when the mouse enters the container.


5. Selecting All Items:
   I created a jquery variables to store the elements with the class "photo", "title", "social", "info", and "profile".
   */