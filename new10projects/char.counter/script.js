const textarea = document.getElementById('message');
const counter = document.getElementById('char-count');
const maxLength = 200;

textarea.addEventListener('input', () => {
  const currentLength = textarea.value.length;
  counter.textContent = `${currentLength} / ${maxLength} characters`;

  // If exceeded, show warning
  if (currentLength > maxLength) {
    counter.classList.add('warning');
  } else {
    counter.classList.remove('warning');
  }
});
