const form = document.getElementById('signup-form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent form from submitting

  // Clear previous errors
  document.querySelectorAll('.error').forEach(el => el.textContent = '');

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  let isValid = true;

  // Name validation
  if (name === '') {
    showError('name', 'Name cannot be empty');
    isValid = false;
  }

  // Email validation (basic check)
  if (!email.includes('@') || !email.includes('.')) {
    showError('email', 'Enter a valid email address');
    isValid = false;
  }

  // Password validation
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  if (password.length < 8 || !hasUpperCase || !hasNumber) {
    showError('password', 'Password must be 8+ characters, include 1 number and 1 uppercase letter');
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted successfully!');
    form.reset(); // optionally reset form after success
  }
});

function showError(id, message) {
  const input = document.getElementById(id);
  const errorElement = input.nextElementSibling;
  errorElement.textContent = message;
}
