const menu = document.querySelector('#menu');
const burger = document.querySelector('#burger');

burger.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else  {
    menu.classList.add('hidden');
  }
})

// Get all the recipe cards
const recipeCards = document.querySelectorAll('.card');

// Get all the recipe details divs
const recipeDetails = document.querySelectorAll('.recipe-details');

// Add click event listener to each recipe card
recipeCards.forEach((card, index) => {
  card.addEventListener('click', () => {
    // Hide all recipe details divs
    recipeDetails.forEach((detail) => {
      detail.classList.add('hidden');
    });

    // Show the selected recipe details div
    recipeDetails[index].classList.remove('hidden');
  });
});
