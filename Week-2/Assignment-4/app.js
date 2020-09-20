const banner = document.querySelector('.banner');
const bannerHeadline = document.querySelector('.banner h1');
const actionButton = document.querySelector('.main-action'); // get main-action button
const secondRow = document.querySelectorAll('.row')[1]; // get second row of content boxes

// hide second row of content boxes at the beginning
secondRow.style.display = 'none';

// event: change banner h1 text content
banner.addEventListener('click', () => {
    bannerHeadline.textContent = 'Have a Good Time!';       
})

// event: show second row of content boxes
actionButton.addEventListener('click', () => {
    // show more
    if (secondRow.style.display === 'none') {
        actionButton.textContent = 'Show Less';
        secondRow.style.display = 'flex';
    }
    // show less
    else { 
        actionButton.textContent = 'Show More';
        secondRow.style.display = 'none'; 
    }            
})