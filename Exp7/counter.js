// Get the HTML elements for the increment and decrement buttons
const incrementButton = document.querySelector('.increment');
const decrementButton = document.querySelector('.decrement');
const countElement = document.querySelector('.count');

// Set the initial quantity to 1
let quantity = 1;

// Add event listeners to the buttons
incrementButton.addEventListener('click', () => {
  quantity++;
  updateCount();
});

decrementButton.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    updateCount();
  }
});

// Function to update the count element with the current quantity
function updateCount() {
  countElement.textContent = quantity;
}
