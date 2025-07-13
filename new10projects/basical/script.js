const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;

    if (value === '=') {
      try {
        display.value = eval(display.value); // ⚠️ Use eval safely for learning only
      } catch {
        display.value = 'Error';
      }
    } else if (value === 'C') {
      display.value = '';
    } 
     else {
      display.value += value;
    }
  });
});
