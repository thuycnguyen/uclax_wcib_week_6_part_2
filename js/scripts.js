console.log('Hello from js/scripts.js!');

const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setflavor);

function setflavor() {
  const choice = select.value;

  if (choice === 'watermelon') {
    para.textContent = 'You save 20%! Here is your coupon code: CACTI20';
  } else if (choice === 'lime') {
    para.textContent = 'You save 10%! Here is your coupon code: CACTI10';
  } else if (choice === 'pineapple') {
    para.textContent = 'You save 15%! Here is your coupon code: CACTI15';
  } else if (choice === 'strawberry') {
    para.textContent = 'You save 10%! Here is your coupon code: CACTI10';
  } else {
    para.textContent = '';
  }
}
