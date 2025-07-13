const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

let interval = null;
let remainingTime = 0;

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateDisplay() {
  display.textContent = formatTime(remainingTime);
}

startBtn.addEventListener('click', () => {
  if (interval) return; // already running

  const mins = parseInt(minutesInput.value) || 0;
  const secs = parseInt(secondsInput.value) || 0;
  remainingTime = mins * 60 + secs;

  updateDisplay();

  interval = setInterval(() => {
    if (remainingTime > 0) {
      remainingTime--;
      updateDisplay();
    } else {
      clearInterval(interval);
      interval = null;
    }
  }, 1000);
});

pauseBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
  remainingTime = 0;
  updateDisplay();
  minutesInput.value = '';
  secondsInput.value = '';
});
