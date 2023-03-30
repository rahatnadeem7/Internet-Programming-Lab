const counter = document.querySelector('.counter');
const count = counter.querySelector('.count');
const incrementBtn = counter.querySelector('.increment');
const decrementBtn = counter.querySelector('.decrement');

let currentCount = 1;
count.textContent = currentCount;

incrementBtn.addEventListener('click', () => {
  currentCount++;
  count.textContent = currentCount;
});

decrementBtn.addEventListener('click', () => {
  if (currentCount > 1) {
    currentCount--;
    count.textContent = currentCount;
  }
});
