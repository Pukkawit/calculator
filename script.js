'use strict';

let display = document.querySelector('.display');
let btns = document.querySelectorAll('.buttons span');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    let evaluate = btn.classList.contains('equal');
    if (btn.getAttribute('class') === 'clr') {
      display.value = '';
    } else if (evaluate) {
      if (display.value === '') {
        display.value = '';
      } else {
        display.value = eval(display.value);
      }
    } else if (btn.classList.contains('multiply')) {
      display.value = display.value += '*';
    } else if (btn.classList.contains('division')) {
      display.value = display.value += '/';
    } else if (btn.classList.contains('backspace')) {
      let str = display.value;
      let newStr = str.slice(0, -1);
      display.value = newStr;
    } else if (btn.classList.contains('percent')) {
      let number = parseFloat(display.value);
      let percentage = number / 100;
      if (display.value === '') {
        display.value = '';
      } else {
        display.value = percentage;
      }
    } else {
      display.value = display.value + btn.innerText;
    }
  });
});
